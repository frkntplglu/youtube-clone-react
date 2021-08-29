import React from 'react';
import PropTypes from 'prop-types';

function ChannelAvatar({ url, altDescription }) {
  return (
    <figure className="video-card__channel-avatar">
      <img src={url} alt={altDescription} />
    </figure>
  );
}

ChannelAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  altDescription: PropTypes.string.isRequired,
};

export default ChannelAvatar;
