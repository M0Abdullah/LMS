import React from 'react';
import SOftwareQualityAssurance from '../../UseCases/CoursesData/SOftwareQualityAssurance';
import './Software.css'; // Ensure your CSS is properly imported
import Header from '../Dashboard/Header/Header';
export default function Softwarequalityassurance() {
  return (
    <div className="backend">
      <Header/>
      <SOftwareQualityAssurance />
    </div>
  );
}
