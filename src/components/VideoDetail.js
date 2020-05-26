/* eslint-disable react/prop-types */
import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { title, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} frameBorder='0' title='video-player' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
