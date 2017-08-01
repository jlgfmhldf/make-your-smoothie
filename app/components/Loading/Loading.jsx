import React, { PureComponent } from 'react'
import Spinner from "react-md-spinner"

import s from './Loading.css'

export default class Loading extends PureComponent {
	render() {
		return (
			<div className={s.Loading}>
				<div className={s.spinner}>
					<Spinner size={64} singleColor='#ff4081'/>
				</div>
			</div>
		)
	}
}
