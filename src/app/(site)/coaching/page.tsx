import {Box, Grid} from "@mui/material";
import leftImage1 from "./images/left1.png";
import vipImage from "./images/vip.png";
import mv2 from "./images/mv2.gif";
import  { EColorButton } from "../../(components)/buttons/buyCurs";
import Vik from "../../(components)/vic/vik";
import NewPrice from "../../(components)/new-price/new-price";
import MessageSvg from "../../(components)/message-svg/message-svg";
import CoachingSection1 from '@/src/app/(site)/coaching/coaching-section1';
import StripeButton from '@/src/app/(components)/buttons/stripeButton';



export default function Coaching() {
	return (
		<div>
			<CoachingSection1 />
		<div id="coaching" className={'titlePageCoaching'} style={{
			margin: '4rem',
		}}>
			{/*1*************/}
			<Grid container spacing={3} columns={12} direction="row"
			      style={{
				      border: '4px solid gold',
				      borderRadius: '15px',
				      backgroundColor: '#fffefe',
				      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
				      padding: '2rem',
				      marginTop: '5rem',
				      marginLeft:  '0 3rem',
				      marginRight:  '0 3rem',
				      flexDirection: 'row',
				      alignItems: 'center',
				      justifyContent: 'center',
				      textAlign: 'center'
			      }}
			>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}} style={{
					backgroundImage: `url(${leftImage1.src})`,
					backgroundSize: '80%',
					backgroundPosition: 'top center',
					backgroundRepeat: 'no-repeat',
					minHeight: '300px',
				}}>
				</Grid>
				<Grid size={{lg: 8, md: 9, sm: 12, xs: 12}} style={{
					fontSize: '26px',
					fontWeight: 'bold',

				}}>
					<div style={{marginTop: '3rem'}}>ПАКЕТ ПРЕМИУМ</div>
					<div>ГРУППОВОЙ ТРЕНИНГ</div>
					<div style={{marginBottom: '4rem'}}>C <Vik/></div>
					<div style={{
						marginBottom: '1rem',
						fontSize: '24px',
						fontWeight: '200',
						alignItems: 'left',
						textAlign: 'left',

					}}>
						<div style={{marginBottom: '10px'}}>✔ 8 занятий в группе через Zoom c Vic на 1 месяц</div>
						<div style={{marginBottom: '10px'}}>✔ 2 раза в неделю по 75 минут</div>
						<div style={{marginBottom: '10px'}}>✔ Vic будет поправлять ваше произношение лично</div>
						<div style={{marginBottom: '10px'}}>✔ вы будете слышать ошибки в произношение других участников и
							это поможет вам быстро
						</div>
						<div style={{marginBottom: '10px'}}>✔ улучшить ваше амеркианское произношение</div>
						<div style={{marginBottom: '10px'}}>✔ + видео курс "Говори Как Американцы За 8 Недель"</div>
					</div>
					<StripeButton value={39700} caption='Записаться' bgColor={EColorButton.black} fontColor={EColorButton.gold}/>
					<NewPrice oldParam={{value: 697, color: 'black'}} newParam={{value: 397, color: 'red'}}/>

				</Grid>
			</Grid>
			{/*2**************/}
			<Grid container spacing={3} columns={12} direction="row"
			      style={{
				      border: '4px solid gold',
				      borderRadius: '15px',
				      backgroundColor: '#fffefe',
				      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
				      padding: '2rem',
				      marginTop: '5rem',
				      marginLeft:  '0 3rem',
				      marginRight:  '0 3rem',
				      flexDirection: 'row',
				      alignItems: 'center',
				      justifyContent: 'center',
				      textAlign: 'center'
			      }}
			>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}} style={{
					backgroundImage: `url(${vipImage.src})`,
					backgroundSize: '80%',
					backgroundPosition: 'top center',
					backgroundRepeat: 'no-repeat',
					minHeight: '300px',
					margin: '20px 0px 0px 0px',
				}} />
				<Grid size={{lg: 8, md: 9, sm: 12, xs: 12}} style={{
					fontSize: '26px',
					fontWeight: 'bold',

				}}>
					<div style={{marginTop: '4rem'}}>VIP</div>
					<div>1 ЗАНЯТИЕ 1 НА 1</div>
					<div style={{marginBottom: '4rem'}}>C <Vik/></div>
					<div style={{
						marginBottom: '1rem',
						fontSize: '24px',
						fontWeight: '200',
						alignItems: 'left',
						textAlign: 'left',
					}}>
						<div style={{marginBottom: '10px'}}>✔ 1 приватное занятие c Vic один на один через
							Telegram, WhatsApp или Zoom
						</div>
						<div style={{marginBottom: '10px'}}>✔ Vic послушает вас, поправит ваши слабые звуки,
							и расскажет как вам максимально эффективно
							работать над вашим американским произношением
						</div>
						<div style={{marginBottom: '10px'}}>✔ + видео курс "Говори Как Американцы За 8 Недель"</div>
					</div>
				<StripeButton value={40000} caption='Забронировать' bgColor={EColorButton.black} fontColor={EColorButton.gold}/>
				<h1 style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2.7rem',
					fontWeight: 'bold',
					margin: '0',
					padding: '0'
				}}>$400</h1>
				</Grid>
			</Grid>
			{/*3**************/}
			<Grid container spacing={3} columns={12} direction="row"
			      style={{
				      border: '4px solid gold',
				      borderRadius: '15px',
				      backgroundColor: '#fffefe',
				      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
				      padding: '2rem',
				      marginTop: '5rem',
				      marginLeft:  '0 3rem',
				      marginRight:  '0 3rem',
				      marginBottom: '5rem',
				      flexDirection: 'row',
				      alignItems: 'center',
				      justifyContent: 'center',
				      textAlign: 'center'
			      }}
			>
				<Grid size={{lg: 4, md: 3, sm: 12, xs: 12}} style={{
					backgroundImage: `url(${vipImage.src})`,
					backgroundSize: '80%',
					backgroundPosition: 'top center',
					backgroundRepeat: 'no-repeat',
					minHeight: '300px',
					margin: '20px 0px 0px 0px',
				}} />
				<Grid size={{lg: 8, md: 9, sm: 12, xs: 12}} style={{
					fontSize: '32px',
					fontWeight: 'bold',
				}}>
					<div style={{marginTop: '4rem'}}>ПАКЕТ VIP</div>
					<div style={{marginBottom: '1rem'}}>1 НА 1</div>
					<div style={{marginBottom: '1rem'}}>C <Vik/></div>
					<div style={{marginBottom: '4rem'}}>(произношение + грамматика, слова)</div>
					<div style={{
						marginBottom: '1rem',
						fontSize: '24px',
						fontWeight: '200',
						alignItems: 'left',
						textAlign: 'left',
					}}>
					<div style={{marginBottom: '1rem'}}>✔ 15 приватных занятий c Vic один на один через
						Telegram, WhatsApp или Zoom
					</div>
					<div style={{marginBottom: '1rem'}}>✔ 5 недельный курс, 3 занятия в неделю по 50 минут</div>
					<div style={{marginBottom: '1rem'}}>✔ ЭТО САМЫЙ ЛЕГКИЙ И БЫСТРЫЙ СПОСОБ
						вам дойти до своей цели
					</div>
					<div style={{marginBottom: '1rem'}}> ✔ Vic создаст персональный план именно под вас,
						будет тренировать вас один на один, поправит
						все слабые места в вашем произношении и
						поможет вам обрести идеальное американское
						произношение и даже стать носителем
					</div>
					<div style={{marginBottom: '1rem'}}>✔ Также, при вашей потребности, Vic пройдет с вами
						всю английскую грамматику и слова разговорного
						американского на уровне американцев. Если у вас
						начальный/нулевой уровень, ща 15 занятий Vic
						доведет вас до среднего разговорного уровня
						грамматики, слов и произношения. Если у вас
						средний уровень, Vic доведет вас до продвинутого
						уровня и выше
					</div>
					</div>
					<StripeButton value={299700} caption='Забронировать' bgColor={EColorButton.black} fontColor={EColorButton.gold}/>
					<h1 style={{
						// display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '2rem',
						fontWeight: 'bold',
						margin: '0',
						padding: '0'
					}}>$2997 (цена скоро поднимиться)</h1>
				</Grid>
			</Grid>
			{/*4**************/}
			<Grid container spacing={0} columns={12} direction="row" style={{
				flexGrow: 1,
				// alignItems: 'left',
				// justifyContent: 'center',
				// textAlign: 'center',
				margin: '0',
				// border: '1px solid black', padding: '10px'
			}}>
				<Grid key={1} size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
				}}><div style={{
					marginLeft: '0px',
					display: 'flex',
					justifyContent: 'flex-end',
					position: 'relative',
					zIndex: 1,
				}}>
					<MessageSvg />
				</div>
				</Grid>
				<Grid key={2} size={{lg: 6, md: 6, sm: 1, xs: 1}}>
				</Grid>
				<Grid key={3} size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
					top: '1rem',
					// margin: '0px',
					// marginLeft: '20px',
					display: 'flex',
					justifyContent: 'center',
					position: 'relative',
					zIndex: 1,
				}}>
					<video src="videos/file.mp4" controls style={{ width: '400px' }} >
						Your browser does not support the video tag.
					</video>
				</Grid>
				<Grid key={4} size={{lg: 6, md: 6, sm: 6, xs: 6}}>
					<img src={mv2.src} style={{
						// position: 'absolute',
						top: 0,
						// left: '20px',
						width: '200px',
						objectFit: 'contain'
					}}></img>
				</Grid>

			</Grid>

		</div>
			<Box style={{
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}>
			<StripeButton value={4900} />
			</Box>
		</div>
	)
}
