import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 const root = document.querySelector('#root')


/* { <React.StrictMode>
    <App />
</React.StrictMode> } */

ReactDOM.render(App(), root)

/*const element = React.createElement('h2', {
  //children: 'Txt Content',
  children: ['TextContentOne', ' textContentTow', ' thirdText'],
  className: 'container col'
})

 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


