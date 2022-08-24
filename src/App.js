import React from 'react'
import './App.css'
import Placelist from './components/screens/Placelist'
// import Header from './components/screens/includes/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Place from "./components/screens/Place"
import Header from './components/screens/includes/Header';


function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path='/' element={<Placelist/>}/>
        <Route path='/place/:id' element={<Place/>}/>
      </Routes>
   </Router>
   </>
  )
}

export default App