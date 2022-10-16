import React from 'react';
import './Featured.css'
import { Link, useNavigate } from 'react-router-dom';

const Featured = ({featured}) => {
  const { id, logo, name, total } = featured;

  const navigate = useNavigate(); 
  const handleNavigate = () =>{
    navigate(`/topics/${id}`);
}
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
           <Link to={`/featured/${id}`}>   
              <button className='btn btn-primary w-50' onClick={handleNavigate}>Start Quiz</button>
          </Link>
         </div>
          </div>
     </div>
  </div>


  );
};

export default Featured;
