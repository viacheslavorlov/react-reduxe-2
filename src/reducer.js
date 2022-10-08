//* начальное состояние
const initialState = {value: 0, foo: 'bar'};

//* reducer
// чистая функция зависит от state и action,
// сохраняется принцип иммутабешьности как при работе со стейтом в компоненте
const reducer = (state = initialState, action) => {
	console.log(state)
	switch (action.type) {
		case  'INC':
			return {...state, value: state.value + 1};
		case  'DEC':
			return {...state, value: state.value - 1};
		case 'RND':
			return {...state, value: state.value + action.payload};
		default:
			return state;
	}
}

export default reducer;