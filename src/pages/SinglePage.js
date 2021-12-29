import React from "react";
import { useParams } from "react-router-dom";

const aboutData = [
  {
    path: "about-app",
    title: "About the App",
    description: "In this app, you can add, delete, submit and edit items.",
  },
  {
    path: "about-author",
    title: "About the Author",
    description: "This app is developed by Aleksandar Geyman for INFM316.",
  },
];

const SinglePage = () => {
  const { path } = useParams();
  const { title, description } = aboutData.find((item) => item.path === path);

  return (
    <div className="single-page-content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
