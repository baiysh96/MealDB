import React from "react"
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import RandomMeals from "./components/RandomMeals";
import MealsInfo from "./components/MealsInfo";


function App() {
  return (
      <BrowserRouter >
        <div >
           <Header />
        <Routes>
           <Route path="/meals"  element={<RandomMeals />}/>
          <Route path="/"  element={<Home />}/>
          <Route path="/meals/:slug"  element={<MealsInfo />}/>

        </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
