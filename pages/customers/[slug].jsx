import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
    <>
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">
        Customer Details
      </h3>
      <div>
        {customer && (
          <div>
            <p className="text-lg py-2 px-4 bg-white mb-2">
              Customer ID: {customer.id}
            </p>
            <p className="text-lg py-2 px-4 bg-white mb-2">
              Name: {customer.name.firstname + " " + customer.name.lastname}
            </p>
            <p className="text-lg py-2 px-4 bg-white mb-2">
              Username: {customer.username}
            </p>
            <p className="text-lg py-2 px-4 bg-white mb-2">
              Email: {customer.email}
            </p>
            <p className="text-lg py-2 px-4 bg-white mb-2">
              Phone: {customer.phone}
            </p>

            <h4 className="text-2xl mt-6">Address</h4>

            <div className="bg-white p-6 mt-6">
              <p className="py-[2px]">
                Street Address: {customer.address.street}
              </p>
              <p className="py-[2px]">City: {customer.address.city}</p>
              <p className="py-[2px]">Zipcode: {customer.address.zipcode}</p>
              <p className="py-[2px]">
                Geo Location: Lat({customer.address.geolocation.lat}), Long(
                {customer.address.geolocation.long})
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerDetails;
