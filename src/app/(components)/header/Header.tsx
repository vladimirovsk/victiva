"use client";

import {AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React, { useMemo } from 'react';
import imageLogo from '../../../../public/imageLogo.png';
import Image from 'next/image';

export default function Header() {
	const navItems = useMemo(() => [
		{ key: 'curse', caption: 'Курс'},
		{ key: 'coaching', caption: 'Coaching'},
		{ key: 'free', caption: 'Бесплатно'},
		{ key: 'forUser', caption: 'Для членов'},
		{ key: 'more', caption: 'Больше'},
	], []);

	const handleNavItemClick = (item:string, e: React.MouseEvent)=> {
		if (e) {
			e.preventDefault();
		}
	}
	return (
	<React.Fragment>
		<AppBar sx={{ top: 0, backgroundColor: 'white', marginBottom: '20px', zIndex: 1100 }}
			        component='nav'
			        position="fixed"
			        className="appBarHeader" >
			<Container fixed >
				<Toolbar>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Image
							src={imageLogo}
							alt='VICTIVA'
							className="header-logo"
							width='60'
						/>
					</Box>
					<Box className="header-nav-box" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
						{navItems.map((item) => (
							<Button
								key={item.key}
								className={`header-nav-button-${item.key}`}
								onClick={(e) => handleNavItemClick(item.key, e)}
								href={`#${item.key.toLowerCase()}`}
								component="a"
							>
								{item.caption}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	</React.Fragment>
	)
}
