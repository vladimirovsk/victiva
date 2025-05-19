'use client';
import {Container, Grid} from "@mui/material";
import homeImage from "./images/homeImage.png";
import backgroundImage from './images/la-new.jpg';
import StripeButton from "../../(components)/button/stripeButton";
import Image from 'next/image';

export default function HomePage() {
	return (
		<Container component='div' maxWidth={false}
		    className={'pageHome'}
		 	id='home'
		 	style={{
		 		backgroundImage: `url(${backgroundImage.src})`,
			    backgroundSize: 'cover',
			    height: '100vh',
			    backgroundPosition: 'top center',
			    backgroundRepeat: 'no-repeat',
			    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
			    backgroundBlendMode: 'overlay',
		 	}}
		 >
			<Grid
				container
				columns={1}
				direction="column" 
				alignItems="center" 
				justifyContent="center"
				paddingTop={2}
				marginBottom={2}
			>
				<Grid style={{
						alignItems:"center",
						justifyContent:"center",
						textAlign: "center",
						color: 'black',
                        fontWeight: 'bold',
						fontSize: '32px',
						marginTop: '1.5rem',
						// textShadow: '3px 3px 4px rgba(0, 0, 0, 1)',
				}}>
					<Container maxWidth={false}>
						<div style={{
							color: 'gold',
							fontWeight: 'bold',
							fontSize: '40px',
							marginBottom: '1.5rem',
							// WebkitTextStroke: '1px black',
							textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
						}}>
							ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ
						</div>
						<Container style={{ position: 'relative', width: '100%', height: '400px' }}>
							<Image
								src={homeImage.src}
								alt="Home Image"
								fill
								// layout="fill"
								// objectFit="contain"
								style={{
									objectFit: 'contain',
									// width: '100%',
									// height: 'auto',
								}}
							/>
						</Container>
						<StripeButton value={4900}/>

					</Container>
				</Grid>
				<Grid style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1.3rem',
					padding: '30px',
				}}>
						<div style={{
							maxWidth: '400px',
							border: '4px solid gold',
							borderRadius: '15px',
							backgroundColor: '#fffefe',
							color: 'black',
							padding:  '20px',
						}}>
							<div>Лучший в мире курс
							американского произношения для
							русско-говорящих от американца</div>
						</div>
				</Grid>
			</Grid>

		</Container>
	)
}
