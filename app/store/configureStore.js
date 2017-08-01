import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const middlewares = [
		thunk,
	]

	if (__DEV__) {
		middlewares.push(
			require('redux-logger').createLogger()
		)
	}

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares),
	)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
