import './video.scss';
import React from 'react';
import VideoCover from './VideoCover';
import ChannelAvatar from './ChannelAvatar';
import VideoTitle from './VideoTitle';
import ChannelName from './ChannelName';

function Video() {
  return (
    <article className="video-card">
      <VideoCover url="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CNy0r4kG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYnCMGd0L4LuYu3Yih2EFmFZcFXA" altDescription="Perfect video" />
      <div className="video-card__info">
        <ChannelAvatar url="https://yt3.ggpht.com/ytc/AKedOLR9Jj9_Ren1XBqjTPP330lpa7Zfyrg4nf_VLCh-=s68-c-k-c0x00ffffff-no-rj" altDescription="Emre Mutlu" />
        <div className="video-card__content">
          <VideoTitle url="#" title="Galerici Feyyaz sektöre isyan! #galericifeyyaz #emremutlu" />
          <ChannelName url="#" title="Emre Mutlu" />
          <div className="video-card__view">131 B görüntülenme</div>
          <div className="video-card__date">10 ay önce</div>
        </div>
      </div>
    </article>
  );
}

export default Video;
