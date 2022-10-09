import React from 'react';
import Counter from "./Counter";
import * as actions from "../actions"
import {connect} from "react-redux";


const App = (props) => {
	const {foo, number, div, concat, multiply} = props;
	return (
		<>
			<div>{foo}</div>
			<div>{number}</div>
			<button className="btn btn-dark btn-outline-info" onClick={concat}>concat</button>
			<button className="btn btn-dark btn-outline-success" onClick={div}>divide</button>
			<button className="btn btn-dark btn-outline-warning" onClick={multiply}>multiply</button>
			<Counter/>
		</>

	)
};

const mapStateToProps = (state) => {
	return {
		foo: state.foo,
		number: state.number
	}
}



export default connect(mapStateToProps, actions)(App);
