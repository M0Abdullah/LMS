import React from 'react';
import GraphicDesigning from '../../UseCases/CoursesData/GraphicDesigning';
import './Graphicdesign.css'; // Ensure your CSS is properly imported
import Header from '../Dashboard/Header/Header';
export default function Graphicdesign() {
    return (
        <div className="backend">
            <Header/>
            <GraphicDesigning />
        </div>
    );
}
