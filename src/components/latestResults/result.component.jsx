import React from "react";
import { Link } from "react-router-dom";

// 6 -- populate the data fields u need
export const Result = props => (
    <div className="game-overview">
        <Link to={`/blog/${props.game.id}`}>
        <div className="row">     
        <div className="col-5">
            <div className="team-away">
                <div className={`team-logo team-logo-${props.game.home_team.name}`}></div>
                <span className="team-name">{props.game.home_team.full_name}</span>
                <span className="team-score">
                    {/* If statement to check if the score is not 0 and the show */}
                    {(() => {
                        if (props.game.home_team_score !== 0) {
                            return (
                                <span>{props.game.home_team_score}</span>
                            )
                        } 
                    })()}                        
                </span>
            </div>
            </div>
            <div className="col-2">
                <div className="at">-</div>
            </div>
            <div className="col-5">
            <div className="team-home">
                <span className="team-score">
                {/* If statement to check if the score is not 0 and the show */}
                {(() => {
                        if (props.game.visitor_team_score !== 0) {
                            return (
                                <span>{props.game.visitor_team_score}</span>
                            )
                        } 
                    })()}  
                </span>
                <span className="team-name">{props.game.visitor_team.full_name}</span>
                <div className={`team-logo team-logo-${props.game.visitor_team.name}`}></div>                       
            </div>
        </div>
    </div>
    </Link>
    </div>
);