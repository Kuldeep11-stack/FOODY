import React, { useEffect, useState } from 'react'

const Menu = () => {

    const [menu,setMenu] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("all");
    const [sortOption , setSortOption] = useState("default");
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);
            }
            catch(error){
                console.log("Error fetching data",error);
            }
        };
        fetchData();
    },[]);

    const filterItems = (category) =>{
        const filtered = category === "all" ? menu : menu.filter((item)=>item.category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    const showAll = () =>{
        setFilteredItems(menu);
        setSelectedCategory("all");
    }

    const handleSortChange = (option)=>{
        setSortOption(option);
        let sortedItems = [...filteredItems];
        switch(option){
            case "A-Z":
                sortedItems.sort((a,b)=>a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a,b)=>b.name.localeCompare(a.name))
                break;
                case "low-to-high":
                    sortedItems.sort((a,b)=> a.price - b.price)
                    break;
                    case "high-to-low":
                        sortedItems.sort((a,b)=> b.price - a.price)
                        break;
            default:
                break; 
        }
        setFilteredItems(sortedItems);
    }


  return (
   <div>
     <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
    <div className="py-48 flex flex-col items-center  justify-center gap-8">
      <div className="text-center flex flex-col gap-10 md:mt-11">
        <h1 className="font-extrabold text-4xl md:text-5xl md:leading-snug leading-snug">
          For the Love of Delicious{" "}
          <span className="text-green">Food</span>
        </h1>

        <h2 className="font-medium text-[24px] text-[#4A4A4A]">
         Come with my family & feel the joy of mouthwatering food such as Greek Salad , Lasagne , Butternut Pumpin , Tokusen Wagyu , Olivas Rellenas and more for a moderate cost
        </h2>

        <div className=" flex items-center justify-center gap-10">
          <a className="btn bg-green text-white rounded-full flex items-center justify-center gap-2 h-[80px] w-[229px] shadow-md">
            <span className="font-semibold text-[1.5rem]">Order Now</span>
          </a>
         
        </div>
      </div>
    
    </div>
     </div>

     <div className="section-container">

     </div>
   </div>
  )
}

export default Menu