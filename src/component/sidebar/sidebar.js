import React from 'react';
import SidebarComponent from './sidebar-component1';
import SidebarComponent2 from './sidebar-component2';
import SidebarComponent3 from './sidebar-component3';
import SidebarComponent4 from './sidebar-component4';
import './style.css';

const Sidebar =()=>{

return(
<section className="sidebar">
  <SidebarComponent/>
  <SidebarComponent2/>
  <SidebarComponent3 />
  <SidebarComponent4/>
</section>
)
}
export default Sidebar

