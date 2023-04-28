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
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "User",
    dataIndex: "user",
  },
  {
    title: "Product Quantity",
    dataIndex: "productQty",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Details",
    dataIndex: "details",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const newData = orders.map((order) => {
      return {
        key: order.id,
        date: new Date(order.date).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        status: "Pending",
        user: "Random User",
        address: "Dhaka, BD",
        productQty: order.products.length,
        details: (
          <>
            <Link href={`/orders/${order.id}`}>
              <AiFillEye className="text-2xl" />
            </Link>
          </>
        ),
      };
    });
    setData1(newData);
  }, [orders]);

  return (
    <div>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Orders</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default Orders;
