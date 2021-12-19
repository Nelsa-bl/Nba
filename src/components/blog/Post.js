import React, { useEffect } from "react";
import { useParams } from "react-router";
import GetId from "./GameDetails";


function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div className="container">
              <GetId />
      </div>
    </div>
  );
}

export default Post;