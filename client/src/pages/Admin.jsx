import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [productsData, setProductsData] = useState("");

  useEffect(() => {
    const getApplication = async () => {
      const how = await axios.get(" http://localhost:5000/lostFound/applyget");
      if (how.data.length > 0) {
        setProductsData(how.data);
      }
    };
    getApplication();
  }, []);

  const handleProductClick = async (product) => {
    await axios.post("http://localhost:5000/lostFound/emailveri", {
      email: product.claimerEmail,
      itemId: product.itemId,
      appId: product._id,
    });
  };

  return (
    <div className="bg-[#767889] w-full flex   h-screen">
      <div className="w-64 bg-gray-800 h-screen text-white p-4">
        {/* Add your sidebar content here */}
      </div>
      <div className=" flex flex-col flex-1">
        <nav className="flex items-center justify-between bg-gray-900 px-4 py-3">
          <div className="text-white font-bold text-xl">Admin Page</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Dashboard
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Settings
            </a>
            {/* Add more links for navigation */}
          </div>
        </nav>
        <div className="flex-1 bg-[#767889]  p-4">
          <div className="flex-1 bg[#CDF4E3] rounded-md p-4 ">
            <h2 className="text-2xl font-bold mb-4">All request</h2>
            <div className="w-[300px] rounded-md cursor-pointer shadow-md flex gap-x-[20px] relative">
              {productsData &&
                productsData.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#085140] text-white p-1 w-[320px] border-cyan-400 border-[1px] flex  "
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="bg-[#1F2937] border-gray-400 border-r-[1px]  w-[22%]">
                      <p className="text-[12px] font-medium mb-2">
                        {product.category}
                      </p>
                      <p className="text-[12px] font-medium mb-1">
                        {product.subcat}
                      </p>
                    </div>

                    <div className="bg-[#1F2937] text-center p-1 w-[78%]">
                      <p className="text-[12px] font-medium mb-1">
                        Email:{product.claimerEmail}
                      </p>
                      <p className="text-[12px] font-bold mb-1">
                        id:{JSON.stringify(product.itemId).slice(-9)}
                      </p>
                      <p className="text-[12px] font-bold mb-1">
                        Nid:{product.nid}
                      </p>
                      <p className="text-[12px] font-bold mb-1">
                        Mobile:{product.mb}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
