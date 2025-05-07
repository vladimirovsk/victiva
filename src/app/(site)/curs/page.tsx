import { Grid } from "@mui/material";
import homeImageCurs from "../../../../public/homeImage.png";
import redX from "../../../../public/red-x.svg";
import BuyCursButton from "../../(components)/button/buyCurs";

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
				<img src={homeImageCurs.src} className="mx-auto w-3/5"
					style={{margin: 40}} alt="homeImage"
				/>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2.5rem',
					fontWeight: 'bold',
					margin: '20px 0'
				}}>
					<div style={{ 
						position: 'relative', 
						color: 'white',
						marginRight: '10px'
					}}>
						$299 -
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
					<div style={{ color: 'red' }}>$49</div>
				</div>
				<BuyCursButton />
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
				<BuyCursButton />
			</div>
			</Grid>

		</div>
	)
}
