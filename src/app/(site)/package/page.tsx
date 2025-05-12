import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import img1 from './images/left1.png';
import img2 from './images/vip.png';
import StripeButton from "../../(components)/button/stripeButton";

interface ICardList {
	key: number
	names: string[],
	image: string,
	time: string,
	value: number,
	plane: string
}

export default function PackagePage() {
	const cardList: ICardList[] = [
	{
		key: 1,
		names: ['ПАКЕТ ПРЕМИУМ ГРУППОВОЙ', 'ТРЕНИНГ C VIC'],
	 	image: img1.src,
		time: '1 час 15 минут',
		value: 397,
		plane: 'Скоро обновление'
	},
	{
		key: 2,
		names: ['VIP 1 ЗАНЯТИЕ 1 НА 1 C VIC', '\u00A0'],
		image: img2.src,
		time: '1 час',
		value: 400,
		plane: 'Скоро обновление'
	},
	{
		key: 3,
		names: ['ПАКЕТ VIP 1 НА 1 C VIC', '\u00A0'],
		image: img2.src,
		time: '1 час',
		value: 2997,
		plane: 'Скоро обновление'
	},
	]

	return (
		<Grid container columns={12} spacing={10} style={{
			height: 'calc(100vh - 64px - 3rem)',
			backgroundColor: 'black',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		}}>
			{cardList.map((service) => (
            <Grid key={`GridRow${service.key}`} size={{lg:3, md:3, sm:10, xs:10}}
                  style={{
					  backgroundColor: 'black',
                  }}>
				<Card style={{
					height: 'calc(100vh/1.5)',
					// height: '550px',
					width: '400px',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: 'black',
					border: '1px solid gold',
					margin: '0',
				}}>
					<CardMedia
						image={service.image}
						title="image card"
						component="img"
						sx={{
							width: '100%',
							height: '200px',
							objectFit: 'cover',
							justifyContent: 'center',
							textAlign: 'center',
							alignItems: 'center',
						}}
					/>
					<CardContent key={`CardContent${service.key}`} sx={{
						flexGrow: 1,
						backgroundColor: 'black',
						color: 'white',
						justifyContent: 'center',
						textAlign: 'center',
						alignItems: 'center',
						marginTop: '2rem',
					}}>
						{service.names.map((rowName:string, index:number) => (
						<Typography key={`NameTypo${index}`} variant="h5" component="div" sx={{
							color: 'gold',
							textAlign: 'center' }}>
							{rowName}
						</Typography>
						))}
						<Typography variant="body2" style={{
							marginTop: '1rem',
						}}>
							Время:  {service.time}
						</Typography>
						<Typography variant="h5" style={{
							marginTop: '1rem',
						}}>
							Стоимость: {service.value}
						</Typography>
					</CardContent>
					<CardActions key={`CardActions${service.key}`} sx={{
						justifyContent: 'center',
					}}>
						<StripeButton value={service.value * 100} />
					</CardActions>
					<Typography variant="body2" style={{
						color: 'white',
						margin: '1rem',
					}}>
						{service.plane}
					</Typography>
				</Card>
			</Grid>
			))}
		</Grid>
	)
}
