"use client";

import {
	alpha,
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	Menu,
	MenuItem,
	MenuProps,
	styled,
	Toolbar
} from '@mui/material';
import React, { useMemo } from 'react';
import imageLogo from '../../../../public/imageLogo.png';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: 'rgb(55, 65, 81)',
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
			},
		},
		...theme.applyStyles('dark', {
			color: theme.palette.grey[300],
		}),
	},
}));

export default function Header() {
	const navItems = useMemo(() => [
		{ key: 'curs', caption: 'Курс'},
		{ key: 'coaching', caption: 'Coaching'},
		{ key: 'free', caption: 'Бесплатно'}
	], []);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleNavItemClick = (item:string, e: React.MouseEvent)=> {
		if (e) {
			e.preventDefault();
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
			handleMoreClose()
		}
	}

	const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
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
								sx={{ textTransform: 'none', color: 'black', fontSize: '1.1rem' }}
							>
								{item.caption}
							</Button>
							))
						}
						<Button
							id="demo-customized-button"
		                    aria-controls={open ? 'demo-customized-menu' : undefined}
							className={`header-nav-button-more`}
			                aria-haspopup="true"
			                aria-expanded={open ? 'true' : undefined}
			                variant="contained"
			                disableElevation
			                onClick={handleMoreClick}
			                endIcon={<KeyboardArrowDownIcon />}
							sx={{ textTransform: 'none', color: 'black', fontSize: '1.1rem', backgroundColor: '#fff' }}
						>
							Больше
						</Button>
						<StyledMenu
							id="demo-customized-menu"
							MenuListProps={{
								'aria-labelledby': 'demo-customized-button',
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleMoreClose}
						>
							<MenuItem onClick={handleMoreClose} disableRipple>
								Пакеты с Vic
							</MenuItem>
							<MenuItem onClick={handleMoreClose} disableRipple>
								Курс
							</MenuItem>
							<MenuItem
								onClick={(e) => handleNavItemClick('connect', e)}
								disableRipple>
								Связатся
							</MenuItem>
						</StyledMenu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	</React.Fragment>
	)
}
