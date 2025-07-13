import React, { memo, useEffect, useRef } from "react";
import "../../assets/css/video.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";
function Videoplayer({ options, onReady }) {
  const playerRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    if (!videoRef.current) return;
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered", "video-js");
      videoRef.current.appendChild(videoElement);
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      player.ready(() => {
        if (typeof player.httpSourceSelector === "function") {
          player.httpSourceSelector({
            default: "auto",
          });
        }
      });
      playerRef.current = player;
    }
  }, [options, onReady]);
  useEffect(() => {
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);
  return (
    <div
      data-vjs-player
      className="relative h-[200px] sm:h-[400px] lg:h-[430px] sm:rounded-3xl overflow-hidden shadow-md shadow-gray-900"
    >
      <div ref={videoRef} className="" />
    </div>
  );
}

export default memo(Videoplayer);
