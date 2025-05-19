'use client';
import {Grid} from '@mui/material';
import imageBackground from './images/backendStar1.png';
import ImageLeft from './images/img1.png'
import ImageRight from './images/im2.gif'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Image3 from './images/img3.gif'
import ArrowImage from './images/arrow.png'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Free() {
	return (
		<div id="free" className={'titlePageFree'} style={{
				paddingTop: '1rem',
				backgroundImage: `url(${imageBackground.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'right center',
				backgroundRepeat: 'repeat',
				backgroundColor: 'rgba(255, 255, 255, 0.8)',
				backgroundBlendMode: 'overlay',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: 'gold'
			}}>
				{/***row1***********/}
				<Grid container columns={12} spacing={0} style={{
					display: 'flex',
					flexWrap: 'wrap'
				}}>
					<Grid
						size={{lg: 2, md: 3, sm: 12, xs: 12}}
						sx={{
							backgroundImage: `url(${ImageLeft.src})`,
							backgroundSize: 'contain',
							backgroundPosition: 'center right',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							alignItems: 'flex-end',
							justifyContent: 'flex-end',
							textAlign: 'right',
							height: '250px',
							width: '100%',
							maxWidth: '250px',
							padding: '0 16px',
							color: 'gold',
							order: 1,
							margin: '0 auto',
						}}
					/>
					<Grid
						size={{lg: 8, md: 6, sm: 12, xs: 12}}
						sx={{
							fontWeight: 'bold',
							fontSize: { lg: '28px', md: '28px', sm: '24px', xs: '22px' },
							marginTop: { lg: '1rem', md: '1rem', sm: '0', xs: '0' },
							marginBottom: { lg: '0', md: '0', sm: '1rem', xs: '1rem' },
							letterSpacing: '0.3rem',
							textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
							order: { lg: 2, md: 2, sm: 3, xs: 3 },
						}}
					>
						<div style={{
							marginBottom: '2rem',marginTop: '2rem',
						}}>БЕСПЛАТНАЯ ЧАСТЬ КУРСА АМЕРИКАНСКОГО ПРОИЗНОШЕНИЯ</div>
						<div>"ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ" ОТ АМЕРИКАНЦА</div>
					</Grid>
					<Grid
						size={{lg: 2, md: 3, sm: 12, xs: 12}}
						sx={{
							backgroundImage: `url(${ImageRight.src})`,
							backgroundSize: 'contain',
							backgroundPosition: 'center left',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '250px',
							width: '100%',
							padding: '0 16px',
							color: 'gold',
							order: 3,
							maxWidth: '250px',
							margin: '0 auto',
						}}
					/>
				</Grid>
				{/***row2***********/}
				<Grid container columns={12} spacing={1} style={{
				}}>
					<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
					<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
						fontWeight: 'bold',
						fontSize: '22px',
						letterSpacing: '0.3rem',
						marginTop: '2rem',
						marginBottom: '2rem',
						padding: '1rem',
						borderRadius: '8px',
						textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
					}}>
						1.КАК НА САМОМ ДЕЛЕ АМЕРИКАНЦЫ ВОСПРИНИМАЮТ РУССКИЙ АКЦЕНТ?
					</Grid>
					<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}} />
				</Grid>
				{/***row3***********/}
				<Grid container columns={12} spacing={1}>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
					fontWeight: 'bold',
					fontSize: '22px',
					letterSpacing: '0.3rem'
				}}>
					<LiteYouTubeEmbed
						id="Ptb1kq_IOQQ"
						title="Mini course 1"
						aspectHeight={9}
						aspectWidth={16}
						noCookie={true}
						poster="maxresdefault"
					/>
				</Grid>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				</Grid>
				{/***row4***********/}
				<Grid container columns={12} spacing={1}>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
					fontWeight: 'bold',
					fontSize: '22px',
					letterSpacing: '0.3rem',
					marginTop: '2rem',
					marginBottom: '2rem',
					padding: '1rem',
					borderRadius: '8px',
					textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
				}}>
					2.РУССКИЙ ЗВУК В АНГЛИЙСКОМ КОТОРЫЙ  РУССКО-ГОВОРЯЩИЕ ЛЮДИ НЕ ПРОИЗНОСЯТ ПОЧЕМУ ТО...
					И СЕКРЕТ КОТОРОГО НЕХВАТАЕТ
					ВСЕМ ДЛЯ ИДЕАЛЬНОГО
					АМЕРИКАНСКОГО ПРОИЗНОШЕНИЯ
				</Grid>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				</Grid>
				{/***row5***********/}
				<Grid container columns={12} spacing={1}>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
					fontWeight: 'bold',
					fontSize: '22px',
					letterSpacing: '0.3rem'
				}}>
					<LiteYouTubeEmbed
						id="WxbOBwAEuIY"
						title="Mini course 1"
						aspectHeight={9}
						aspectWidth={16}
						noCookie={true}
						poster="maxresdefault"
					/>
				</Grid>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}}/>
				</Grid>
				{/***row6***********/}
				<Grid container columns={12} spacing={1}>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}} style={{
					marginTop: '5rem',
					backgroundImage: `url(${Image3.src})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					textAlign: 'center',
					height: '180px',
					// width: '100%',
					padding: '0 16px',
					color: 'gold'
				}}/>
				<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
					fontWeight: 'bold',
					fontSize: '48px',
					letterSpacing: '0.3rem',
					marginTop: '5rem',
					marginBottom: '1rem',
					textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
					<ScrollAnimation animateIn="animate__rubberBand"  animateOut={'animate__rubberBand'} animatePreScroll={true} delay={1}>
					Полный курс
					</ScrollAnimation>
					<div style={{ 
						display: 'flex', 
						justifyContent: 'left',
						marginTop: '2rem',
						gap: '2rem'
					}}>
						<ScrollAnimation animateIn="animate__fadeInTopLeft"  animateOut={'animate__fadeOutTopLeft'} animatePreScroll={true} delay={1}>
						<img 
							src={ArrowImage.src} 
							alt="Arrow down" 
							style={{
								transform: 'rotate(80deg)',
								width: '120px',
								height: 'auto' 
							}} 
						/>
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInTopRight"  animateOut={'animate__fadeOutTopRight'} animatePreScroll={true} delay={1}>
						<img 
							src={ArrowImage.src} 
							alt="Arrow down" 
							style={{ 
								transform: 'rotate(100deg)',
								width: '120px',
								height: 'auto' 
							}} 
						/>
						</ScrollAnimation>
					</div>
				</Grid>
				<Grid size={{lg: 4, md: 4, sm: 0, xs: 0}} />
				</Grid>
		</div>


	)
}
