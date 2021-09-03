import React from 'react';
import PropTypes from 'prop-types';

function SidebarMenuItem({ text, iconClass }) {
  return (
    <a href="/" className="sidebar-menu__item">
      <i className={iconClass} />
      {text}

    </a>
  );
}

SidebarMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default SidebarMenuItem;
