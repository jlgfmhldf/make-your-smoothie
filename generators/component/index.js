const path = require('path')
const componentExists = require('../utils/componentExists')

module.exports = {
	description: `Generator for component`,
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What should it be called?',
			validate: value => {
				if ((/.+/).test(value)) {
					return componentExists(value)
						? 'Component with this name already exists'
						: true
				}

				return 'The name is required'
			},
		},
	],
	actions: () => ([
		{
			type: 'add',
			path: `./app/components/{{properCase name}}/index.js`,
			templateFile: './index.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: `./app/components/{{properCase name}}/{{properCase name}}.jsx`,
			templateFile: './Component.jsx.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: `./app/components/{{properCase name}}/{{properCase name}}.css`,
			templateFile: './Component.css.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: `./app/components/{{properCase name}}/{{properCase name}}.stories.js`,
			templateFile: './Component.stories.js.hbs',
			abortOnFail: true,
		},
		// {
		// 	type: 'add',
		// 	path: `./app/components/{{properCase name}}/{{properCase name}}.test.js`,
		// 	templateFile: './test.js.hbs',
		// 	abortOnFail: true,
		// },
	].map(item => {
		item.templateFile = path.resolve(__dirname, item.templateFile)
		return item
	})),
}
