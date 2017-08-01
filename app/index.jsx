import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from './containers/App'
import './styles/index.css'

const store = configureStore()

export default class App extends PureComponent {
	render() {
		return <div>
			<Provider store={store}>
				<AppContainer />
			</Provider>
        </div>
	}
}

render(
    <App />,
    document.getElementById('root')
)
