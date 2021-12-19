import React from 'react';
import { GameDetailsGame } from './GameDetails-game';

export const GameDetailsList = props => {

    // Get Home team full name
    let getTeamHomeFullName = props.gameDetails.filter(s => s.game.home_team_id === s.team.id).map(detail => (
      detail.team.full_name
    ));

    // Get Home team name
    let getTeamHomeName = props.gameDetails.filter(s => s.game.home_team_id === s.team.id).map(detail => (
        detail.team.name
      ));

     // Get Visitor team score
    let getTeamHomeScore = props.gameDetails.filter(s => s.game.visitor_team_id === s.team.id).map(detail => (
        detail.game.home_team_score
      ));

    // Get Visitor team name
    let getTeamvisitorFullName = props.gameDetails.filter(s => s.game.visitor_team_id === s.team.id).map(detail => (
        detail.team.full_name
      ));

      // Get Visitor team name
    let getVisitorHomeName = props.gameDetails.filter(s => s.game.visitor_team_id === s.team.id).map(detail => (
        detail.team.name
      ));

    // Get Visitor team score
    let getTeamVisitorScore = props.gameDetails.filter(s => s.game.visitor_team_id === s.team.id).map(detail => (
        detail.game.visitor_team_score
      ));

    return (
        <div id="GameDetails" className='gameDetails' hidden>
            <div className='row'>
                <div className='sep-bg'></div>
                <div className='seperator'>-</div>
                <div className={`col-6 home-team team-color-${getTeamHomeName[1]}`}>
                    {/* Get Home Team Name  */}
                    <div className='teamInfo'>
                        <div className={`team-logo team-logo-${getTeamHomeName[1]}`}></div>
                        <h2>{getTeamHomeFullName[1]}</h2>
                        <span>{getTeamHomeScore[1]}</span>
                    </div>
                    <div className='list-player-stats'>
                    <div className="list list-placeholder">
                        <span className="min"></span>
                        <span className="player"></span>
                        <span className="ast">A</span>
                        <span className="reb">R</span>
                        <span className="points">P</span>
                    </div>
                        {
                        // Filter by team and sort by higest scorer   
                        props.gameDetails.filter(s => s.game.home_team_id === s.player.team_id).sort((a, b) => a.pts < b.pts ? 1:-1).map(detail => (                  
                                <GameDetailsGame key={detail.id} detail={detail} />  
                            ))        
                        }   
                    </div>
                    <div className={`team-logo logo-float team-logo-${getTeamHomeName[1]}`}></div>
                </div>
                
                <div className={`col-6 visitor-team team-color-${getVisitorHomeName[1]}`}>
                    {/* Get Visitor Team Name  */}
                    <div className='teamInfo'>
                        <span>{getTeamVisitorScore[1]}</span>
                        <h2>{getTeamvisitorFullName[1]}</h2>
                        <div className={`team-logo team-logo-${getVisitorHomeName[1]}`}></div>
                        
                    </div>
                    
                    <div className='list-player-stats'>
                    <div className="list list-placeholder">
                        <span className="min"></span>
                        <span className="player"></span>
                        <span className="ast">A</span>
                        <span className="reb">R</span>
                        <span className="points">P</span>
                    </div>
                        { 
                        // Filter by team and sort by higest scorer    
                        props.gameDetails.filter(s => s.game.visitor_team_id === s.player.team_id).sort((a, b) => a.pts < b.pts ? 1:-1).map(detail => (                     
                                <GameDetailsGame key={detail.id} detail={detail} />                    
                            ))        
                        } 
                    </div> 
                    <div className={`team-logo logo-float team-logo-${getVisitorHomeName[1]}`}></div>
                </div>
            </div>
        </div>

    )
   
};
