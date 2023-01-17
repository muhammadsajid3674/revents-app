import React, { Component } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from './TestActionCreators';

// Class Component
class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <button onClick={this.props.decrementCount}>-</button>
        <p>Initial State is: {this.props.state}</p>
        <button onClick={this.props.incrementCount}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.test.data
}); // State Selector

const mapDispatchToProps = {
  incrementCount,
  decrementCount
} // Actions Dispatch

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);


// // Functional Component
// const TestComponent = () => {
//   const state = useSelector(state => state);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Test Component</h1>
//       <button onClick={() => dispatch(decrementCount())}>-</button>
//       <p>Initial State is: {state.data}</p>
//       <button onClick={() => dispatch(incrementCount())}>+</button>
//     </div>
//   )
// }

// export default TestComponent