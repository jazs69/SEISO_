import React from "react";
import Factora from "../assets/Factora.webm";

function BbVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed h-screen w-screen object-cover -z-10"
    >
      <source src={Factora} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BbVideo;
