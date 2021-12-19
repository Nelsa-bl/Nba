import React from "react";

// 6 -- populate the data fields u need
export const GameRecapVideo = props => (
    <div className="">
        <div className="youtube-video">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <span className="videoName">{props.video.snippet.title}</span>
    </div>
);