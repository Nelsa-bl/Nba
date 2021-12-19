import React from "react";
import Table from 'react-bootstrap/Table';

export const TabelPosition = props => {

    // Calculate total games convert String to Number
    let totalGames = parseInt(props.placment.win) + parseInt(props.placment.loss);

    let homePrecent = (100 / (parseInt(props.placment.homeWin) + parseInt(props.placment.homeLoss)) * (parseInt(props.placment.homeWin)) / 100).toFixed(3);
    let awayPrecent = (100 / (parseInt(props.placment.awayWin) + parseInt(props.placment.awayLoss)) * (parseInt(props.placment.awayWin)) / 100).toFixed(3);

    return (
        
        <tr>

        <td><span className="rank">{props.placment.confRank}</span></td>
        <td className="teamName"><div className={`team-logo team-logo-${props.placment.teamSitesOnly.teamNickname}`}></div><div className="teamNamePlacement">{props.placment.teamSitesOnly.teamName} {props.placment.teamSitesOnly.teamNickname}</div></td>
        <td>{totalGames}</td>
        <td>{props.placment.win}</td>
        <td>{props.placment.loss}</td>
        <td>0{props.placment.winPct}</td>
        <td className='hideField'>{props.placment.homeWin}-{props.placment.homeLoss}</td>
        <td className='hideField'>{homePrecent}</td>
        <td className='hideField'>{props.placment.awayWin}-{props.placment.awayLoss}</td>
        <td className='hideField'>{awayPrecent}</td>
        <td>{props.placment.lastTenWin}-{props.placment.lastTenLoss}</td>

        </tr>                

    )
}