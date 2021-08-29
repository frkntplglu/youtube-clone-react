import './category-menu.scss';
import React from 'react';
import CategoryMenuItem from './CategoryMenuItem';

function CategoryMenu() {
  return (
    <section className="category-menu">
      <CategoryMenuItem title="Canlı" />
      <CategoryMenuItem title="Fitness" />
      <CategoryMenuItem title="Müzik" />
      <CategoryMenuItem title="Yemek Pişirme Programları" />
      <CategoryMenuItem title="Matematik" />
      <CategoryMenuItem title="Turistik Yerler" />
      <CategoryMenuItem title="Futbol" />
    </section>
  );
}

export default CategoryMenu;
