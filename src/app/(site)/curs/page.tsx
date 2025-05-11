import { Grid } from "@mui/material";
import homeImageCurs from "../../../../public/homeImage.png";
import NewPrice from "../../(components)/new-price/new-price";
import StripeButton from '@/src/app/(components)/button/stripeButton';

export default function Curs() {
	return (
		<div id="curs">
			<Grid className={'titlePageCurs'}
			      style={{
					  display: 'flex',
                      flexDirection: 'column',
				      alignItems: 'center',
					  justifyContent: 'center',
				      textAlign: 'center'
					}}
					>
				<h1>
				<div style={{ marginBottom: '10px' }}>ВИДЕО КУРС АМЕРИКАНСКОГО ПРОИЗНОШЕНИЯ</div>
				<div style={{ marginBottom: '10px' }}>ГОВОРИ КАК АМЕРИКАНЦЫ ЗА 8 НЕДЕЛЬ</div>
				<div style={{ marginBottom: '10px' }}>БАЗОВЫЙ ПАКЕТ</div>
				</h1>
				<img src={homeImageCurs.src} className="mx-auto"
					style={{
						margin: 40,
						width: '70%',
				}} alt="homeImage"
				/>

				<NewPrice oldParam={{value: 299, color: 'white'} } newParam={{value: 49, color: 'red'}} />
				<StripeButton value={4900} />
			<div className={'titlePageCursWhiteText'}>
				<div style={{ marginBottom: '10px' }}>"ЭТОТ ВИДЕО КУРС ПОМОГ МНЕ ЛУЧШЕ ЧЕМ</div>
				<div style={{ marginBottom: '10px' }}>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ С АМЕРИКАНСКИМИ УЧИТЕЛЯМИ ПРОИЗНОШЕНИЯ"</div>
				<div style={{ marginBottom: '50px' }}>ГОВОРЯТ НЕКОТОРЫЕ УЧЕНИКИ</div>
				<div style={{ marginBottom: '30px' }}>КОГДА ВЫ ПРОЙДЕТЕ КУРС</div>
				<div style={{ marginBottom: '10px' }}>1. ВАША РЕЧЬ НА АНГЛИЙСКОМ БУДЕТ</div>
				<div>ПРИЯТНАЯ ДЛЯ АМЕРИКАНЦЕВ </div>
				<div style={{ marginTop: '30px' }}>2. ВЫ СТАНЕТЕ ЧАСТЬЮ АМЕРИКАНСКОГО ОБЩЕСТВА</div>
				<div>И НЕ БУДЕТЕ ЧУВСТВОВАТЬ СЕБЯ</div>
				<div>ИЗГОЕМ </div>
				<div style={{ marginTop: '30px' }}>3. ВЫ БУДЕТЕ УВЕРЕНЫ В СВОЕМ</div>
				<div>АНГЛИЙСКОМ</div>
				<div>КАК НИКОГДА РАНЬШЕ</div>
				<div style={{ marginTop: '30px' }}>4. ВАШИ ДРУЗЬЯ И ЛЮДИ ВОКРУГ</div>
				<div>ЗАМЕТЯТ РАЗНИЦУ В ВАШЕМ АНГЛИЙСКОМ</div>
				<StripeButton value={4900} />
				<Grid container spacing={3} columns={12} direction="row" style={{
					alignItems: 'left',
					justifyContent: 'center',
					textAlign: 'center',
					margin: '20px 0'
				}}>
					{/*xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
              */}
					<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
					<Grid size={{lg:4, md:6, sm:12, xs:12}} style={{
						alignItems: 'left',
						justifyContent: 'left',
						textAlign: 'left',
						margin: '20px 0'
					}}>
					<div style={{
						marginBottom: '30px',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}>СОДЕРЖАНИЕ КУРСА</div>
					<div style={{ marginBottom: '20px' }}>✔ 9 главных звуков американского английского которые</div>
					<div style={{ marginBottom: '20px' }}>русско-язычные люди НЕПРАВИЛЬНО ПРОИЗНОСЯТ</div>
					<div style={{ marginBottom: '20px' }}>✔ 9 супер видео тренировок для каждого звука</div>
					<div style={{ marginBottom: '20px' }}>✔ 1000 + слов где используеться каждый звук</div>
					<div style={{ marginBottom: '20px' }}>✔ Видео примеры каждого звука из американских</div>
					<div style={{ marginBottom: '20px' }}>сериалов, фильмов и песен</div>
					<div style={{ marginBottom: '20px' }}>✔ Специальные упражнения для языка и мыщ рта</div>
					<div style={{ marginBottom: '20px' }}>✔  Примеры с русскими звуками для каждого звука</div>
					</Grid>
					<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
				</Grid>

				<Grid container spacing={3} columns={12} direction="row" style={{
					alignItems: 'left',
					justifyContent: 'center',
					textAlign: 'center',
					margin: '20px 0'
				}}>
					<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
					<Grid size={{lg:4, md:6, sm:12, xs:12}} style={{
						alignItems: 'left',
						justifyContent: 'left',
						textAlign: 'left',
						marginBottom: '20px',
					}}>
						<div style={{
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							marginBottom:'30px',
							lineHeight: 1.6,
						}}>30 ДНЕВНАЯ ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</div>
						<div style={{lineHeight: 1.6}}>Если вы пробовали проходить курс и вам по любой причине он
							не подошел, вам деньги возвращаються в течение
							первых 30 дней. Настолько я уверен что этот курс это билет
							к жизни которую вы желаете!</div>
					</Grid>
					<Grid size={{lg:4, md:3, sm:0, xs:0}}></Grid>
				</Grid>
			</div>
			</Grid>
		</div>
	)
}
