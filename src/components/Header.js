import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <div className="header">
    <h3>{props.children}</h3>
  </div>
);

Header.defaultProps = {
  children: "RocketBook"
};

Header.propTypes = {
  children: PropTypes.string
};

export default Header;
