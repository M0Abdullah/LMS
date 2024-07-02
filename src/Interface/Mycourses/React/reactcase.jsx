import React, { useEffect, useState } from "react";
import axios from "axios";
import "./react.css";

export default function ReactAndJavaScript() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("https://50889814-689d-4916-af78-1ba7b70c595f.mock.pstmn.io");
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h1>React and JavaScript</h1>
      <table className="courseTable">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Module Name</th>
            <th>Module Description</th>
            <th>Elements</th>
          </tr>
        </thead>
        <tbody>
          {data.courses.map((course, index) => (
            <React.Fragment key={index}>
              {course.modules.map((module, moduleIndex) => (
                <tr key={`${index}-${moduleIndex}`}>
                  {moduleIndex === 0 && (
                    <React.Fragment>
                      <td rowSpan={course.modules.length}>{course.courseName}</td>
                      <td rowSpan={course.modules.length}>{course.courseDescription}</td>
                    </React.Fragment>
                  )}
                  <td>{module.moduleName}</td>
                  <td>{module.moduleDescription}</td>
                  <td>
                    <ul className="elements">
                      {module.elements.map((element, elementIndex) => (
                        <li key={elementIndex}>
                          <strong>{element.elementName}</strong>: {element.elementDescription}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
