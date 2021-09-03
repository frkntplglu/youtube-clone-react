import './sidebar.scss';
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenu from './SidebarMenu';
import SidebarCopyright from './SidebarCopyright';

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarMenu>
        <SidebarMenuItem text="Anasayfa" iconClass="fas fa-home" />
        <SidebarMenuItem text="Keşfet" iconClass="far fa-compass" />
        <SidebarMenuItem text="Abonelikler" iconClass="fab fa-youtube" />
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem text="Kitaplık" iconClass="fas fa-photo-video" />
        <SidebarMenuItem text="Geçmiş" iconClass="fas fa-history" />
        <SidebarMenuItem text="Videolarınız" iconClass="fas fa-play-circle" />
        <SidebarMenuItem text="Daha Sonra İzle" iconClass="far fa-clock" />
        <SidebarMenuItem text="Beğendiğim Videolar" iconClass="fas fa-heart" />
      </SidebarMenu>
      <SidebarCopyright />
    </aside>
  );
}

export default Sidebar;
