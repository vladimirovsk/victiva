"use client";
import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar
} from '@mui/material';
import React, { useMemo, useEffect, useState } from 'react';
import imageLogo from '../../../../public/imageLogo.png';
import Image from 'next/image';
import {useSession, signOut, signIn } from 'next-auth/react';

export default function Header() {
	const navItems = useMemo(() => [
		{ key: 'curs', caption: 'Курс'},
		{ key: 'coaching', caption: 'Coaching'},
		{ key: 'free', caption: 'Бесплатно'}
	], []);

	const sesson = useSession();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleNavItemClick = (item:string, e: React.MouseEvent)=> {
		if (e) {
			e.preventDefault();

			// Only execute browser-specific code if window is defined (client-side)
			if (typeof window !== 'undefined') {
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
	}
	const handleMoreClose = () => {
		setAnchorEl(null);
	};

	const handleLoginClick = () =>{
		if (sesson.data) {
			signOut({ callbackUrl: '/' }).catch(()=>{console.log('Error log out')})
		} else {
			signIn(undefined, { callbackUrl: '/profile' }).catch((e)=>{console.log('Error log in', e?.stack) })
		}
	}

	return (
	<React.Fragment>
  <AppBar sx={{ top: 0, backgroundColor: 'white', zIndex: 1100, boxShadow: 'none' }}
			        component='nav'
			        position="fixed"
			        className="appBarHeader" >
			<Container fixed disableGutters>
				<Toolbar disableGutters>
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
						<Button
							style={{
								color: 'black',
								backgroundColor: 'gold',
								fontSize: '1.1rem',
								fontFamily: 'Montserrat, sans-serif',
								fontWeight: 'bold',
								margin: '0 10px',
								borderRadius: '20px',
								padding: '6px 16px',
							}}
							onClick={(e) => handleLoginClick()}
						>{!sesson.data ? 'Для членов':'Выход'}
						</Button>
						{ !sesson.data ? null : (
							<Button
								style={{
									color: 'black',
									backgroundColor: 'white',
									fontSize: '1.1rem',
									fontFamily: 'Montserrat, sans-serif',
									fontWeight: 'bold',
									margin: '0 10px',
									borderRadius: '20px',
									padding: '6px 16px',
								}}
								onClick={(e) => handleNavItemClick('profile', e)}
							>Профиль</Button>
						)}
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
