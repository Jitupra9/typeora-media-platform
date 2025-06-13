import React, { memo } from "react";
import Plyr from "plyr-react";
import "../../assets/css/videoplayer.css";
import "plyr-react/plyr.css";
import Live from "../../assets/video/Live_stream.mp4";
// import imge from "../../assets/images/news_three.jpg";
function Videoplayer() {
  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: Live,
          type: "video/mp4",
        },
      ],
      // poster: imge,
    },
    options: {
      controls: [
        "rewind",
        "play",
        "fast-forward",
        "mute",
        "current-time",
        "progress",
        "settings",
        "pip",
        "fullscreen",
      ],
      speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
    },
  };

  return (
    <div className="  sm:rounded-3xl  overflow-hidden shadow-md shadow-gray-900 ">
      <div className="w-full">
        <Plyr {...plyrProps} />
      </div>
    </div>
  );
}

export default memo(Videoplayer);
