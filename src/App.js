import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from './pages/Home';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
          <Navbar />
          <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
