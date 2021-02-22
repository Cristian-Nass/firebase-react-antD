import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, UnorderedListOutlined, BookOutlined } from '@ant-design/icons';


const Navbar = () => {



  const handleClick = () => {
		console.log('object');
  };


	return (
		<Menu onClick={handleClick} mode="horizontal" theme="dark">
			<Menu.Item key="mail" icon={<HomeOutlined />}>
				<Link to={'/'}>Home</Link>
			</Menu.Item>

			<Menu.Item key="app" icon={<UnorderedListOutlined />}>
			<Link to={'/list-of-users'}>Lisat Of Users</Link>
			</Menu.Item>

			<Menu.Item key="alipay" icon={<BookOutlined />}>
			<Link to={'/about'}>About</Link>
			</Menu.Item>
		</Menu>  
	);
};

export default Navbar;