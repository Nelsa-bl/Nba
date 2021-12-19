// 1 -- imaport React Component
import React, {Component, memo} from 'react';

import { StandingsEast } from './standings-east.component';

// 2 -- Creat a constructor with an empty array
class Standings extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
    standingsTabel: [],
    isSitchOn: false
   };
 }

// 3 -- Fetch data on load
componentDidMount() {

  // Get todays date

  // Fetch api for yesterdays games
  fetch(`https://data.nba.net/data/10s/prod/v1/current/standings_conference.json`)
  .then(response => response.json())
  .then(standingsPosition => this.setState({ standingsTabel: standingsPosition.league.standard.conference.east }));
}

// 4 -- render the array
render () {
    return (  
        <StandingsEast standingsTabel={this.state.standingsTabel} isSitchOn={this.state.isSitchOn}/>    
    );
  }
}

export default memo(Standings);

