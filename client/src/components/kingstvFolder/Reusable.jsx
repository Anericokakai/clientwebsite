import React from 'react'
import YouTube from "react-youtube";
import './videos/videocategories.css'
function Reusable({video}) {
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
    </div>
  </div>
  )
}

export default Reusable