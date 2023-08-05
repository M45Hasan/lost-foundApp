import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";



const MessReadModal = (dat) => {
  let reduxReturnData = useSelector((state) => state);
  console.log(dat);
  return (
    
            <div size="A4" className=" w-[630px] h-[400px] border rounded-md bg-gray-800 p-6 fixed z-30 left-[330px] bottom-[110px]">
              <div className="w-[450px] text-">
                <p className="text-sm text-gray-100 font-sans font-semibold  ">
                  আপনার প্রদত্ত জাতীয় পরিচয়পত্র এবং প্রদত্ত মোবাইল নাম্বারের
                  সত্যতা যাচাই করা হয়েছে , ডিজিটাল পদ্ধতিতে।{" "}
                </p>
                <p className="text-sm text-gray-100 font-sans font-semibold mt-4 ">
                  যদি কোন তথ্য গোপন কিংবা প্রতারণার আশ্রয় গ্রহণ করে থাকেন ,
                </p>
                <p className="text-sm text-gray-100 font-sans font-semibold  ">
                  এ জন্য{" "}
                  <span className="font-bold text-[16px] border-cyan-500 border rounded-md bg-slate-600 shadow-2xl cursor-pointer">
                    {" "}
                    Lost & Found{" "}
                  </span>
                  কোন ভাবেই দায়ী থাকবেনা।{" "}
                </p>

                <div className="mt-2">
                  <span className="text-cyan-400 mt-[2]">Claimer</span>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 ">
                    {dat.dat.claimerName}
                  </p>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 ">
                    {dat.dat.finderEmail}
                  </p>
                  <span className="text-cyan-400 mt-[2]">Finder</span>
                  <p className="text-[14px] font-semibold font-sans text-gray-100">
                    {dat.dat.finderName}
                  </p>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 ">
                    {dat.dat.finderEmail}
                  </p>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 mb-[2px]">
                    {dat.dat.fiderId}
                  </p>

                  <span className="text-cyan-400 mt-[2]">Product Details</span>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 mb-[2px]">
                    {dat.dat.category}
                  </p>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 mb-[2px]">
                    {dat.dat.subcat}
                  </p>
                  <p className="text-[14px] font-semibold font-sans text-gray-100 mb-[2px]">
                    {dat.dat.claimId}
                  </p>
                </div>
              </div>
            </div>
         
  );
};

export default MessReadModal;
