import {Grid} from '@mui/material';
import { getServerSession } from 'next-auth/next';
import {authOptions} from '@/src/app/(components)/configs/auth';

export default async function ProfilePage() {
	const session = await getServerSession(authOptions);
	return (
		<Grid id='profile'
			  padding={10}
		      container
		      columns={12}
		      spacing={0}
		      // direction="row"
		      sx={{
			      display: 'flex',
			      flexWrap: 'wrap',
		      }}

		>
			<Grid size={{xs: 12}} sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				marginBottom: '20px' }}
			>
				<h1 style={{
					textAlign: 'center',
					fontSize: '2rem',
					color: 'gold',
					textShadow: '-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000',
				}}>Hey! {session?.user?.name}</h1>
			</Grid>
			<Grid size={{xs: 6, md: 6, lg: 6}} sx={{
				textAlign: 'center',
			}}>
				{ session?.user?.image && <img src={session.user.image} alt="profile" style={{borderRadius: '50%', width: '150px', height: '150px'}}/> }
			</Grid>
			<Grid size={{xs: 6, md: 6, lg: 6}}>
				<h2>Ты сделал правильный выбор!</h2>
			</Grid>
		</Grid>
	)
}
