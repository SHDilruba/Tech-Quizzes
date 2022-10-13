import React from 'react';
import img1 from '../../images/cover.webp'
import './Cover.css'

const Cover = () => {
  return (
    <div className='cover'>
       <p>Keeping yourself entertained and educated is just a quiz away. Want to have some fun or learn about a topic? Curated to learn, our online quizzes are an excellent source of knowledge. Take a quiz today to discover amazing facts about tech world.</p>
       <img src={img1} alt="" />
    </div>
  );
};

export default Cover;