/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function SidebarMenu({ children }) {
  return (
    <section className="sidebar-menu">
      {children}
    </section>
  );
}

SidebarMenu.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SidebarMenu;
