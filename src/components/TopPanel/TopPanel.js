import React from "react";
import { NavLink } from "react-router-dom";

import "./TopPanel.scss";

function TopPanel() {
  return (
    <div className="top-panel">
      <NavLink className="link" activeClassName="active-link" to="/posts">
        Posts
      </NavLink>
      <NavLink className="link" activeClassName="active-link" to="addpostform">
        Add post
      </NavLink>
      )
    </div>
  );
}

export default TopPanel;
