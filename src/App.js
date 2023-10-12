import React, { useEffect } from "react";
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import {apiUrl,filterData} from './data';
import {useState} from "react";
import {toast} from 'react-toastify';

const App = () => {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchData = async()=>{
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      console.log(output.data);
    }
    catch{
      toast.error("something wrong")
    }
    setLoading(false);
  }

  const [category,setCategory] = useState(filterData[0].title);

  useEffect( ()=>
    {fetchData()},[]
  )

  return (<div className="min-h-screen flex flex-col bg-bgDark2">
    
    <NavBar/>

    <div >

      <Filter filterData ={filterData} category={category} setCategory ={setCategory}/>

      <div
        className="w-11/12 max-w-[1200] mx-auto flex flex-wrap items-center justify-center items-center mih-h[50vh]"
        >{loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)}
      </div>

    </div>

    </div>);
};

export default App;
