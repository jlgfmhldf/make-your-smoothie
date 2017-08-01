import { asc } from 'alpha-sort'
import { uniq } from 'ramda'

const getIngredients = list => {
	const listOfArrays = list.map(({ ingredients }) => ingredients)
	const newList = Array.prototype.concat.apply([], listOfArrays)
	const result = uniq(newList).sort(asc)

	return result
}

export default getIngredients
