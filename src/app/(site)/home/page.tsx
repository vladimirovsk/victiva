'use client';
import { Grid } from "@mui/material";
import homeImage from "../../../../public/homeImage.png";
import StripeButton from "../../(components)/button/stripeButton";
import ScrollAnimation from 'react-animate-on-scroll';
import { useState } from "react";

export default function HomePage() {
	const [isAnimated, setIsAnimated] = useState(false);

	return (
		<div 
			className="pageHome" 
			id='home' 
			style={{ 
				backgroundImage: `url(${homeImage.src})`,
			}}
		>
			<Grid
				container
				// rowSpacing={2}
				// spacing={1}
				columns={1}
				// columnSpacing={{ xs: 1, sm: 1, md: 1 }}
				direction="column" 
				alignItems="center" 
				justifyContent="center"
				// style={{ height: '50vh', width: '100%' }}
				paddingTop={20}
			>
				<ScrollAnimation animateIn="animate__zoomIn animate__pulse" animateOut={'animate__zoomOut'}  animatePreScroll={true} delay={0}>
				<Grid
					className={isAnimated ? "animate__animated animate__pulse" : ""}
					onMouseEnter={() => setIsAnimated(true)}
					onMouseLeave={() => setIsAnimated(false)}
			        style={{
						backgroundColor: 'rgba(0, 0, 0, 0.6)',
				        marginTop: '15rem',
						width: '350px',
				        height: '250px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						padding: '20px',
				}}>
					<div  style={{
						fontSize: '32px',
						marginTop: '30px',
						textShadow: '3px 3px 4px rgba(0, 0, 0, 1)',
					}}>ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ</div>
                    <StripeButton value={4900}/>
				</Grid>
				</ScrollAnimation>
				<Grid style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1.3rem',
					padding: '30px',
				}}>
					<ScrollAnimation animateIn="animate__bounce"  animatePreScroll={true} delay={1}>
						<div>Лучший в мире курс</div>
						<div>американского произношения для</div>
						<div>русско-говорящих от американца</div>
					</ScrollAnimation>
				</Grid>
			</Grid>

		</div>
	)
}
