import './sidebar.scss';
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenu from './SidebarMenu';

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarMenu>
        <SidebarMenuItem text="Anasayfa" />
        <SidebarMenuItem text="Keşfet" />
        <SidebarMenuItem text="Abonelikler" />
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem text="Kitaplık" />
        <SidebarMenuItem text="Geçmiş" />
        <SidebarMenuItem text="Videolarınız" />
        <SidebarMenuItem text="Daha Sonra İzle" />
        <SidebarMenuItem text="Beğendiğim Videolar" />
      </SidebarMenu>
    </aside>
  );
}

export default Sidebar;
