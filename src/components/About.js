import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <h3>Version 1.0.0</h3>
      <h4>
        <Link to="/">Go Back</Link>
      </h4>
    </div>
  );
};
