import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';



// const Counter = ({counter, inc, dec, rnd}) => {
//
// 	return (
// 		<div>
// 			<h1>{counter}</h1>
// 			<button onClick={inc} className="btn btn-danger">increment</button>
// 			<button onClick={dec} className="btn btn-dark">decrement</button>
// 			<button onClick={rnd} className="btn btn-info">random</button>
// 		</div>
// 	);
// };
//
// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.value,
// 	}
// }

class Counter extends Component{

	render() {
		const {counter, inc, dec, rnd} = this.props;
		return (
			<div>
				<h1>{counter}</h1>
				<button onClick={inc} className="btn btn-danger">increment</button>
				<button onClick={dec} className="btn btn-dark">decrement</button>
				<button onClick={rnd} className="btn btn-info">random</button>
			</div>
		);
	}


}

const mapStateToProps = (state) => {
	return {
		counter: state.value,
	}
}

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter);
