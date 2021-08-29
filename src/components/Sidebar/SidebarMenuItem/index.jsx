import React from 'react';
import PropTypes from 'prop-types';

function SidebarMenuItem({ text }) {
  return (
    <a href="/" className="sidebar-menu__item">{text}</a>
  );
}

SidebarMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarMenuItem;
