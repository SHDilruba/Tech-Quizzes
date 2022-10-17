import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
  const loadQuiz = useLoaderData();
  // console.log(quiz.data)
  const quizzes = loadQuiz.data.questions;
  // console.log(quizzes)

  return (
    <div className='quiz-list mt-5 container'>
      <h2 className='mb-5 '>{quizzes.length} Quizzes of {loadQuiz.data.name}</h2>
      {
         quizzes.map(quiz => <Quiz quiz={quiz}></Quiz>) 
      }
    </div>
  );
};
   
 

export default Quizzes;