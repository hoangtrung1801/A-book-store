import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <Link style={{ color: `black`, fontWeight: `bold` }} to="/">
          Books
        </Link>
      </div>
      <Menu>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/mybook">My book</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/bookshop">Book shop</Link>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    </div>
  );
};

export default Sidebar;
