import React from "react";

const Testimonials = () => {
  return (
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <img src="/images/home/testimonials/testimonials.png" alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="md:w-4/5">
          <h3 className="subtitle">Testimonials</h3>
          <h1 className="title">What Our Customers Say About Us</h1>
          <p className="text-[#555555] my-5 font-medium">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="/images/home/testimonials/testimonial1.png" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/home/testimonials/testimonial2.png" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/home/testimonials/testimonial3.png" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:justify-center">
            <p className="font-bold text-black ">Customer Feedback</p>
            <div className="rating flex gap-2 items-center justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <p className="font-bold text-[#454545]">4.9</p>
              <h3 className="text-[#807E7E] font-medium">(18.6k Reviews)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
