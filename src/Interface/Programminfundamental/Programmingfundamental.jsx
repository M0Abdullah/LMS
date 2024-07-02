import React from 'react';
import Programmingfundamental from '../../UseCases/CoursesData/Programmingfundamental';
import './Programmingfundamental.css'
import Header from '../Dashboard/Header/Header';

export default function MainProgrammingFundamental() {
  return (
    <div className="backend">
      <Header/>
      <Programmingfundamental />
    </div>
  );
}
