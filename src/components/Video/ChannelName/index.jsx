import React from 'react';
import PropTypes from 'prop-types';

function ChannelName({ url, title }) {
  return (
    <h4 className="video-card__channel-title"><a href={url}>{title}</a></h4>
  );
}

ChannelName.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChannelName;
