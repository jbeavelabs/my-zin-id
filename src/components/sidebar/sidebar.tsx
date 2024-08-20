import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  UserOutlined,
  MoreOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  NotificationOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router';
import HomeScreen from '../../pages/home-screen';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/home-screen', icon: <HomeOutlined />, label: 'Home', },
  { key: '/apps', icon: <AppstoreOutlined />, label: 'App' },
  { key: '/credentials', icon: <ContainerOutlined />, label: 'Credentials' },
  { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
  { key: '/notification', icon: <NotificationOutlined />, label: 'Notification' },
  { key: '/more', icon: <MoreOutlined />, label: 'More' },
  { key: 'logout', icon: <LogoutOutlined />, label: 'Logout' },
  
   
];

export const Sidebar = () => {
  
const navigate = useNavigate();
  
  return (
  <div>
      <Menu
      onClick={({key})=>{
        if (key=='logout'){

        }else{
              navigate(key);
        }
      }}
        defaultSelectedKeys={['/home-screen']}
        mode="inline"
        items={items}
      />
     <Menu/>
    

    </div>
     
  );
};

function content(){
  return (<div>Hello bro</div>);
};
export default Sidebar;