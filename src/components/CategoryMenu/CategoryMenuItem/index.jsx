import React from 'react';
import PropTypes from 'prop-types';

function CategoryMenuItem({ title }) {
  return (
    <button type="button" className="category-menu__item">{title}</button>
  );
}

CategoryMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryMenuItem;
