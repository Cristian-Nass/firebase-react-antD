import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, UnorderedListOutlined, BookOutlined, LoginOutlined } from '@ant-design/icons';


const Navbar = () => {



  const handleClick = () => {
		console.log('object');
  };


	return (
		<Menu onClick={handleClick} mode="horizontal" theme="dark">
			<Menu.Item key="home" icon={<HomeOutlined />}>
				<Link to={'/'}>Home</Link>
			</Menu.Item>

			<Menu.Item key="list" icon={<UnorderedListOutlined />}>
			<Link to={'/list-of-users'}>Lisat Of Users</Link>
			</Menu.Item>

			<Menu.Item key="about" icon={<BookOutlined />}>
			<Link to={'/about'}>About</Link>
			</Menu.Item>

			<Menu.Item key="login" icon={<LoginOutlined />}>
			<Link to={'/login'}>Login</Link>
			</Menu.Item>

		</Menu>  
	);
};

export default Navbar;