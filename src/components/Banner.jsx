import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/2 flex flex-col gap-10 md:mt-11">
          <h1 className="font-extrabold text-4xl md:text-5xl md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h1>

          <h2 className="font-medium text-[24px] text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </h2>

          <div className=" flex items-center gap-10">
            <a className="btn bg-green text-white rounded-full flex items-center justify-center gap-2 h-[80px] w-[229px] ">
              <span className="font-semibold text-[1.5rem]">Order Now</span>
            </a>
            <span className="hidden md:font-semibold text-[1.5rem]">Watch Vedio</span>
            <FaCirclePlay className="hidden md:h-[80px] w-[80px]" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img className="-mt-10" src="/banner.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-between -translate-y-11 pl-5" >
            <div className="flex gap-3  items-center bg-white py-2 pl-4 pr-8 shadow-md rounded-2xl">
              <img src="/sub-banner1.png" alt="" className="rounded-2xl" />
            
            <div className="gap-3 flex flex-col">
              <h3 className="font-bold">Spicy noodles</h3>
              <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
                <p className="text-red">$18</p>
            </div>
            </div>
            <div className="md:flex hidden  gap-3 items-center bg-white py-2 pl-3 pr-5 shadow-md rounded-2xl">
              <img src="/sub-banner2.png" alt="" className="rounded-2xl" />
              <div className="gap-3 flex flex-col">
                <h3 className="font-bold">Vegetarian salad</h3>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
                <p className="text-red">$18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
