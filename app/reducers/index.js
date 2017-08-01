import {
	SELECT_INGREDIENTS,
	FIND_INGREDIENT,
	CHANGE_CALORIES_VALUE,
	UPDATE_SMOOTHIES_LIST,
	HIDE_SNACKBAR,
	LOAD_SMOOTHIES_LIST_SUCCESS,
	LOAD_SMOOTHIES_LIST_REQUEST,
} from '../constants/actions'

import {
	ingredientNotFound,
} from '../constants/texts'

import getIngredients from '../helpers/getIngredients'

function arrayContainsArray (superset, subset) {
	return subset.every(function (value) {
		return (superset.indexOf(value) >= 0)
	})
}

const findSmoothies = (
	smoothies = [],
	ingredients = []
) => {
	let resultArray = []

	smoothies.forEach(item => {
		const { ingredients: itemIngredients } = item

		const smoothieContainIngredients = arrayContainsArray(itemIngredients, ingredients)

		if (smoothieContainIngredients) {
			resultArray.push(item)
		}
	})

	return resultArray
}

const filterByCalories = calories =>
	item => item.nutrition_value.calories < calories

const defaultState = {
	selectedIngredients: [],
	smoothies: [],
	findedSmoothies: [],
	ingredients: [],
	calories: undefined,
	ingredientIsNotFound: false,
	snackbar: {
		show: false,
		text: undefined,
	},
	isShowLoader: false,
}

/* eslint-disable no-unused-vars */
export default function (state = defaultState, { type, payload }) {
	switch (type) {

	case UPDATE_SMOOTHIES_LIST: {
		const { ingredients, calories } = payload
		const { smoothies } = state

		if (!ingredients.length) {
			return {
				...state,
				findedSmoothies: [],
			}
		}

		let newSmoothiesList = findSmoothies(smoothies, ingredients)

		if (calories) {
			newSmoothiesList = newSmoothiesList.filter(filterByCalories(calories))
		}

		if (!newSmoothiesList.length) {
			return {
				...state,
				snackbar: {
					show: true,
					text: 'Ничего не найдено',
				},
				findedSmoothies: [],
			}
		}

		return {
			...state,
			findedSmoothies: newSmoothiesList,
		}
	}

	case SELECT_INGREDIENTS: {
		const { ingredients } = payload

		return {
			...state,
			selectedIngredients: ingredients,
		}
	}


	case FIND_INGREDIENT: {
		const { value } = payload
		const { ingredients, snackbar } = state

		const ingredientIsNotFound = ingredients
			.map(item => item.indexOf(value) > 0)
			.includes(true)

		return {
			...state,
			snackbar: {
				text: ingredientNotFound,
				show: !ingredientIsNotFound,
			},
		}
	}

	case CHANGE_CALORIES_VALUE: {
		return {
			...state,
			calories: payload.value,
		}
	}

	case HIDE_SNACKBAR: {
		return {
			...state,
			snackbar: {
				text: undefined,
				show: false,
			},
		}
	}

	case LOAD_SMOOTHIES_LIST_REQUEST: {

		return {
			...state,
			loading: true,
		}
	}

	case LOAD_SMOOTHIES_LIST_SUCCESS: {
		const {smoothies} = payload

		return {
			...state,
			smoothies,
			ingredients: getIngredients(smoothies),
			loading: false,
		}
	}

	default:
		return {
			...state
		}
	}
}
