'use client';
import {Grid} from '@mui/material';
import imageLa from './images/la-new.jpg';
import ImageLeft from './images/img1.png'
import ImageRight from './images/im2.gif'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Image3 from './images/img3.gif'
import ArrowImage from './images/arrow.png'


export default function Free() {
	return (
		<div id="free" className={'titlePageFree'} style={{
				paddingTop: '1rem',
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageLa.src})`,
				backgroundSize: 'auto 100%',
				backgroundPosition: 'top center',
				backgroundRepeat: 'repeat',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				// height: '50vh',
				// padding: '0 16px',
				color: 'gold'
			}}>
				{/***row1***********/}
				<Grid container columns={12} spacing={1} style={{
					marginTop: '2rem',
				}}>
				<Grid size={{lg:4, md:3, sm:12, xs:12}} style={{
					backgroundImage: `url(${ImageLeft.src})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center right',
					backgroundRepeat: 'no-repeat',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					textAlign: 'right',
					height: '250px',
					// width: '100%',
					padding: '0 16px',
					color: 'gold'
				}} />
				<Grid size={{lg:4, md:6, sm:12, xs:12}} style={{
					fontWeight: 'bold',
					fontSize: '28px',
					marginTop: '3rem',
					textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
				}}>
					БЕСПЛАТНАЯ ЧАСТЬ КУРСА
					АМЕРИКАНСКОГО ПРОИЗНОШЕНИЯ
					"ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ"
					ОТ АМЕРИКАНЦА
				</Grid>
				<Grid size={{lg:4, md:3, sm:12, xs:12}} style={{
					backgroundImage: `url(${ImageRight.src})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center left',
					backgroundRepeat: 'no-repeat',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
					textAlign: 'left',
					height: '250px',
					// width: '100%',
					padding: '0 16px',
					color: 'gold'
				}}/>
				</Grid>
				{/***row2***********/}
				<Grid container columns={12} spacing={1} style={{
				}}>
				<Grid size={{lg:4, md:3, sm:12, xs:12}}/>
				<Grid size={{lg:4, md:6, sm:12, xs:12}} style={{
					fontWeight: 'bold',
					fontSize: '22px',
					letterSpacing: '0.3rem',
					textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
					// backgroundColor: 'rgba(0, 0, 0, 0.6)',
					padding: '1rem',
					marginTop: '2rem',
					borderRadius: '8px'
				}}>
					1.КАК НА САМОМ ДЕЛЕ АМЕРИКАНЦЫ ВОСПРИНИМАЮТ РУССКИЙ АКЦЕНТ?
				</Grid>
				<Grid size={{lg:4, md:3, sm:12, xs:12}} />
				</Grid>
				{/***row3***********/}
				<Grid container columns={12} spacing={1}>
				<Grid size={{lg:4, md:3, sm:12, xs:12}}/>
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
				<Grid size={{lg:4, md:3, sm:12, xs:12}}/>
				<Grid size={{lg: 4, md: 6, sm: 12, xs: 12}} style={{
					fontWeight: 'bold',
					fontSize: '22px',
					letterSpacing: '0.3rem',
					marginTop: '2rem',
					marginBottom: '2rem',
					textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)',
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					padding: '1rem',
					borderRadius: '8px'
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
				<Grid size={{lg:4, md:3, sm:12, xs:12}}/>
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
				<Grid size={{lg:4, md:3, sm:12, xs:12}} style={{
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
					textShadow: '4px 3px 5px rgba(0, 0, 0, 0.9)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
					Полный курс
					<div style={{ 
						display: 'flex', 
						justifyContent: 'left',
						marginTop: '2rem',
						gap: '2rem'
					}}>
						<img 
							src={ArrowImage.src} 
							alt="Arrow down" 
							style={{
								transform: 'rotate(80deg)',
								width: '120px',
								height: 'auto' 
							}} 
						/>
						<img 
							src={ArrowImage.src} 
							alt="Arrow down" 
							style={{ 
								transform: 'rotate(100deg)',
								width: '120px',
								height: 'auto' 
							}} 
						/>
					</div>
				</Grid>
				<Grid size={{lg: 4, md: 4, sm: 0, xs: 0}} style={{

				}}/>
				</Grid>
		</div>


	)
}
