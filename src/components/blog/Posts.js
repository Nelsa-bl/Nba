import React from "react";
import { Link } from "react-router-dom";
import ResultsYesterday from "../latestResults/ResultsYesterday";

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/blog/this-is-a-post-title">
         <ResultsYesterday />
        </Link>
      </div>
    </div>
  );
}

export default Posts;