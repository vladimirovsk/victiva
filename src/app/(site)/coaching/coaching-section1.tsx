import {Box, Grid} from '@mui/material';
import Image from 'next/image';
import victiva from "./images/victiva.png"
import Vik from '@/src/app/(components)/vic/vik';
import React from 'react';

export default function CoachingSection1() {
	return (
		<Grid
			container
			spacing={2}
			columns={12}
			direction="row"
			sx={{
				marginTop: '4rem',
				marginBottom: '4rem',
				alignItems: 'center',
				justifyContent: 'center',
				padding: { xs: '0 16px', md: '0 24px' },
			}}
		>
			<Grid
				size={{lg: 2, md: 2, sm: 8, xs: 11}} sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'right',
					alignItems: 'center',
					minHeight: '300px',
				}}
			>
				<Box
					sx={{
						fontSize: { xs: '24px', md: '32px' },
						fontFamily: 'sans-serif',
						fontWeight: 'bold',
						color: '#333',
						marginBottom: '16px',
						textAlign: 'right',
					}}
				>     <span style={{
					color: 'gold',
					fontWeight: 'bold',
					textShadow: '-2px 0 black, 0 1px black, 1px 0 black, 0 -3px black'
				}}>
                   Vic Tiva
				</span>

				</Box>
				<Image
					src={victiva.src}
					alt="Victiva"
					width={300}
					height={300}
					style={{ objectFit: 'contain' }}
				/>
			</Grid>
			<Grid
				size={{lg: 4, md: 3, sm: 8, xs: 11}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'left',
					padding: { xs: '16px', md: '24px' },
				}}
			>
				<Box
					sx={{
						textAlign: 'justify',
						fontSize: { xs: '16px', md: '18px' },
						lineHeight: 1.6,
					}}
				>
					<p>
						Hey! Я тренер американского произношения, носитель американского английского и я стал носителем русского во взрослом возрасте, поэтому я знаю все тонкости между английскими и русскими звуками.
					</p>
					<p>
						Я помогаю русскоязычным людям говорить на английском как американцы, и даже становиться носителями американского английского, и помогу вам!
					</p>
				</Box>
			</Grid>
		</Grid>
	)
}
