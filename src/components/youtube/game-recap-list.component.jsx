import React from 'react';
import { GameRecapVideo } from './game-recap-video'

// Import react-multi-carousel and style
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Options for Carousel
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const GameRecapList = props => {
return (

    // 5 -- set the new state
    <div className="carousel-wprapper">

        {/* Carousel init */}
        <Carousel partialVisible={true} responsive={responsive} itemClass="carousel-item-padding">
        {
            props.gamesRecap.map(video => (
            <GameRecapVideo key={video.id} video={video} />
            ))        
        }
      </Carousel>
    
    </div>

)

};