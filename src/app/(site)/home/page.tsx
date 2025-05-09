import { Grid } from "@mui/material";
import homeImage from "../../../../public/homeImage.png";
import BuyCursButton from "../../(components)/button/buyCurs";

export default function HomePage() {
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
				<Grid
				      style={{
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
					width: '350px',
					// height: '250px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: '20px',
				}}>
					<div style={{
						fontSize: '32px',
						marginTop: '30px',
						textShadow: '3px 3px 4px rgba(0, 0, 0, 1)',
					}}>ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ</div>
					<BuyCursButton />
				</Grid>
				<Grid style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1.3rem',
					padding: '30px',
				}}>
					<div>Лучший в мире курс</div>
					<div>американского произношения для</div>
					<div>русско-говорящих от американца</div>
				</Grid>
			</Grid>

		</div>
	)
}
