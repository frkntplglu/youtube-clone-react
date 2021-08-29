import React from 'react';
import PropTypes from 'prop-types';

function VideoTitle({ url, title }) {
  return (
    <h2 className="video-card__title"><a href={url}>{title}</a></h2>
  );
}

VideoTitle.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoTitle;
