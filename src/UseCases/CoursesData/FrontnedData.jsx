// FrontnedData.jsx
import React from 'react';

const frontendContent = [
  {
    title: "React Native",
    description: "React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables building apps for both iOS and Android platforms by offering a shared codebase, which significantly reduces development time and effort.",
    resources: [
      { text: "Official Website", link: "https://reactnative.dev/" },
      { text: "Official Getting Started to React Native", link: "https://reactnative.dev/docs/getting-started" },
      { text: "Play Video", link: "https://www.example.com/react-native-video" },
      { text: "Learn React Native by CodeAcademy", link: "https://www.codecademy.com/learn/react-native" }
    ],
    extra: "Teacher: Muhammad Shahryar"
  },
  {
    title: "React",
    description: "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
    extra: "Teacher: Muhammad Shahryar"
  },
  {
    title: "Reactjs Task",
    description: "This course includes Reactjs Basic Task",
    extra: "Teacher: Fahad Khan"
  },
  {
    title: "Javascript Projects",
    extra: "Teacher: Talib Hussain"
  },
  {
    title: "JavaScript",
    description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    extra: "Teachers: Ahmad Faraz, Muhammad Shahryar"
  },
  {
    title: "HTML and CSS",
    extra: "Teacher: Fahad Khan"
  }
];

export default function FrontnedData() {
  return (
    <div className="frontend-container">
      <h1>All the material related to the Frontend</h1>
      {frontendContent.map((course, index) => (
        <section key={index} className="course-section">
          <h2>{course.title}</h2>
          {course.description && <p>{course.description}</p>}
          {course.resources && (
            <ul>
              {course.resources.map((resource, i) => (
                <li key={i}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.text}</a>
                </li>
              ))}
            </ul>
          )}
          <p><strong>{course.extra}</strong></p>
        </section>
      ))}
    </div>
  );
}
