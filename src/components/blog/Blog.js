import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;