import React, { PureComponent } from 'react'
import { number, string, func } from 'prop-types'
import noop from 'noop3'
import {
	CardMedia,
	CardTitle,
	CardText,
} from 'react-toolbox'
import Card from 'react-toolbox/lib/card'
import Button from 'react-toolbox/lib/button'
import InfoItem from './SmoothiesCardInfoItem'
import s from './SmoothiesCard.css'

export default class SmoothiesCard extends PureComponent {
	static propTypes = {
		title: string,
		subtitle: string,
		image: string,
		description: string,
		calories: number,
		carbohydrates: number,
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
			carbohydrates,
			proteins,
			fats,
			link,
			onView,
		} = this.props

		const subtitle = []

		proteins && subtitle.push(`Белки: ${proteins}`)
		fats && subtitle.push(`Жиры: ${fats}`)
		carbohydrates && subtitle.push(`Углеводы: ${carbohydrates}`)

		return (
			<Card>
				<CardTitle
					title={title}
				/>
				<CardMedia
					aspectRatio="wide"
					image={image}
				/>
				<div className={s.info}>
					{proteins && <InfoItem
						title='Б'
						color='#97CC04'
						value={proteins}
					/>}
					{fats && <InfoItem
						title='Ж'
						color='#EEB902'
						value={fats}
					/>}
					{carbohydrates && <InfoItem
						title='У'
						color='#F45D01'
						value={carbohydrates}
					/>}
					{calories && <InfoItem
						title='К'
						color='#2D7DD2'
						value={calories}
					/>}
				</div>
				{description && <CardText>{description}</CardText>}
				<div className={s.button}>
					<Button
						label="Приготовить"
						onClick={onView}
						raised
						accent
						href={link}
						target='_blank'
						style={{
							width: '100%'
						}}
					/>
				</div>
			</Card>
		)
	}
}
