import React from "react";

// 6 -- populate the data fields u need
export const GameDetailsGame = props => (
    <div className="list">
        <span className="min">{props.detail.min}</span>
        <span className="player">{props.detail.player.first_name} {props.detail.player.last_name}</span>
        <span className="ast">{props.detail.ast}</span>
        <span className="reb">{props.detail.reb}</span>
        <span className="points">{props.detail.pts}</span>
    </div>
);