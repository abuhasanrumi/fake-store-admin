import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      axios
        .get(`https://fakestoreapi.com/products/${slug}`)
        .then((response) => {
          setProduct(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [slug]);

  return (
    <div className="w-full">
      {isLoading && <p>Loading...</p>}
      {!isLoading && product && (
        <div className="grid grid-cols-2 gap-10">
          {/* product image start */}
          <div className="flex justify-center items-center">
            <Image
              priority={true}
              src={product.image}
              height={300}
              width={400}
              alt={product.title}
              className="object-contain"
            />
          </div>
          {/* product image end */}

          {/* product details start */}
          <div>
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.title}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center mb-2">
              <p className="mr-2 text-lg font-semibold text-red-600">
                Price : ${product.price}
              </p>
            </div>

            {/* PRODUCT CATEGORY */}
            <div className="text-md my-5">
              <p>Category: {product.category}</p>
            </div>

            {/* PRODUCT RATING */}
            <div className="text-md my-5">
              <p>
                Rating: {product.rating.rate} ({product.rating.count} count)
              </p>
            </div>

            {/* PRODUCT DESCRIPTION */}
            <div className="text-md my-5">
              <p>Description: {product.description}</p>
            </div>
          </div>
          {/* product details end */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
