import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

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
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/orders"
        className="flex items-center text-gray-600 hover:text-gray-800 uppercase mb-[25px] ml-[-25px]"
      >
        <IoIosArrowBack className="mr-2 text-lg" />
        <span>Return to order list</span>
      </Link>
      <h3 className="text-2xl font-bold mb-6">Order Details</h3>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          {order ? (
            <>
              <p className="text-lg font-medium text-gray-700 py-1">
                Order ID: {order.id}
              </p>
              <p className="text-lg font-medium text-gray-700 py-1">
                User Name: Random User {order.userId}
              </p>
              <p className="text-lg font-medium text-gray-700 py-1">
                Order Date:{" "}
                {new Date(order.date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>

              <h4 className="text-xl font-medium mt-8 mb-2">
                Ordered Products
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {order.products.map((product) => (
                  <div
                    className="bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden"
                    key={product.productId}
                  >
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-500">
                        Product Name:
                      </p>
                      <p className="text-lg font-medium text-gray-700 mb-3">
                        Random TV{product.productId}
                      </p>
                      <p className="text-md font-medium text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-lg font-medium text-gray-700 py-1">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
