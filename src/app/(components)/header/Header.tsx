"use client";

import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar
} from '@mui/material';
import React, { useMemo } from 'react';
import imageLogo from '../../../../public/imageLogo.png';
import Image from 'next/image';

export default function Header() {
	const navItems = useMemo(() => [
		{ key: 'curs', caption: 'Курс'},
		{ key: 'coaching', caption: 'Coaching'},
		{ key: 'free', caption: 'Бесплатно'},
		{ key: 'more', caption: 'Больше'}
	], []);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleNavItemClick = (item:string, e: React.MouseEvent)=> {
		if (e) {
			e.preventDefault();


			// For other nav items, check if they match routes that need direct navigation
			const routeItems = ['home', 'curs', 'coaching', 'free', 'connect'];
			if (routeItems.includes(item)) {
				window.location.href = `/#${item}`;
				handleMoreClose();
				// return;
			} else {
				window.location.href = `/${item}`;
				handleMoreClose();
				return;
			}

			// Default behavior: scroll to element with ID
			const element = document.getElementById(item);
			if (element) {
				// Get the height of the AppBar
				const appBar = document.querySelector('.appBarHeader') as HTMLElement;
				const appBarHeight = appBar ? appBar.offsetHeight : 0;

				// Calculate the element's position and adjust for the AppBar height
				const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - appBarHeight;

				// Scroll to the adjusted position
				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		}
	}

	const handleMoreClose = () => {
		setAnchorEl(null);
	};

	return (
	<React.Fragment>
		<AppBar sx={{ top: 0, backgroundColor: 'white', marginBottom: '20px', zIndex: 1100 }}
			        component='nav'
			        position="fixed"
			        className="appBarHeader" >
			<Container fixed >
				<Toolbar>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<a 
							href="#home" 
							onClick={(e) => handleNavItemClick('home', e)}
							style={{ cursor: 'pointer' }}
						>
							<Image
								src={imageLogo}
								alt='VICTIVA'
								className="header-logo"
								width='60'
							/>
						</a>
					</Box>
					<Box className="header-nav-box" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
						{ navItems.map((item) => (
							<Button
								key={item.key}
								className={`header-nav-button-${item.key}`}
								onClick={(e) => handleNavItemClick(item.key, e)}
								href={`#${item.key.toLowerCase()}`}
								component="a"
								sx={{ 
									color: 'black !important', 
									fontSize: '1.1rem',
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 'bold',
									margin: '0 10px',
									borderRadius: '20px',
									padding: '6px 16px'
								}}
								style={{ color: 'black' }}
							>
								{item.caption}
							</Button>
							))
						}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	</React.Fragment>
	)
}
