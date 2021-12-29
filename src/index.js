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
        <Route path="/react-to-do-app" element={<TodoContainer />} />
        <Route path="/react-to-do-app/about/*" element={<About />} />
        <Route path="/react-to-do-app/*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
