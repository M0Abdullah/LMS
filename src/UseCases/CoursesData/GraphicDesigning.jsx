import React from 'react';

export default function GraphicDesigning() {
  return (
    <div>
      <Course
        title="Figma"
        description="Develop a solid understanding of Figma's capabilities, including creating new files, designing on a grid, importing and cropping photos, working with vector graphics and colors, creating reusable components, building clickable prototypes, exporting assets, sharing files, utilizing auto layout, creating animations, and much more."
        teacher="Noman Ahmad"
      />
      <Course
        title="Adobe Photoshop"
        teacher="Faizan Mazher"
      />
      <Course
        title="Adobe Illustrator"
        teacher="Faizan Mazher"
      />
    </div>
  );
}

function Course({ title, description, teacher }) {
  return (
    <div className="course">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {teacher && <p>Teacher: {teacher}</p>}
    </div>
  );
}
