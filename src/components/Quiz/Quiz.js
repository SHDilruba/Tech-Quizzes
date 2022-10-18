import React, { useState } from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({quiz}) => {
  const {id, question, options, correctAnswer } = quiz;
  console.log(quiz)

  const MyToastCom = () => {    
    toast.dark(correctAnswer);        
};

const MyToasttest = (e) => {  
  if(e.target.innerHTML === correctAnswer){
    toast.dark('Congratulations! your answer is correct');     
  } 
  else{
    toast.dark('Your answer is incorrect'); 
  } 
};

  return (
   <div className='quiz-container card'>
     <div className='view-ans'>
       <div className='question mb-2'>
          <p><strong>{question}</strong></p>
       </div>
            <div onClick={MyToastCom} className='view-icon'>
            <ToastContainer theme='theme' /> 
                <FontAwesomeIcon icon={faEye}></    FontAwesomeIcon>
             </div>
         </div>
           {
             options.map(option => (
              <div className='question-btn'>             
             <ul class="list-group list-group-vertical">
               <button onClick={MyToasttest}>
                    <li class="list-group-item mb-2">{option}</li>
               </button>
             </ul>
        </div>
             ))
           }
       </div>
  )
};

export default Quiz;