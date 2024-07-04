import "./App.css";
import Home from "./pages/Home";
import Menu2 from "./components/Menu2";
import NotFound from "./pages/NotFound";
import React from "react";
import Success from "./pages/Success";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu2  />} />
        <Route path='/succ' element={<Success />} /> 
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster /> 
    </Router>
  );
};

export default App;
