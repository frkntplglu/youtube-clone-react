import React from 'react';
import PropTypes from 'prop-types';

function VideoCover({ url, altDescription }) {
  return (
    <figure className="video-card__cover">
      <img src={url} alt={altDescription} />
    </figure>
  );
}

VideoCover.propTypes = {
  url: PropTypes.string.isRequired,
  altDescription: PropTypes.string.isRequired,
};

export default VideoCover;
