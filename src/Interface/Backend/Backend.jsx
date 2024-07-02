import React from 'react';
import './Backend.css';
import BackendData from '../../UseCases/CoursesData/BackendData';
import Header from '../Dashboard/Header/Header';
export default function Backend() {
  return (
    <div className="backend">
      <Header/>
      <BackendData />
    </div>
  );
}
