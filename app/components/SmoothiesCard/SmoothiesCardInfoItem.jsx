import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import s from './SmoothiesCard.css'

export default class SmoothiesCardInfoItem extends PureComponent {
	static propTypes = {
		title: string,
		value: string,
		color: string,
	}

	static defaultProps = {}

	render() {
		const {
			title,
			value,
			color,
		} = this.props

		return (
			<div 
				className={s.infoItem}
				style={{
					backgroundColor: color,
				}}
			>
				<div className={s.infoTitle}>
					{title}
				</div>
				:&nbsp;{value}
			</div>
		)
	}
}
