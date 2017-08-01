import React, { PureComponent } from 'react'
import {
	array,
	func,
} from 'prop-types'
import noop from 'noop3'
import {
	Autocomplete,
} from 'react-toolbox'

import s from './IngredientsSelect.css'

export default class IngredientsSelect extends PureComponent {
	static propTypes = {
		value: array,
		list: array,
		onSelect: func,
		onInput: func,
	}

	static defaultProps = {
		value: [],
		list: [],
		onSelect: noop,
	}

	render() {
		const {
			value,
			list,
			onSelect,
			onInput,
		} = this.props

		return (
			<div className={s.IngredientsSelect}>
				<Autocomplete
					value={value}
					source={list}
					type='search'
					name='IngredientsSearch'
					label='Найти ингрeдиент'
					hint='Введите название продукта'
					onChange={onSelect}
					onQueryChange={onInput}
				/>
			</div>
		)
	}
}
