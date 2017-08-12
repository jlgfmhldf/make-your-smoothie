import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Button from './SmoothiesCardButton/SmoothiesCardButton'

storiesOf('SmoothiesCardButton', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Button />
	))
