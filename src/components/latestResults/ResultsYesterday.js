// 1 -- imaport React Component
import React, {Component, memo} from 'react';
import moment from 'moment';
import 'moment-timezone';

import { ResultsListYesterday } from './results-list-yesterday.component';

// 2 -- Creat a constructor with an empty array
class ResultsYesterday extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
    yestedaysGames: []
   };
 }

// 3 -- Fetch data on load
componentDidMount() {
  // Get Yesterday date
  const yesterdaysDate = moment().subtract(1, "days").format('YYYY-MM-DD');

  // Fetch api for yesterdays games
  fetch(`https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=${yesterdaysDate}`)
  .then(response => response.json())
  .then(games => this.setState({ yestedaysGames: games.data }));
}

// 4 -- render the array
render () {
    return (
      <React.Fragment>
        <ResultsListYesterday yestedaysGames={this.state.yestedaysGames}/>
      </React.Fragment>
        
    );
  }
}

export default memo(ResultsYesterday);
