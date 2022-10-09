//* начальное состояние
const initialState = {counter: 0, foo: 'bar', number: 42};

//* reducer
// чистая функция зависит от state и action,
// сохраняется принцип иммутабешьности как при работе со стейтом в компоненте
const reducer = (state = initialState, action) => {
	console.log(state)
	switch (action.type) {
		case  'INC':
			return {...state, counter: state.counter + 1};
		case  'DEC':
			return {...state, counter: state.counter - 1};
		case 'RND':
			return {...state, counter: state.counter + action.payload};
		case 'DIV':
			return {...state, number: state.number / 2};
		case 'MULT':
			return {...state, number: state.number * 2};
		case 'CONCAT':
			return {...state, foo: (state.foo === 'foo') ? 'foobar' : 'foo'};
		default:
			return state;
	}
}

export default reducer;