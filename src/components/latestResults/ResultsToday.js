// 1 -- imaport React Component
import React, {Component, memo} from 'react';
import moment from 'moment';
import 'moment-timezone';

import { ResultsListToday } from './results-list-today.component';

// 2 -- Creat a constructor with an empty array
class ResultsToday extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
    todaysGames: []
   };
 }

// 3 -- Fetch data on load
componentDidMount() {

  // Get todays date
  const todaysDate = moment().format('YYYY-MM-DD');

  // Fetch api for yesterdays games
  fetch(`https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=${todaysDate}`)
  .then(response => response.json())
  .then(games => this.setState({ todaysGames: games.data }));
}

// 4 -- render the array
render () {
    return (    
        <ResultsListToday todaysGames={this.state.todaysGames}/>
    );
  }
}

export default memo(ResultsToday);

// https://free-nba.p.rapidapi.com/stats?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&game_ids[]=473713
