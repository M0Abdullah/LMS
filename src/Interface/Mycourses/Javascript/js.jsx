import React, { useEffect, useState } from "react";
import axios from "axios";
import "./js.css";

export default function JavaScript() {
  const [jsData, setJsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://889b0f2c-a2a4-4f20-9194-5165ded22df8.mock.pstmn.io');
        setJsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  fetchData()
  }, []);

  if (!jsData) {
    return <div className="loading">Please wait!Loading...</div>;
  }

  return (
    <div className="js">
      <h1  >Javascript</h1>
      <table className="courseTable">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Modules</th>
          </tr>
        </thead>
        <tbody>
          {jsData.courses.map((course, index) => (
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
  );
}
