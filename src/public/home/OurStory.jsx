import React from 'react'
const serviceLists = [
    {
        id: 1,
        title: "Catering",
        des: "Delight your guests with our flavors and  presentation",
        img : "/images/home/services/icon1.png"
    },
    {
        
        id: 2,
        title: "Fast delivery",
        des: "We deliver your order promptly to your door",
        img : "/images/home/services/icon2.png"
    },
    {
        
        id: 3,
        title: "Online Ordering",
        des: "Explore menu & order with ease using our Online Ordering ",
        img : "/images/home/services/icon3.png"
    },
    {
        
        id: 4,
        title: "Gift Cards",
        des: "Give the gift of exceptional dining with Foodi Gift Cards",
        img : "/images/home/services/icon4.png"
    }
]
const OurStory = () => {
  return (
    <div className="section-container flex flex-col my-14 md:flex-row justify-between items-center">
        <div className="w-1/2 items-center">
            <div className='md:w-4/5 flex flex-col gap-4 sm:items-center mb-5'>
            <h3 className="subtitle sm:text-center md:text-left ">Our Story & Services</h3>
            <h1 className="title sm:text-center md:text-left ">Our Culinary Journey And Services</h1>
            <p className='font-medium text-[#555555] sm:text-center md:text-left'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className="btn text-white bg-green w-1/4 rounded-lg md:text-left">Explore</button>

            </div>
        </div>
        <div className="w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {
                serviceLists.map((item,i)=>(
                   <div className="text-center shadow-md rounded-lg py-5 px-4 space-y-2 text-green hover:border-green transition-all duration-200 hover:border">
                    <img src={item.img} alt="" className="mx-auto"/>
                    <h1 className="pt-3 font-semibold">{item.title}</h1>
                    <p className='text-[#90BD95]'>{item.des}</p>
                    </div> 
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default OurStory