import React, { PureComponent } from 'react'
import { number, string, func } from 'prop-types'
import noop from 'noop3'
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card'
import Button from './SmoothiesCardButton/SmoothiesCardButton'
import InfoItem from './SmoothiesCardInfoItem'
import s from './SmoothiesCard.css'


export default class SmoothiesCard extends PureComponent {
	static propTypes = {
		title: string,
		subtitle: string,
		image: string,
		description: string,
		calories: number,
		carbohydrate: number,
		proteins: number,
		fats: number,
		link: string,
		onView: func,
	}

	static defaultProps = {
		onView: noop,
	}

	render() {
		const {
			title,
			image,
			description,
			calories,
			carbohydrate,
			proteins,
			fats,
			link,
			onView,
		} = this.props

		const showInfo = proteins && carbohydrate && fats && calories

		return (
			<div className={s.SmoothiesCard}>
				<Card>
					<CardMedia
						aspectRatio="square"
						image={image}
					>
						<div className={s.title}>
							<CardTitle title={title}>
								{showInfo && <div className={s.info}>
									{proteins && <InfoItem
										title='Б'
										color='rgb(151, 204, 4)'
										value={proteins}
									/>}
									{fats && <InfoItem
										title='Ж'
										color='#EEB902'
										value={fats}
									/>}
									{carbohydrate && <InfoItem
										title='У'
										color='#F45D01'
										value={carbohydrate}
									/>}
									{calories && <InfoItem
										title='К'
										color='#2D7DD2'
										value={calories}
									/>}
								</div>}
							</CardTitle>
						</div>
					</CardMedia>
					<div className={s.button}>
						<Button
							label="Приготовить"
							onClick={onView}
							raised
							accent
							href={link}
						/>
					</div>
				</Card>
			</div>
		)
	}
}

