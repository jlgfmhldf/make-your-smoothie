const path = require('path')
const fs = require('fs')

const componentExists = componentName => {
	return fs.readdirSync(path.join(__dirname, '../../app/components/')).indexOf(componentName) >= 0
}

module.exports = componentExists
