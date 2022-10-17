import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import'./Quizzes.css';

const Quizzes = () => {
  const loadQuiz = useLoaderData();
  const quizzes = loadQuiz.data.questions;

  return (
    <div className='quiz-list mt-5 container'>
      <h2 className=" mb-5 text-center">{quizzes.length} Quizzes of {loadQuiz.data.name}</h2>
      {
         quizzes.map(quiz => <Quiz quiz={quiz}></Quiz>) 
      }
    </div>
  );
};
   
 

export default Quizzes;