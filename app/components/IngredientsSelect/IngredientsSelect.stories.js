import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import IngredientsSelect from './'
import list from './list.mock'

const value = [
	'Яблоко',
	'Груша'
]

storiesOf('IngredientsSelect', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<IngredientsSelect />
	))
	.add('Data', () => (
		<IngredientsSelect
			list={list}
			value={value}
			onSelect={action('select')}
		/>
	))
