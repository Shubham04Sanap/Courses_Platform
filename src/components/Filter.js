import React from "react";

const Filter = ({filterData,category,setCategory}) =>{

  function categoryHandler(filter){
    setCategory(filter);
  }

  return (
  <div className="w-11/12 flex flex-wrap gap-4 max-w-max space-x-4 mx-auto py-4 justify-center">
    {filterData.map((data) => {
      return <div>
        <button  key={data.id}
        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`} onClick={()=>categoryHandler(data.title)}>
          {data.title}
        </button>
      </div>
    })}  
  </div>);
}
export default Filter;
