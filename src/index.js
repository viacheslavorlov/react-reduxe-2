import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore, bindActionCreators} from 'redux'
import * as actions from "./actions";
import reducer from "./reducer";


console.log('Hello');
//* создание хранилища
let store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

//* функция обработки результата в элементе
const update = () => {
	//* получение стейта из хранилища
	document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }
// const action = () => bindActionCreators({increment: inc, decrement: dec, random: rnd}, dispatch);

const {inc, rnd, dec} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


document.getElementById('inc').addEventListener('click', inc);
//* вызов dispatch в который передается action-creator функция inc() которая возвращает объект action;
// * action - объект с обязательным полем type;

document.getElementById('dec').addEventListener('click', dec)
//* вызов dispatch в который передается action;


document.getElementById('rnd').addEventListener('click', () => {
	console.log('rnd btn')
	const value = Math.floor(Math.random() * 10)
	rnd(value); //* вызов dispatch в который передается action;
})

console.log(actions);

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<>

		</>
	</React.StrictMode>
);

