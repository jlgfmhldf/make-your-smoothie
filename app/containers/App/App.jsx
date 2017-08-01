import React, { PureComponent } from 'react'
import {
	string,
	number,
	func,
	array,
	bool,
} from 'prop-types'
import noop from 'noop3'
import {
	Layout,
	Panel,
	Input,
	Snackbar,
} from 'react-toolbox'
import IngredientsSelect from '../../components/IngredientsSelect'
import SmoothiesList from '../../components/SmoothiesList'
import Loading from '../../components/Loading'
import s from './App.css'

export default class App extends PureComponent {
	static propTypes = {
		snackbarText: string,
		calories: number,
		smoothies: array,
		ingredients: array,
		selectedIngredients: array,
		isShowSnackbar: bool,
		loading: bool,
		selectIngredients: func,
		changeCaloriesValue: func,
		updateSmoothiesList: func,
		findIngredient: func,
		showSnackBar: func,
		hideSnackBar: func,
	}

	static defaultProps = {
		loading: false,
		ingredients: [],
		smoothies: [],
		selectedIngredients: [],
		selectIngredients: noop,
		changeCaloriesValue: noop,
		updateSmoothiesList: noop,
		findIngredient: noop,
		showSnackBar: noop,
		hideSnackBar: noop,
	}

	componentWillMount() {
		this.props.loadSmoothiesList()
	}

	handleSelectIngredients = ingredients => {
		const {
			calories,
			updateSmoothiesList,
			selectIngredients,
		} = this.props

		selectIngredients(ingredients)
		updateSmoothiesList(ingredients, calories)
	}

	handleChangeCaloriesValue = calories => {
		const {
			selectedIngredients,
			updateSmoothiesList,
			changeCaloriesValue,
		} = this.props

		changeCaloriesValue(calories)
		updateSmoothiesList(selectedIngredients, calories)
	}

	render() {
		const {
			snackbarText,
			calories,
			ingredients,
			smoothies,
			isShowSnackbar,
			loading,
			selectedIngredients,
			findIngredient,
			hideSnackBar,
		} = this.props

		const smoothiesLength = !!smoothies.length
		const selectedIngredientsLength = !!selectedIngredients.length

		return (
			<div className={s.App}>
				{loading && <Loading />}
				<Layout>
					<Panel>
						<h1 className={s.h1}>MAKE YOUR SMOOTHIE</h1>
						<p>
							Выберите продукты, которые есть у вас в холодильнике:
						</p>
						<IngredientsSelect
							value={selectedIngredients}
							list={ingredients}
							onSelect={this.handleSelectIngredients}
							onInput={findIngredient}
						/>
						<div className={s.caloriesInput}>
							<Input
								type='number'
								value={calories}
								label='Введите желаемую калорийность'
								maxLength={3}
								onChange={this.handleChangeCaloriesValue}
							/>
						</div>
						<h2>
							{smoothiesLength && selectedIngredientsLength && 'Результаты поиска'}
							{smoothiesLength && !selectedIngredientsLength && 'Все смузи'}
							{!smoothiesLength && selectedIngredientsLength && 'Ничего не найдено'}
						</h2>
						<SmoothiesList list={smoothies} />
					</Panel>
				</Layout>
				<Snackbar
					action='Dismiss'
					active={isShowSnackbar}
					label={snackbarText}
					timeout={1000}
					onTimeout={hideSnackBar}
					onClick={hideSnackBar}
					type='warning'
				/>
			</div>
		)
	}
}
