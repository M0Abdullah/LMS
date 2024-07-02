import React from 'react';
import './Frontend.css';
import FrontnedData from '../../UseCases/CoursesData/FrontnedData';
import Header from '../Dashboard/Header/Header';

export default function Frontneddata() {
  return (
    <div>
      <Header/>
      <div className="frontend">
        <FrontnedData />
      </div>
    </div>
  );
}
