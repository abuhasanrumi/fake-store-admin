import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Table } from "antd";

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
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [];



const Dashboard = () => {

  return (
    <div>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Dashboard</h3>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="bg-white p-6">
          <p className="font-[18px] font-medium text-gray-600">Total Sells</p>
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-0">
              $1100.00
            </h2>
            <div className="flex flex-col justify-end items-end">
              <h6 className="text-red-600 flex gap-2 font-semibold">
                <BsArrowUpRight /> 32%
              </h6>
              <p className="text-gray-600">Compared To April 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-[18px] font-medium text-gray-600">Total Sells</p>
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-0">
              $1100.00
            </h2>
            <div className="flex flex-col justify-end items-end">
              <h6 className="text-red-600 flex gap-2 font-semibold">
                <BsArrowDownRight /> 32%
              </h6>
              <p className="text-gray-600">Compared To April 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-[18px] font-medium text-gray-600">Total Sells</p>
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-0">
              $1100.00
            </h2>
            <div className="flex flex-col justify-end items-end">
              <h6 className="text-red-600 flex gap-2 font-semibold">
                <BsArrowDownRight /> 32%
              </h6>
              <p className="text-gray-600">Compared To April 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-[40px] ">
        <div className="">
          <h3 className="mb-6 text-xl md:text-3xl font-semibold">
            Income Statistics
          </h3>
          <div className="mt-8">
          </div>
        </div>
      </div>

      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default Dashboard;
