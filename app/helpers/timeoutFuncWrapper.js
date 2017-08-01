const timeoutFuncWrapper = func => {
	func()
	clearTimeout(timeoutFuncWrapper)
}

export default timeoutFuncWrapper
