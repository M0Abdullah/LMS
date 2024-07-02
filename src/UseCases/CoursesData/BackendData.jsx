import React from 'react';
import img from '../../Ui.Mainframework/Assets/Images/download.jpeg';
import img1 from '../../Ui.Mainframework/Assets/Images/download1.png'
import img2 from '../../Ui.Mainframework/Assets/Images/download2.png'
export default function BackendData() {
  return (
    <div>
      <Course
        title="C# for Unity Game Development"
        teacher="Faizan Mazher"
        image={img1}
      />
      <Course
        title="Python for Beginners"
        teacher="Faizan Mazher"
        description="This course introduces Python and provides examples to work on."
        image={img}
      />
      <Course
        title="Django"
        lead="Hamid Mustafa"
        description="In this course, you will learn how to build Django-based web applications suitable for use by end users. You will learn about cookies, sessions, and authentication processes in Django. You will build navigation into your applications and explore ways to easily improve the look and feel of Django applications."
        image={img2}
      />
    </div>
  );
}

function Course({ title, teacher, lead, description, image }) {
  return (
    <div className="course">
      <h2>{title}</h2>
      {teacher && <p>Teacher: {teacher}</p>}
      {lead && <p>Lead: {lead}</p>}
      {description && <p>{description}</p>}
      {image && <img src={image} alt={`${title} logo`} />}
    </div>
  );
}
