import React from "react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

import "../Homecomponets/homecomponets.css";
function Kingstvhome({video}) {
  return (
    <div className="second_cards">
      <div className="homeimage">
        <YouTube className=" shadow-xl"
          videoId={video}
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }}
        />
        <h1>health</h1>
      </div>
    </div>
  );
}

export default Kingstvhome;
