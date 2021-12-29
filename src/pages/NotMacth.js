import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <div className="not-match-content">
      <Link to={"/react-to-do-app"}>The page doesn't exist, go back to Home Page.</Link>
    </div>
  );
};

export default NotMatch;