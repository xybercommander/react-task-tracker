import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { useLocation } from "react-router";

export const Header = ({ title, onShowAdd, showAdd }) => {
  const location = useLocation();

  //------ UI ------//
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onShowAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
