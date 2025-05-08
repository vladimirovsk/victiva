import { Grid } from "@mui/material";
import redX from "../../../../public/red-x.svg";
import leftImage1 from "./images/left1.png";
import BuyCursButton, { EColorButton } from "../../(components)/button/buyCurs";


export default function Coaching() {
	return (
		<div id="coaching" className={'titlePageCoaching'}>
			<Grid container spacing={3} columns={12} direction="row"
				style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center'
					}}
			>
				<Grid size={{lg:4, md:3, sm:0, xs:0}} style={{
					backgroundImage: `url(${leftImage1.src})`,
				}}>
					{/*<img src={leftImage1.src} alt="leftImage1"*/}
					{/*     style={{*/}
					{/*	     flexDirection: 'row',*/}
					{/*	     marginTop: '20px',*/}
					{/*	     // width: '100%',*/}
					{/*	     height: 'auto',*/}
					{/*	     // objectFit: 'contain'*/}
					{/*     }}/>*/}
				</Grid>
				<Grid size={{lg:4, md:6, sm:12, xs:12}} style={{
					fontSize: '32px',
					fontWeight: 'bold',

				}}>
					<div style={{marginTop: '4rem'}}>ПАКЕТ ПРЕМИУМ</div>
					<div>ГРУППОВОЙ ТРЕНИНГ</div>
					<div style={{marginBottom: '4rem'}}>C VIC</div>
				</Grid>
				<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
			</Grid>
			<Grid container spacing={3} columns={12} direction="row"
			      style={{
					  alignItems: 'center',
				      justifyContent: 'left',
				      textAlign: 'left',
				      fontSize: '1.3rem',
			      }}
			>
				<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
				<Grid size={{lg:4, md:6, sm:12, xs:12}}>
					<div style={{marginBottom: '10px'}}>✔ 8 занятий в группе через Zoom c Vic на 1 месяц</div>
					<div style={{marginBottom: '10px'}}>✔ 2 раза в неделю по 75 минут</div>
					<div style={{marginBottom: '10px'}}>✔ Vic будет поправлять ваше произношение лично</div>
					<div style={{marginBottom: '10px'}}>✔ вы будете слышать ошибки в произношение других участников и это поможет вам быстро</div>
					<div style={{marginBottom: '10px'}}>✔ улучшить ваше амеркианское произношение</div>
					<div style={{marginBottom: '10px'}}>✔ + видео курс "Говори Как Американцы За 8 Недель"</div>
				</Grid>
				<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
			</Grid>
			<Grid container spacing={12} style={{
				alignItems: 'left',
				justifyContent: 'center',
				textAlign: 'center',
				// margin: '0px 0'
			}}>
			<BuyCursButton caption = 'Записаться' bgColor={EColorButton.black} fontColor={EColorButton.gold}/>
			<div style={{
				left: 0,
				top:0,
				display: 'flex',
				alignItems: 'left',
				justifyContent: 'left',
				fontSize: '2.5rem',
				fontWeight: 'bold',
			}}>
				<div style={{
					left:0,
					position: 'relative',
					color: 'black',
					margin: '0px',
				}}>
					$697 -
					<img
						src={redX.src}
						alt="crossed out"
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							objectFit: 'contain'
						}}
					/>
				</div>
				<div style={{ color: 'red' }}> $397</div>
			</div>
			</Grid>
		</div>
	)
}
