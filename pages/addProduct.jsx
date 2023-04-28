import { useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { Dragger } = Upload;

const AddProduct = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // create new product object
    const newProduct = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
    };
    // send the new product object to the server
    // axios.post('/api/products', newProduct).then(() => {
    //   // redirect to the products page
    //   router.push('/products');
    // }).catch((error) => {
    //   console.error(error);
    // });
    console.log(newProduct);
    // clear the form fields
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImage("");
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
    <div className="max-w-screen-lg mx-auto my-10">
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                placeholder="Enter product title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="price"
                type="text"
                placeholder="Enter product price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                type="text"
                placeholder="Enter product category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="description"
                placeholder="Enter product description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="image"
            >
              Image Upload
            </label>
            <Dragger {...props} className="border border-dashed">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
