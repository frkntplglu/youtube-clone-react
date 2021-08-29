import './home.scss';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import CategoryMenu from '../../components/CategoryMenu';

function Home() {
  return (
    <main className="home">
      <Sidebar />
      <section className="home-content">
        <CategoryMenu />
      </section>
    </main>
  );
}

export default Home;
