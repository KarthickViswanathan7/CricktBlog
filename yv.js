import React from 'react';
const videoId="uEkGTCeoQP4";
const YoutubeEmbed = () => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
//ZYr5jO-yqVg ani hits
//CQCKbmHVcic ani new 
//uEkGTCeoQP4 moti 50 mins