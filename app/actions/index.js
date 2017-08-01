import {
	SELECT_INGREDIENTS,
	FIND_INGREDIENT,
	CHANGE_CALORIES_VALUE,
	UPDATE_SMOOTHIES_LIST,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR,
	LOAD_SMOOTHIES_LIST_REQUEST,
	LOAD_SMOOTHIES_LIST_SUCCESS,
	LOAD_SMOOTHIES_LIST_ERROR,
} from '../constants/actions'

export const updateSmoothiesList = (ingredients, calories) => ({
	type: UPDATE_SMOOTHIES_LIST,
	payload: {
		ingredients,
		calories,
	}
})

export const selectIngredients = ingredients => ({
	type: SELECT_INGREDIENTS,
	payload: {
		ingredients,
	}
})

export const changeCaloriesValue = value => ({
	type: CHANGE_CALORIES_VALUE,
	payload: {
		value,
	},
})

export const findIngredient = value => ({
	type: FIND_INGREDIENT,
	payload: {
		value,
	}
})

//TODO
export const showShackBarAction = text => ({
	type: SHOW_SNACKBAR,
	payload: {
		text,
	}
})

export const hideSnackBarAction = () => ({
	type: HIDE_SNACKBAR,
})

const requestLoadSmoothiesList = () => ({
	type: LOAD_SMOOTHIES_LIST_REQUEST,
})

const successLoadSmoothiesList = smoothies => ({
	type: LOAD_SMOOTHIES_LIST_SUCCESS,
	payload: {
		smoothies,
	}
})

const errorLoadSmoothiesList = error => ({
	type: LOAD_SMOOTHIES_LIST_ERROR,
	payload: {
		error,
	}
})

export const loadSmoothiesList = () => (dispatch) => {
	dispatch(requestLoadSmoothiesList())

	fetch(require('../../data/list.json'))
		.then(list => list.json())
		.then(smoothies => {
			dispatch(successLoadSmoothiesList(smoothies))
		})
		.catch(error => dispatch(errorLoadSmoothiesList(error)))
}
