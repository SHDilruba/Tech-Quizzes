import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
  const {id, question, options, correctAnswer } = quiz;
  console.log(quiz)

  return (
   <div className='quiz-container'>
    <div>
       <h3 className='quiz mt-5'>Quiz:</h3>
       <p className='question mb-4'> {question}</p>
    </div>
        <p><small>Choose your answer:</small></p>
           {
             options.map(option => (
              <div className='question-btn'>
                <ul class="list-group list-group-vertical">
                 <button><li class="list-group-item">{option}</li></button>
                </ul>
              </div>
             ))
           }
       </div>

  );
};

export default Quiz;