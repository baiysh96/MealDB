import React from "react"
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"

import Header from "./components/Header";
import HomePage from "./components/screen/Homescreen";
import MealsInfo from "./components/MealsInfo";
import LatestMealsInfo from "./components/LatestMealsInfo";
import NotFound from "./components/NotFound";
import Ingredients from "./components/Ingredients";


function App() {
  return (
      <BrowserRouter >
        <div>
           <Header />
        <Routes>
           <Route path="/latestMeals/:id"  element={<LatestMealsInfo />}/>
           <Route path="/ingredients/:slug"  element={<Ingredients />}/>
          <Route path="/"  element={<HomePage />}/>
          <Route path="/meals/:id"  element={<MealsInfo />}/>
          <Route path="*"  element={<NotFound />}/>

        </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
