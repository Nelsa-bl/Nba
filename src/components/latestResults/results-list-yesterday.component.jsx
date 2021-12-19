import React from 'react';
import { Result } from './result.component';

export const ResultsListYesterday = props => {
    return (

        // 5 -- set the new state
        <div className="">
        {
            props.yestedaysGames.map(game => (
                <Result key={game.id} game={game} />
            ))        
        }
       
      </div>

    )
   
};
