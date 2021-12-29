import React from "react";
import SinglePage from "./SinglePage";
import { Routes, Route, Link} from "react-router-dom";

const About = () => {
  return (
    <div className="about-page-content">
      <ul className="about-list">
        <li>
          <Link to={"about-app"}>About App</Link>
        </li>
        <li>
          <Link to={"about-author"}>About Author</Link>
        </li>
      </ul>
      <Routes>
      <Route path={":path"} element={<SinglePage />} />
      </Routes>
    </div>
  );
};
export default About;
