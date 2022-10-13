import React from 'react';
import './Featured.css'

const Featured = ({topic}) => {
  const { logo, name, total } = topic;
  return (
    <div className="col">
      <div className="card bg-light w-100">
          <div className='row'>
          <div className="col-4">
             <img src={logo} className="img-fluid rounded-start bg-dark
              " alt="..."/>
         </div>
         <div className="col-8">
           <div className="card-body">
               <h2 className="card-title text-warning pt-2">{name}</h2>
               <h5 className="card-text">Total Quiz: {total}</h5>
           </div>
           <button className='btn btn-dark w-50'>Start Quiz</button>
         </div>
          </div>
     </div>
  </div>


  );
};

export default Featured;
