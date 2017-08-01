import React, { PureComponent } from 'react'
import {
	array,
} from 'prop-types'
import SmoothiesCard from '../SmoothiesCard'

import s from './SmoothiesList.css'

export default class SmoothiesList extends PureComponent {
	static propTypes = {
		list: array,
	}

	static defaultProps = {
		list: [],
	}

	renderItem = ({
		title,
		nutrition_value: {
			carbohydrates,
			proteins,
			fats,
			calories,
		},
		image,
		link,
	}, key) => {
		return <div
			className={s.item}
			key={key}
		>
			<SmoothiesCard
				title={title}
				proteins={proteins}
				fats={fats}
				carbohydrates={carbohydrates}
				calories={calories}
				image={image || `https://placeimg.com/800/450/nature?${key}`} //TODO
				link={link}
			/>
		</div>
	}

	render() {
		const {
			list,
		} = this.props

		return (
			<div className={ s.SmoothiesList }>
				{list.map(this.renderItem)}
			</div>
		)
	}
}
