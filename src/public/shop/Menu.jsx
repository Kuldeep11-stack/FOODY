import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from 'react-icons/fa';

const Menu = () => {

    const [menu,setMenu] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("all");
    const [sortOption , setSortOption] = useState("default");
    const [currentPage , setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);
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
        const filtered = category === "all" ? menu : menu.filter((item)=>item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
        setcurrentPage(1)
    }

    const showAll = () =>{
        setFilteredItems(menu);
        setSelectedCategory("all");
        setcurrentPage(1);
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
        setcurrentPage(1);
    }

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem-itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem,indexOfLastItem);
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
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
       <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">

         
       <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap my-5 font-semibold text-[#4A4A4A]" >
            <button onClick={showAll} className={  selectedCategory === "all" ? "active": "not-active" }>All</button>
            <button onClick={() => filterItems("salad") } className={  selectedCategory === "salad" ? "active": "not-active" }>Salad</button>
            <button onClick={() => filterItems("pizza")} className={  selectedCategory === "pizza" ? "active": "not-active" }>Pizza</button>
            <button onClick={() => filterItems("soup")} className={  selectedCategory === "soup" ? "active": "not-active" }>Soups</button>
            <button onClick={() => filterItems("dessert")} className={  selectedCategory === "dessert" ? "active": "not-active" }>Desserts</button>
            <button onClick={() => filterItems("drinks")} className={  selectedCategory === "drinks" ? "active": "not-active" }>Drinks</button>

        </div>

        <div className="flex justify-end mb-4 rounded-sm">
           <div className="p-2 bg-[#4A4A4A] rounded-sm">
            <FaFilter className="text-white h-4 w-4 "/>
            </div>
            <select name="sort" id="sort" onChange={(e)=> handleSortChange(e.target.value)} value={sortOption} className="bg-[#4A4A4A] ml-1 text-white px-2 py-1 rounded-sm">
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High To Low</option>

            </select> 
        </div>
       </div>


        <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4">
            {
                currentItems.map((item)=>(
                    <Cards key ={item._id} item={item}/>
                ))
            }
        </div>
     </div>

     <div className="flex justify-center my-8">
        {
            Array.from({length: Math.ceil(filteredItems.length/itemsPerPage)}).map((_,index) => (
                <button
                key={index+1}
                onClick={()=>paginate(index+1)}
                className={`mx-1 px-3 py-1 rounded-full ${currentPage == index +1 ? "bg-green text-white": "bg-gray-200"}`}
                >
                    {index+1}
                </button>
            ))
        }
     </div>
   </div>
  )
}

export default Menu