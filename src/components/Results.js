import React, {Component} from 'react';


class Results extends Component {
 constructor() {
   super();
  // Set initail state
   this.state = {
     games: []
   };
 }

//Fetch data on load
componentDidMount() {
  fetch('https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=2021-11-27')
  .then(response => response.json())
  .then(games => this.setState({ games: games.data }));
}

  render () {

    const { games } = this.state;

    let mappedArray = (games).map((games) => {
        return(
            <span>{games.home_team.city}</span>
        )
    })
    return (
        
      <div className="Results">
       <ul>{mappedArray}</ul>
      </div>
    );
  }
}

export default Results;
