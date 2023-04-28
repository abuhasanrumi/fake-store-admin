import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Table } from "antd";
import dynamic from "next/dynamic";
const Column = dynamic(
  () => import("@ant-design/plots").then(({ Column }) => Column),
  { ssr: false }
);
const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
});

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
];

const data1 = [
  {
    key: "1",
    name: "Apple iPhone 13",
    category: "Smartphone",
    price: "$999",
    stock: 20,
  },
  {
    key: "2",
    name: "Samsung Galaxy Watch 4",
    category: "Smartwatch",
    price: "$249",
    stock: 10,
  },
  {
    key: "3",
    name: "Sony WH-1000XM4",
    category: "Headphones",
    price: "$349",
    stock: 15,
  },
  {
    key: "4",
    name: "Dell XPS 13",
    category: "Laptop",
    price: "$1,299",
    stock: 5,
  },
  {
    key: "5",
    name: "Apple iPad Air",
    category: "Tablet",
    price: "$599",
    stock: 8,
  },
  {
    key: "6",
    name: "Logitech MX Master 3",
    category: "Mouse",
    price: "$99",
    stock: 25,
  },
  {
    key: "7",
    name: "Amazon Echo Dot (4th Gen)",
    category: "Smart Speaker",
    price: "$49",
    stock: 30,
  },
  {
    key: "8",
    name: "Samsung 49-Inch QLED Q80A Series",
    category: "TV",
    price: "$1,199",
    stock: 3,
  },
  {
    key: "9",
    name: "Sony PlayStation 5",
    category: "Gaming Console",
    price: "$499",
    stock: 2,
  },
  {
    key: "10",
    name: "Bose QuietComfort 35 II",
    category: "Headphones",
    price: "$299",
    stock: 12,
  },
];

const data2 = [
  { year: "2012", sales: 2500 },
  { year: "2013", sales: 3500 },
  { year: "2014", sales: 5000 },
  { year: "2015", sales: 7000 },
  { year: "2016", sales: 2000 },
  { year: "2018", sales: 4000 },
  { year: "2020", sales: 1000 },
];

const data3 = [
  {
    type: "Fashion",
    value: 27,
  },
  {
    type: "Electronics",
    value: 25,
  },
  {
    type: "Shoes",
    value: 18,
  },
  {
    type: "Gadgets",
    value: 15,
  },
  {
    type: "Mobiles",
    value: 10,
  },
  {
    type: "Cosmatics",
    value: 5,
  },
];

const config = {
  data: data2,
  xField: "year",
  yField: "sales",
};
const config2 = {
  appendPadding: 10,
  data: data3,
  angleField: "value",
  colorField: "type",
  radius: 0.9,
  label: {
    type: "inner",
    offset: "-30%",
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: "center",
    },
  },
  interactions: [
    {
      type: "element-active",
    },
  ],
};

const Dashboard = () => {
  return (
    <div>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Dashboard</h3>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="bg-white p-6">
          <p className="font-[18px] text-gray-600">Total Sells</p>
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
          <p className="font-[18px] text-gray-600">Total Sells</p>
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
          <p className="font-[18px] text-gray-600">Total Sells</p>
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

      <div className="mt-4 mb-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
          <div className="">
            <h3 className="mb-6 text-xl md:text-3xl font-semibold">
              Income Statistics
            </h3>
            <div className="mt-8">
              <Column {...config} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="">
            <h3 className="mb-6 text-xl md:text-3xl font-semibold">Summary</h3>
            <div className="mt-8">
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-xl md:text-3xl font-semibold">
          Product Summary
        </h3>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Dashboard;
