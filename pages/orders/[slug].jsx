import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const OrderDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [order, setOrder] = useState();

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://fakestoreapi.com/carts/${slug}`)
        .then((response) => {
          setOrder(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [slug]);

  return (
    <>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Order Details</h3>
      <div>
        {order && (
          <div>
            <p className="text-lg py-1">Order ID: {order.id}</p>
            <p className="text-lg py-1">
              User Name: Random User {order.userId}
            </p>
            <p className="text-lg py-1">
              Order Date: {new Date(order.date).toLocaleString()}
            </p>

            <h4 className="text-2xl mt-6">Ordered Products</h4>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {order.products.map((product) => (
                <div className="bg-white p-6" key={product.productId}>
                  <p className="">Product Name: Random TV{product.productId}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
