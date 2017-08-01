import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import SmoothiesList from '../SmoothiesList'
import list from '../../../data/list.json'

storiesOf('SmoothiesList', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<SmoothiesList />
	))
	.add('Data', () => (
		<SmoothiesList
			list={list}
		/>
	))
