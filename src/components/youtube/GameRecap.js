// 1 -- imaport React Component
import React, {Component, memo} from 'react';

import { GameRecapList } from './game-recap-list.component';

// 2 -- Creat a constructor with an empty array
class GameRecap extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
    gamesRecap: []
   };
 }

// 3 -- Fetch data on load
componentDidMount() {

  // Fetch api for yesterdays games
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLd4dSmXdrJykO_hgOzbfPw&maxResults=5&order=date&key=AIzaSyAtohTamLAGYD6Qbs6sbd-II6GqfQSR8nU`)
  .then(response => {
    if (!response.ok) {
      throw Error('Coud not fetch data.');
    }
    return response.json()} )
  .then(videos => this.setState({ gamesRecap: videos.items }))
  .catch(err => {
    console.log(err.message);
  })
}

// 4 -- render the array
render () {
    return (
        <GameRecapList gamesRecap={this.state.gamesRecap}/>
    );
  }
}

export default memo(GameRecap);
