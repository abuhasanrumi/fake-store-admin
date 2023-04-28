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
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Details",
    dataIndex: "details",
  },
];

const CustomerList = () => {
  const [users, setUsers] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const newData = users.map((user) => {
      return {
        key: user.id,
        name: user.name.firstname + " " + user.name.lastname,
        phone: user.phone,
        email: user.email,
        details: (
          <>
            <Link href={`/customers/${user.id}`}>
              <AiFillEye className="text-2xl" />
            </Link>
          </>
        ),
      };
    });
    setData1(newData);
  }, [users]);

  return (
    <div>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Customers</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default CustomerList;
