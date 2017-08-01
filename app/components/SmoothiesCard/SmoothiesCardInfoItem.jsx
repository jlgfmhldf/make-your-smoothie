import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import Chip from 'react-toolbox/lib/chip'
import Avatar from 'react-toolbox/lib/avatar'
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
			<div className={s.infoItem}>
				<Chip>
					<Avatar
						title={title}
						style={{backgroundColor: color}}
					/>
					{value}
				</Chip>
			</div>
		)
	}
}
