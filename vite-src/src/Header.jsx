import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const baseUrl = "Nuceria-Project.github.io/app";

const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h">
       <Link to={"/."}>Home</Link>
      </Menu.Item>
      <Menu.Item key="l">
        <Link to={baseUrl + "/factions"}>Factions</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};

export default Header;
