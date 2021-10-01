import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../Input/Input";
import "./Header.css";

const style = {
  fontWeight: "bold",
  color: "red",
};
const Header = () => {
  return (
    <div className="header">
      <NavLink style={{ marginRight: "10px" }} to="/home" activeStyle={style}>
        Home
      </NavLink>
      <NavLink to="/foods" activeStyle={style}>
        Foods
      </NavLink>
      <Input />
    </div>
  );
};

export default Header;
