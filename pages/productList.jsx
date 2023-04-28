import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Rating",
    dataIndex: "rating",
  },
  {
    title: "Details",
    dataIndex: "details",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const newData = products.map((product) => {
      return {
        key: product.id,
        title: product.title,
        category: product.category,
        rating: product.rating.rate,
        details: (
          <>
            <Link href={`/products/${product.id}`}>
              <AiFillEye className="text-2xl" />
            </Link>
          </>
        ),
      };
    });
    setData1(newData);
  }, [products]);

  return (
    <div>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Products List</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default ProductList;
