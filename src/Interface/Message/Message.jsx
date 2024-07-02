import React from 'react';
import './Messsage.css'; // Import CSS for styling
import Header from '../../Interface/Dashboard/Header/Header'
export default function Message() {
  return (
    <div className="message-container">
        <Header/>
      <div className="message-header">
        <h2>Message</h2>
      </div>
      <div className="message-content">
        <div className="message-sender">
          <strong>From: </strong> John Doe
        </div>
        <div className="message-date">
          <strong>Date: </strong> June 22, 2024
        </div>
        <div className="message-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ante nec quam sodales, vel consectetur odio volutpat.
          </p>
          <p>
            Duis pharetra consequat libero, et lacinia eros lobortis sed. Nulla
            quis libero a libero pretium tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}
