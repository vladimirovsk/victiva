'use client';
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export default function Connect() {

	const [expandedAccordion, setAccordionExpanded] = React.useState<string | false>(false);

	const handleAccordionChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setAccordionExpanded(isExpanded ? panel : false);
		};

	const accordionData = [
		{
			id: 'panel1',
			title: 'Вы уверены что видео курс поможет мне сделать свое американское произношение правильным?',
			details: [
				'Еще как уверен! Этот видео курс помог многим людям улучшить свое американское произношение даже ' +
				'эффективнее чем персональные занятия со мной (как бы это обидно не звучало) в некоторых аспектах. ' +
				'Система освоения каждого звука в этом курсе безупречная.'
			]
		},
		{
			id: 'panel2',
			title: 'Как быстро я смогу овладеть всеми звуками в этом курсе и петь с крутым американским произношением?',
			details: [
				'Этот курс я разработал для максимально быстрого овладения всеми 9-ю звуками. ' +
				'Если вы четко будете делать все по программе, ' +
				'то каждый звук вы можете сделать своим всего за 5-7 дней ежедневных тренеровок'
			]
		},
		{
			id: 'panel3',
			title: 'Какой уровень английского мне нужен для видео курса и для групповых и один на один занятий с Vic?',
			details: [
				'Я думаю вы заметили что я сделал все на русском:) Это я сделал для того чтобы мои курсы Американского произношения были доступны для всех уровней, и ПОТОМУ ЧТО ВСЕМ УРОВНЯМ АНГЛИЙСКОГО КОТОРЫЕ ЛЮДИ ИМЕЮТ НУЖНО ПРАВИЛЬНОЕ ПРОИЗНОШЕНИЕ! Без правильного произношения эти уровни фальшивые. Да, и у вашого учителя английского и друга/подругы которые хавстаються своим английским, произношение скорее всего плохое и звучит для ушей носителей, и не только, ужасно. ',
				'А переучивать свое плохое произношение на правильное намного сложнее чем учить правильное с начала. Поэтому если у вас нулевой уровень аннглийского, это ШИКАРНО! И вам поскорее пройти мой курс пока вас не испортили'
			]
		},
		{
			id: 'panel4',
			title: 'Для какого возраста этот курс?',
			details: [
				'Этот курс быстро поможет улучшить свое американское произношение как и 10 летнему Диме, так и 80 летней Дине. Настолько простой и эффективный метод освоения произношения в нем. Он поможет ВСЕМ!',
			]
		},
		{
			id: 'panel5',
			title: 'Как я знаю что я могу вам доверять?',
			details: [
				'Я в своем деле лучший и только начинаю рекламировать свои знания на мир. Я вкладываю 100% своих усилий чтобы помочь своим ученикам дойти до их цели максимально быстро!',
				'Вы можете посмотреть бесплатную часть курса чтобы понять или подойдет курс вам.'
			]
		}
	]

	return (
		<div id="connect" className={'titlePageConnect'} style={{
			backgroundColor: 'black'
		}}>
			<Grid container columns={12} style={{
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: 'white',
				fontSize: '2rem',
			}}>
				{/*/*row1***************/}
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				<Grid size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					color: 'white',
					fontSize: '2rem',
					marginBottom: '4em',
					marginTop: '4em',
				}}>
					<div>По любым вопросам пожалуйста пишите на почту:</div>
					<div><a href="mailto:thevictiva@gmail.com" style={{color:'white'}}>thevictiva@gmail.com</a></div>
				</Grid>
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				{/*/*row2***************/}
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				<Grid size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
					fontWeight: 'bold',

				}}>
					Часто Задаваемые Вопросы
				</Grid>
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				{/*/*row3***************/}
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				<Grid size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
					backgroundColor: 'black',
					color: 'white',
					marginTop: '2em',
					marginBottom: '2em',
				}}>

					{
						accordionData.map(item=>(
							<Accordion key={item.id} className={'accordion'}
							           defaultExpanded={expandedAccordion === 'panel1'}
							           expanded={expandedAccordion === item.id}
							           onChange={handleAccordionChange(item.id)}
										style={{
											backgroundColor: 'black' , color: 'white',
											borderBottomWidth: '2px',
											borderBottomStyle: 'solid',
											borderBottomColor: 'gold',
										}}
				            >

								<AccordionSummary className={'accordionSummary'}
									expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}

								>
									<Typography component="span" className={'title-accordion'} style={{fontSize: '1.2rem'}}>
										{item.title}
									</Typography>
								</AccordionSummary>
								<AccordionDetails style={{
									fontSize: '0.9rem', lineHeight: 1.5,
								}}>
									{item.details.map(row=>(
										<div style={{marginBottom: '1rem'}}>{row}</div>
									))}
								</AccordionDetails>
							</Accordion>

						))
					}
				</Grid>
				<Grid size={{lg: 3, md: 6, sm: 1, xs: 1}}/>
				{/*/*row4***************/}
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
				<Grid size={{lg: 6, md: 6, sm: 10, xs: 10}} style={{
					fontSize: '1rem',
					marginTop: '1rem',
					marginBottom: '1rem'
				}}>
					<Box className={'footer'} style={{color:'gold'}}>
						2025 © Vic Tiva All rights reserved.
					</Box>
				</Grid>
				<Grid size={{lg: 3, md: 3, sm: 1, xs: 1}}/>
			</Grid>
		</div>
	)
}
