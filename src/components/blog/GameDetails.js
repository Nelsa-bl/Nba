// 1 -- imaport React Component
import React, {Component} from 'react';
import { GameDetailsList } from './GameDetails-list';
import logo from '../../assets/images/nba-logo-75.png';


// 2 -- Creat a constructor with an empty array
class GameDetails extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
    gameDetails: []
   };
 }

// 3 -- Fetch data on load
componentDidMount() {
  var parts = window.location.href.split('/');
  var lastSegment = parts.pop() || parts.pop();
  const spinner = document.getElementById("spinner");
  const getDetails = document.getElementById("GameDetails");
  // Fetch api for yesterdays games
  fetch(`https://free-nba.p.rapidapi.com/stats?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&game_ids[]=${lastSegment}`)
  .then(response => response.json())
  .then(details => {  
    spinner.setAttribute('hidden', ''); 
    getDetails.removeAttribute('hidden');
    this.setState({ gameDetails: details.data })});
  console.log(lastSegment);
}

// 4 -- render the array
render () {
    return (
      <React.Fragment>
        <GameDetailsList gameDetails={this.state.gameDetails}/>
        <div id='spinner' className="spinner-grow text-light" role="status">
          <img src={logo} alt='Nba logo' height={50} />
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      </React.Fragment>

    );

  }
}

export default GameDetails;

// https://free-nba.p.rapidapi.com/stats?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&game_ids[]=473713
