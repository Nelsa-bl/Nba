import React from "react";
import ResultsYesterday from "./latestResults/ResultsYesterday";
import ResultsToday from "./latestResults/ResultsToday";
import GameRecap from "./youtube/GameRecap";

function Home() {
  return (
    <div className="start-page">
         
                <div className="results">
                  <div className="results-latest">
                    <h5>Latest Results</h5>

                    <span className="game-date">Yesterday</span>

                    <ResultsYesterday />
                    
                  </div>

                  <div className="games-upcoming">
                    <h5>Upcoming Games</h5>

                    <span className="game-date">Upcoming</span>
                               
                    <ResultsToday />
                   
                  </div>
                </div>
                <div className="video-summery">
                  <h5>Recap</h5>

                  <GameRecap />

                </div>
                <div className="nba-shows">
                  <h5>Inside NBA</h5>
                  <div className="row">
                    <div className="col-3"><div className="video-palceholder"></div></div>
                    <div className="col-3"><div className="video-palceholder"></div></div>
                    <div className="col-3"><div className="video-palceholder"></div></div>
                    <div className="col-3"><div className="video-palceholder"></div></div>
                  </div>
                </div>
              
    </div>
  );
}

export default Home;