import {Grid} from '@mui/material';
import homeImageCurs from './images/homeImage.png';
import NewPrice from '@/src/app/(components)/new-price/new-price';
import StripeButton from '@/src/app/(components)/button/stripeButton';

export default function MarathonsPage() {
	return (
		<Grid id="marathons" className={'titlePageCurs'}
		      style={{
			      height: 'calc(100vh - 64px - 3rem)',
			      display: 'flex',
			      flexDirection: 'column',
			      alignItems: 'center',
			      justifyContent: 'center',
			      textAlign: 'center'
		      }}
		>
			<h1>
				<div style={{ marginBottom: '10px' }}>МАРАФОНЫ</div>
			</h1>
			<img src={homeImageCurs.src} className="mx-auto"
			     style={{
				     margin: 20,
				     width: '60%',
			     }} alt="homeImage"
			/>

			<NewPrice oldParam={{value: 299, color: 'white'} } newParam={{value: 49, color: 'red'}} />
			<div style={{ margin: '1rem' }}>ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ</div>
			<StripeButton value={4900} />
		</Grid>
	)
}
