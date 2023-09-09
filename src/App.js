import React from 'react';
import todovideo from "../src/videos/Todo-List.mp4";

const App = () => {
  return (
    <div className="video-container">
      <center>
      <video autoPlay controls playsInline webkitPlaysInline>
        <source src={todovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </center>
    </div>
  );
}

export default App;
