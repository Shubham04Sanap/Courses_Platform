import React,{useState} from "react";
import {toast} from 'react-toastify';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';

const Card = (props)=>{
  const course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  let [readmore,setreadmore] = useState(false);
  let shortDescription = JSON.stringify(course.description);
  let courseDescp = readmore ? (course.description):(`${shortDescription.substring(0,1)}..`);

  function likeClickHandler(){

    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter((cid) => (cid.id !== course.id)));
      toast.warning("liked removed");
    }
    else{
      if(likedCourses.length === 0)
        setLikedCourses([course.id]);
      else
        setLikedCourses((prev) => [...prev, course.id]);
        toast.success("liked!")
    }
  }

  function readmoreHandler(){
    setreadmore(!readmore);
  }

  return (<div className="w-[300px] p-3 bg-bgDark text-white rounded-md overflow-hidden">
    <div className="relative">
      <img src = {course.image.url} alt=""></img>

      <div className="w=[20px] h-[20-px] absolute right-2 bottom-3 place-items-center">

        <button onClick={likeClickHandler}>
          {likedCourses.includes(course.id) ? (<FcLike fontSize={"1.8rem"}/>) : (<FcLikePlaceholder fontSize={"1.8rem"}/>)}
        </button>
      </div>
    </div>

    <div>
      <p className="font-semibold text-lg leading-6">{course.title}</p>
      <p className="mt-2 ">
        {course.description.substring(0,180)}
        <button onClick={readmoreHandler}>
          {courseDescp}
          {readmore ? (  `..show less.`) : (`..read more.`)}
        </button>
      </p>
    </div>
    
  </div>)
}
export default Card;