/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './VideoItem.scss';

const VideoItem = ({ video, handleVideoSelect }) => {
  const { title } = video.snippet;
  const imgUrl = video.snippet.thumbnails.medium.url;

  return (
    <div className='item video-item' onClick={() => handleVideoSelect(video)}>
      <img className='ui image' src={imgUrl} alt={title} />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
