import React from 'react'
import Header from "./components/Header";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWifi } from "react-icons/fa";


function App() {
  return (
    <>

    <BrowserRouter>

      <Home />
      <div className="p-3 h-100 bg-linear-to-b from-orange-600 to-white ">
       
      </div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </BrowserRouter>
    



    </>
  );
}

export default App;
