import React, { useEffect, useState } from 'react';
import './htmlandcss.css';
import axios from 'axios';

export default function HtmlAndCss() {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://d261e443-49d4-400f-8fbf-63dca88449c0.mock.pstmn.io');
        setCourseData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!courseData || !courseData.courses.length) return <div className="no-data">No data available</div>;

  return (
    <div>
      <div className="htmlandcss">
        <h1>HTML and CSS</h1>
      </div>
      <div className="htmlandcss1">
        <table className="courseTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Description</th>
              <th>Modules</th>
            </tr>
          </thead>
          <tbody>
            {courseData.courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.courseDescription}</td>
                <td>
                  <table className="moduleTable">
                    <thead>
                      <tr>
                        <th>Module Name</th>
                        <th>Module Description</th>
                        <th>Elements</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.modules.map((module, moduleIndex) => (
                        <tr key={moduleIndex}>
                          <td>{module.moduleName}</td>
                          <td>{module.moduleDescription}</td>
                          <td>
                            <ul className="elementsList">
                              {module.elements.map((element, elementIndex) => (
                                <li key={elementIndex}>
                                  <strong>{element.elementName}</strong>: {element.elementDescription}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
