import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component {

	increment = () => {
		this.props.dispatch({ type: "INCREMENT" })
	}

	decrement = () => {
		this.props.dispatch({ type: "DECREMENT" })
	}

	reset = () => {
		this.props.dispatch({ type: "RESET" })
	}

	render() {
		return (
			<div className="counter">
				<h2>Counter Component</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					<span className="count">{this.props.count}</span>
					<button onClick={this.increment}>+</button>
				</div>
				<div><button onClick={this.reset}>Reset</button></div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	count: state.count
})

export default connect(mapStateToProps)(Counter)