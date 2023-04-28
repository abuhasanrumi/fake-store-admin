import React, { useState } from "react";

const AddCustomer = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleStreetAddressChange = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold mb-2">Add Customer</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="streetAddress"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                value={streetAddress}
                onChange={handleStreetAddressChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="state"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={handleStateChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="zipCode"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
