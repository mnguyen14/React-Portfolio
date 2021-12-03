import React from 'react';
import passwordGen from "../images/passwordgen.png";
import dailyPlanner from "../images/dayplanner.png";
import memory from "../images/MEMory.png";

export default function Contact() {
  return (
    <div>
      <h1>My Works</h1>
      <ul>
            <li>
                <h4>Password Generator:</h4>
                    <p>HTML, CSS, and JavaScript</p>
                    <p>
                        <a href="https://github.com/mnguyen14/password-generator" target="_blank" rel="noreferrer">Github Repository</a>
                    </p>
                    <a href="https://mnguyen14.github.io/password-generator/" target="_blank" rel="noreferrer">
                        <img src={ passwordGen } alt="password generator website"/>
                    </a>
            </li>
            <li>
                <h4>Work Day Planner</h4>
                    <p>HTML, CSS, and JavaScript</p>
                    <p>
                        <a href="https://github.com/mnguyen14/daily-planner" target="_blank" rel="noreferrer">Github Repository</a>
                    </p>
                    <a href="https://mnguyen14.github.io/daily-planner/" target="_blank" rel="noreferrer">
                        <img src={ dailyPlanner } alt="daily planner website"/>
                    </a>
            </li>
            <li>
                <h4>MEMory</h4>
                    <p>JavaScript, Handlebars, CSS</p>
                    <p>
                        <a href="https://github.com/mnguyen14/MEMory" target="_blank" rel="noreferrer">Github Repository</a>
                    </p>
                    <a href="https://glacial-falls-08571.herokuapp.com/login" target="_blank" rel="noreferrer">
                        <img src={ memory } alt="MEMory journal website"/>
                    </a>
            </li>
      </ul>
    </div>
  );
}
