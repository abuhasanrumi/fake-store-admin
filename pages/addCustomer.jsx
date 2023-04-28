import React, { useState } from "react";
const { Dragger } = Upload;
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

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

  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setImage(info.file.response.url);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div class="max-w-screen-lg mx-auto mb-10">
      <h3 className="mb-6 text-xl md:text-3xl font-semibold">Add Customer</h3>
      <div class="bg-white rounded-md shadow-md overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 px-8 pt-6 mb-4">
            <div className="mb-6">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single upload. Strictly prohibit from uploading
                  corporate data or other band files.
                </p>
              </Dragger>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pt-6 mb-4">
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="firstName"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="lastName"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="email"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="username"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="password"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="flex flex-col w-full md:w-auto">
              <label
                for="phone"
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                class="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label
                htmlFor="street"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="street"
                value={streetAddress}
                onChange={handleStreetAddressChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
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
            <div className="flex flex-col w-full md:w-auto">
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
            <div className="flex flex-col w-full md:w-auto">
              <label
                htmlFor="zip"
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                value={zipCode}
                onChange={handleZipCodeChange}
                className="border border-gray-300 rounded py-2 px-3 mt-1 w-full"
                required
              />
            </div>
            <div class="py-4 border-gray-200">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
