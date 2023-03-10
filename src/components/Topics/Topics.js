import React, { useState, useEffect} from 'react';
import Cover from '../Cover/Cover';
import Featured from '../Featured/Featured';
import './Topics.css'

const Topics = () => {
const [topics, setTopics] = useState([]);

  useEffect( () =>{
       fetch('https://openapi.programming-hero.com/api/quiz')
       .then(res => res.json())
       .then(data => setTopics(data.data))
  },[]);

  return (
     <div>
        <Cover></Cover>
          <div className="container featured-quiz my-5 py-5">
      <h1 className='text-start mb-5'>Featured quizzes</h1> 
        <div className="topics-container container">    
           <div className=" row row-cols-1 row-cols-md-2 g-5">
              {
                topics.map(featured => <Featured featured={featured} key={featured.id}></Featured>)
             }
         </div>
      </div>
   </div>
     </div>
  );
};

export default Topics;