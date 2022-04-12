import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <Link to="/">
          <li>
            <span className="material-icons icon"> home </span>
            HOME
          </li>
        </Link>
        <Link to="/label">
          <li>
            <span className="material-icons icon">label </span>
            LABELS
          </li>
        </Link>
        <Link to="/archive">
          <li>
            <span className="material-icons icon"> archive </span>
            ARCHIVE
          </li>
        </Link>
        <Link to="trash">
          <li>
            <span className="material-icons icon"> delete </span>
            TRASH
          </li>
        </Link>

        <Link to="/">
          <li>
            <span className="material-icons icon"> account_circle </span>
            PROFILE
          </li>
        </Link>

        <button className="create-btn">CREATE NEW NOTE</button>
      </ul>
    </aside>
  );
};

export { Sidebar };