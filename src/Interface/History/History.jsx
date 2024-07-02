import React from 'react'
import './History.css'

export default function History() {
  return (
    <div>
      <div className="history">
        <h1>History/Certificate</h1>
      </div>
      <div className="history1">
        <p>
          The History/Certificates screen shows a complete history of every course the learner has completed in the training system.
        </p>
      </div>
      <div className="history2">
        <div className="history3">
          <h2>Course History</h2>
          <p>You have started and completed the course listed below. Click on a course to view or print a certificate of completion.</p>
        </div>
        <div className="history4">
          <table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Course Id</th>
                <th>Last Viewed</th>
                <th>Score</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row, replace with actual data */}
              <tr>
                <td>Sample Course</td>
                <td>12345</td>
                <td>01/01/2023</td>
                <td>95%</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
