import React from 'react';

export default function SOftwareQualityAssurance() {
  return (
    <div>
      <Course
        title="QA Essentials"
        description="This comprehensive Software Quality Assurance (SQA) course equips students with the essential skills and knowledge needed to ensure the delivery of high-quality software products. Covering the entire software development lifecycle, from planning to release, participants will gain expertise in testing methodologies, automation, and quality assurance practices."
      />
      <p>Everything you need to learn about software testing and begin your career as a Quality Assurance Specialist</p>
    </div>
  );
}

function Course({ title, description }) {
  return (
    <div className="course">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
