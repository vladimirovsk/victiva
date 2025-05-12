import {Box, Grid} from '@mui/material';
import React from 'react';

export default function Footer() {
	return (
		<Grid container columns={12} style={{
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			color: 'white',
			fontSize: '2rem',
			backgroundColor: 'black',
		}}>
			{/*/*row4***************/}
			<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
			<Grid size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
				fontSize: '1rem',
				marginTop: '1rem',
				marginBottom: '1rem'
			}}>
				<Box className={'footer'} style={{color:'gold'}}>
					2025 © Vic Tiva All rights reserved.
				</Box>
			</Grid>
			<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
		</Grid>
	)
}
