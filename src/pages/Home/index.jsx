import './home.scss';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import CategoryMenu from '../../components/CategoryMenu';
import VideoGrid from '../../components/VideoGrid';

function Home() {
  return (
    <main className="home">
      <Sidebar />
      <section className="home-content">
        <CategoryMenu />
        <VideoGrid />
      </section>
    </main>
  );
}

export default Home;
