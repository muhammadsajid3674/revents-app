import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ThemeBtnPri } from '../../components/button/ThemeBtn';
import { incrementAsync, decrementAsync } from './TestActionCreators';
import { openModal } from '../Modals/ModalActions';
import { openToastr } from '../toastr/toastrActions';

// Class Component
class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <div style={{ display: 'block' }}>
          <p>Initial State is: {this.props.state}</p>
          <ThemeBtnPri isLoading={this.props.elementName === 'increment' && this.props.loading} onClick={() => this.props.incrementAsync('increment')} color="success" label="Increment" />
          <ThemeBtnPri isLoading={this.props.elementName === 'decrement' && this.props.loading} onClick={() => this.props.decrementAsync('decrement')} color="error" label="Decrement" />
        </div>
        <ThemeBtnPri label='Open Modal' onClick={() => {
          this.props.openModal('TestModal', { data: 42 })
        }} />
        <ThemeBtnPri label='Open toastr' onClick={() => {
          this.props.openToastr('Toastr', { severity: 'success', message: 'Event is Created successfully' })
        }} />
        <ThemeBtnPri label='Open toastr Error' onClick={() => {
          this.props.openToastr('Toastr', { severity: 'error', message: 'Event is not created Created successfully' })
        }} />
        {/* <PlacesInput /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.test.data,
  loading: state.async.loading,
  elementName: state.async.elementName
}); // State Selector

const mapDispatchToProps = {
  incrementAsync,
  decrementAsync,
  openModal,
  openToastr
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