import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore} from 'redux'; //? для создания хранилища redux
import {Provider} from "react-redux"; //? для создания провайдера
import reducer from "./reducer"; //? для создания хранилища  - передаётся аргументом в createStore(...)
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";

//* создание хранилища
export let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/*<>*/}
		{/*	<Counter counter={getState().value}*/}
		{/*	         inc={inc}*/}
		{/*	         dec={dec}*/}
		{/*	         rnd={() => {*/}
		{/*		         const value = Math.floor(Math.random() * 10)*/}
		{/*		         rnd(value)*/}
		{/*	         }}/>*/}
		{/*</>*/}
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

