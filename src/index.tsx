import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Counter from './Components/Counter/Counter'



ReactDOM.render(
  <React.StrictMode>
    <Header label={"asd"} id={23} />
    <Counter initialNumber={0} stock={25} />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

