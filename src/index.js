import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import NotMatch from "./pages/NotMacth";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
