import React from 'react';
import './Primarypage.css'; // Import CSS for styling

export default function Primarypage() {
  return (
    <div className="primary-container">
      <header className="primary-header">
        <h1>Welcome to the LMS</h1>
        <p>Your gateway to knowledge and skills</p>
      </header>
      <section className="primary-section">
        <div className="primary-courses">
          <h2>Featured Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <h3>Course 1</h3>
              <p>Frontend</p>
              <button>View Course</button>
            </div>
            <div className="course-card">
              <h3>Course 2</h3>
              <p>Backend</p>
              <button>View Course</button>
            </div>
            <div className="course-card">
              <h3>Course 3</h3>
              <p>Programming Fundamental</p>
              <button>View Course</button>
            </div>
            <div className="course-card">
              <h3>Course 4</h3>
              <p>Graphic Design</p>
              <button>View Course</button>
            </div>
            <div className="course-card">
              <h3>Course 5</h3>
              <p>Algorithms</p>
              <button>View Course</button>
            </div>
          </div>
        </div>
        <div className="primary-announcements">
          <h2>Announcements</h2>
          <ul>
            <li>New course on React.js coming soon!</li>
            <li>Join our webinar on Data Science next week.</li>
            <li>Reminder: Project submissions are due by Friday.</li>
            {/* Add more announcements as needed */}
          </ul>
        </div>
      </section>
      <section className="primary-stats">
        <h2>Platform Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Courses</p>
          </div>
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Students</p>
          </div>
          <div className="stat-card">
            <h3>1,200+</h3>
            <p>Instructors</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Completion Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}
