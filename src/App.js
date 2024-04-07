
import FirstQ from "./Components/FirstQ";
import SecondQ from './Components/SecondQ';
import ThirdQ from "./Components/ThirdQ";
import FourthQ from "./Components/FourthQ";
import FifthQ from "./Components/FifthQ";
import SixthQ from "./Components/Sixth";
import Loading from "./Components/Loading";
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstQ />} />       
        <Route path="/second" element={<SecondQ />} />
        <Route path="/third" element={<ThirdQ />} />
        <Route path="/fourth" element={<FourthQ />} />
        <Route path="/fifth" element={<FifthQ />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/sixth" element={<SixthQ />} />  
      </Routes>
    </Router>

   
  );
}

export default App;
