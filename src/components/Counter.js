import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {inc, rnd, dec} from '../actions';


const Counter = () => {

	const {counter} = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={() => dispatch(inc())} className="btn btn-danger">increment</button>
			<button onClick={() => dispatch(dec())} className="btn btn-dark">decrement</button>
			<button onClick={() => dispatch(rnd())} className="btn btn-info">random</button>
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.value,
// 	}
// }

export default Counter;
//* connect on class component
// class Counter extends Component{
//
// 	render() {
// 		const {counter, inc, dec, rnd} = this.props;
// 		return (
// 			<div>
// 				<h1>{counter}</h1>
// 				<button onClick={inc} className="btn btn-danger">increment</button>
// 				<button onClick={dec} className="btn btn-dark">decrement</button>
// 				<button onClick={rnd} className="btn btn-info">random</button>
// 			</div>
// 		);
// 	}
// }
//
// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.value,
// 	}
// }
//
// // const mapDispatchToProps = dispatch => {
// // 	return bindActionCreators(actions, dispatch)
// // }
//
// export default connect(mapStateToProps, actions)(Counter);
