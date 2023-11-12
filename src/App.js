import React from 'react'
import "./App.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";


export default function App() {

  return (
    <div className='glass'>
     <Menu/>
    <h1>Breakfast</h1>
    <Meal/>
    <h1>Lunch</h1>
    <Meal/>
    <h1>Dinner</h1>
    <Meal/>
    </div>
  );

}

function Menu(){

  return(
    <div className = "menuBar">
      <ul>
        <li><a>Home</a></li>
        <li><a>Login</a></li> 
        <li><a>About</a></li>
        {/* <BrowserRouter> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<App/>}> */}
        {/* </Route> */}
        {/* <Route path="./Login" element={<Login />} />
      </Routes> */}
      {/* </BrowserRouter> */}
      </ul>
    </div>
  )
}

function Meal(){
  const [calorie, setCalorie] = useState(0);

  function countCalorie(){
    setCalorie(calorie + 1);
  }
  return(
    <div className='glass'>
      {/* <form className='glass__form'> */}
      <div className='glass__form__group'>
        <input className = "glass__form__input" placeholder='Calories'></input>
        </div>
        <div className='glass__form__group'>
          <button className='glass__form__btn' onClick = {countCalorie}> 
          consumed {calorie} calories
          </button>
        </div>
      {/* </form> */}
    </div>
  );
}
