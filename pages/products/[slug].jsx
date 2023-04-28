import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

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
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Link
        href="/products"
        className="flex items-center justify-center text-gray-600 hover:text-gray-800 uppercase mb-[50px]"
      >
        <IoIosArrowBack className="mr-2 text-lg" />
        <span>Return to products list</span>
      </Link>
      {isLoading && <p>Loading...</p>}
      {!isLoading && product && (
        <div className="flex flex-col md:flex-row gap-10">
          {/* product image start */}
          <div className="flex justify-center items-center w-full sm:w-1/2 mb-[30px]">
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
          <div className="w-full md:w-1/2 px-4">
            {/* PRODUCT TITLE */}
            <div className="text-3xl md:text-4xl font-semibold mb-2 leading-tight">
              {product.title}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center mb-2">
              <p className="mr-2 text-lg font-semibold text-red-600">
                Price : ${product.price}
              </p>
            </div>

            {/* PRODUCT CATEGORY */}
            <div className="text-lg my-5">
              <p>Category: {product.category}</p>
            </div>

            {/* PRODUCT RATING */}
            <div className="text-lg my-5">
              <p>
                Rating: {product.rating.rate} ({product.rating.count} count)
              </p>
            </div>

            {/* PRODUCT DESCRIPTION */}
            <div className="text-lg my-5">
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
