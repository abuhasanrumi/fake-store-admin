import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const CustomerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [customer, setCustomer] = useState();

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://fakestoreapi.com/users/${slug}`)
        .then((response) => {
          setCustomer(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [slug]);

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <Link
        href="/customerList"
        className="flex items-center text-gray-600 hover:text-gray-800 uppercase mb-[25px] ml-[-25px]"
      >
        <IoIosArrowBack className="mr-2 text-lg" />
        <span>Return to customer list</span>
      </Link>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Customer Details</h3>
      {customer && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-8 py-6">
            <p className="text-lg mb-2">
              Customer ID: <span className="font-medium">{customer.id}</span>
            </p>
            <p className="text-lg mb-2">
              Name:{" "}
              <span className="font-medium">
                {customer.name.firstname + " " + customer.name.lastname}
              </span>
            </p>
            <p className="text-lg mb-2">
              Username: <span className="font-medium">{customer.username}</span>
            </p>
            <p className="text-lg mb-2">
              Email: <span className="font-medium">{customer.email}</span>
            </p>
            <p className="text-lg mb-4">
              Phone: <span className="font-medium">{customer.phone}</span>
            </p>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Address</h4>
              <p className="text-lg mb-2">
                Street:{" "}
                <span className="font-medium">{customer.address.street}</span>
              </p>
              <p className="text-lg mb-2">
                City:{" "}
                <span className="font-medium">{customer.address.city}</span>
              </p>
              <p className="text-lg mb-2">
                Zipcode:{" "}
                <span className="font-medium">{customer.address.zipcode}</span>
              </p>
              <p className="text-lg">
                Geo Location: Lat(
                <span className="font-medium">
                  {customer.address.geolocation.lat}
                </span>
                ), Long(
                <span className="font-medium">
                  {customer.address.geolocation.long}
                </span>
                )
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
