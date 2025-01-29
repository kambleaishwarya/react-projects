import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myArray = ['apple', 'banana', 'orange', 'watermelon', 'grapes'];

// Map the array to a list of <p> elements with unique keys
const myList = myArray.map((item, index) => <p key={index}>{item}</p>);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<div>
  <h1>Aishwarya Kamble</h1>
  {myList}</div>);


  <React.StrictMode>
    <App />
  </React.StrictMode>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
