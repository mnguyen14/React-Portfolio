import React from 'react';
import resumePdf from '../images/Nguyen_Matthew_Resume.pdf'

export default function Contact() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <a href={ resumePdf } target="_blank" rel="noreferrer">View Resume</a>
      </p>
      <ul>
          <p>Front-end</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
      </ul>
      <ul>
          <p>Back-end</p>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>NoSQL</li>
          <li>GraphQL</li>
      </ul>
    </div>
  );
}
