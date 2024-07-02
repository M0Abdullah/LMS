import React from 'react';
import algorithm from '../../Ui.Mainframework/Assets/Images/algorithm.jpg'; // Adjust the path to your image

export default function Programmingfundamental() {
  return (
    <div className="course">
      <h2>Algorithm Learning for Beginners</h2>
      <img src={algorithm} alt="Algorithm course" />
      <p>
        Algorithm Learning for Beginners is an introductory course designed to provide students with a solid foundation in algorithms and problem-solving techniques. This course is suitable for individuals with little to no prior programming experience and aims to develop their understanding of basic algorithms and their applications. Through hands-on exercises and practical examples, students will learn how to analyze and design algorithms to solve various computational problems efficiently.
      </p>
      <p>Teacher: Faizan Mazher</p>
    </div>
  );
}
