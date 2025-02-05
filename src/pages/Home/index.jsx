import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { LuCirclePlus } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [filter, setFilter] = useState("All");
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputTotalSeles, setInputTotalSeles] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`
      );
      setData(response.data);
      setFilteredData(response.data); // Dastlab barcha ma'lumotlarni ko'rsatish
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.status === filter));
    }
  }, [filter, data]);

  const toggleAddProduct = () => {
    setShowProduct(!showProduct);
    if (showProduct) {
     
      setInputName("");
      setInputStatus("");
      setInputPrice("");
      setInputTotalSeles("");
    }
  };

  const handleCreateProduct = async () => {
    if (!inputName || !inputStatus || !inputPrice || !inputTotalSeles) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/products`, {
        productName: inputName,
        status: inputStatus,
        price: parseFloat(inputPrice),
        totalSeles: parseInt(inputTotalSeles),
      });
      toast.success("Mahsulot muvaffaqiyatli qo'shildi!");
      toggleAddProduct();
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Mahsulotni qo'shishda xatolik yuz berdi!");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
      toast.success("Mahsulot muvaffaqiyatli o'chirildi!");
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Mahsulotni o'chirishda xatolik yuz berdi!");
    }
  };

  return (
    <div className="ml-[60px] bg-gray-100">
      <ToastContainer />
      <div className="flex justify-between items-center py-6 px-8">
        <div className="bg-gray-200 p-2 flex rounded-lg space-x-2">
          {["All", "Active", "Draft", "Archived"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-md ${
                filter === btn
                  ? "bg-white text-black shadow-md"
                  : "bg-transparent text-gray-600 hover:bg-white hover:text-black"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="text-black font-medium px-4 py-2 rounded-lg bg-white border border-gray-200 flex items-center gap-2">
            <CiFileOn />
            Export
          </button>
          <button
            onClick={toggleAddProduct}
            className="text-white font-medium px-4 py-2 rounded-lg bg-black flex items-center gap-2"
          >
            <LuCirclePlus />
            Add Product
          </button>
        </div>
      </div>

      <div className="py-4 bg-white grid grid-cols-6 pl-12 mt-2">
        <p className="text-[15px] font-bold text-gray-400">Name</p>
        <p className="text-[15px] font-bold text-gray-400">Status</p>
        <p className="text-[15px] font-bold text-gray-400">Price</p>
        <p className="text-[15px] font-bold text-gray-400">Total Seles</p>
        <p className="text-[15px] font-bold text-gray-400">Creat at</p>
        <p className="text-[15px] font-bold text-gray-400 pl-2 ml-12">Action</p>
      </div>

      {filteredData.map((value) => (
        <div
          key={value.id}
          className="grid grid-cols-6 pl-12 bg-white py-4 border-t-1 border-gray-200 border-b"
        >
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://appdom.ru/image/cache/catalog/iphone/ip15pro/apple-iphone-15-pro-natural-titanium-1x-1000x1000.jpg"
              alt=""
            />
            <h1>{value.productName || "N/A"}</h1>
          </div>
          <h1>{value.status || "N/A"}</h1>
          <h1>{value.price ? `${value.price} $` : "N/A"}</h1>
          <h1>{value.totalSeles || "N/A"}</h1>
          <h1>6/23/2024</h1>
          <div className="flex items-center gap-4 pl-12">
            <MdOutlineEdit />
            <button onClick={() => handleDeleteProduct(value.id)}>
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      ))}

      {showProduct && (
        <div className="fixed inset-0 flex justify-end transition-opacity duration-300 ease-in-out bg-white bg-opacity-50">
          <div className="bg-white w-full h-full p-6">
            <h2 className="text-lg font-bold mb-4 text-center">
              Yangi Maxsulot Qo'shish
            </h2>
            <form className="w-116 mx-auto">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Maxsulot Nomi
                </label>
                <input
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  value={inputStatus}
                  onChange={(e) => setInputStatus(e.target.value)}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Narxi
                </label>
                <input
                  value={inputPrice}
                  onChange={(e) => setInputPrice(e.target.value)}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Miqdori
                </label>
                <input
                  value={inputTotalSeles}
                  onChange={(e) => setInputTotalSeles(e.target.value)}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleAddProduct}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Go Back
                </button>
                <button
                  type="button"
                  onClick={handleCreateProduct}
                  className="bg-[#20d472] text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
