import React, { useState } from 'react';
import Card from './Card';

const Cards = ({courses,category}) =>{
  let dataOneArray = [];//stores api data in 1 single array
  let [likedCourses,setLikedCourses] = useState([]);

  const getCourses =()=>{
    if(category === 'All')
      {
        Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) =>{
            dataOneArray.push(course);
          })
        })
        console.log(dataOneArray)
        return dataOneArray;
      }
    else
      return courses[category];
  }
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>{
      getCourses().map((course) =>{
        return (<div>
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        </div>)
      })}
    </div>
  )
}

export default Cards;