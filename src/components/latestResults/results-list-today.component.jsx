import React from 'react';
import { Result } from './result.component';

export const ResultsListToday = props => {
    return (

        // 5 -- set the new state
        <div className="">
        {
            props.todaysGames.map(game => (
                <Result key={game.id} game={game} />
            ))        
        }
      </div>

    )
   
};
