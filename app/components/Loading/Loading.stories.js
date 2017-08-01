import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Loading from '../Loading'

storiesOf('Loading', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Loading />
	))
