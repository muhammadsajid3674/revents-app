import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ThemeBtnPri } from '../../components/button/ThemeBtn';
import { incrementAsync, decrementAsync } from './TestActionCreators';
import { openModal } from '../Modals/ModalActions';
import { openToastr } from '../toastr/toastrActions';
import firebase from '../../config/Firebase/FirebaseConfig'
import { Typography } from '@mui/material';

// Class Component
class TestComponent extends Component {

  handleTestUpdateProfile = async () => {
    const firestore = firebase.firestore();
    // doc = diana's userUid
    let userDocRef = await firestore
      .collection('users')
      .doc('wgTrGhCTtVRk2CmMycQ9KEWVY9X2');
    try {
      await userDocRef.update({ displayName: 'testing' });
      this.props.openToastr('Toastr', { severity: 'success', message: 'Success' })
    } catch (error) {
      console.log(error);
      this.props.openToastr('Toastr', { severity: 'error', message: 'Computer says no' })
    }
  };

  handleCreateTestEvent = async () => {
    const firestore = firebase.firestore();
    let eventDocRef = await firestore.collection('events').doc('DELETEME');
    try {
      await eventDocRef.set({
        title: 'DELETEME'
      });
      this.props.openToastr('Toastr', { severity: 'success', message: 'Success' })
    } catch (error) {
      console.log(error);
      this.props.openToastr('Toastr', { severity: 'error', message: 'Computer says no' })
    }
  };

  handleTestJoinEvent = async () => {
    const firestore = firebase.firestore();
    let eventDocRef = await firestore.collection('events').doc('DELETEME');
    const attendee = {
      photoURL: '/assets/user.png',
      displayName: 'Testing'
    };
    try {
      await eventDocRef.update({
        [`attendees.wgTrGhCTtVRk2CmMycQ9KEWVY9X2`]: attendee
      });
      this.props.openToastr('Toastr', { severity: 'success', message: 'Success' })
    } catch (error) {
      console.log(error);
      this.props.openToastr('Toastr', { severity: 'error', message: 'Computer says no' })
    }
  };

  handleTestCancelGoingToEvent = async () => {
    const firestore = firebase.firestore();
    let eventDocRef = await firestore.collection('events').doc('DELETEME');
    try {
      await eventDocRef.update({
        [`attendees.wgTrGhCTtVRk2CmMycQ9KEWVY9X2`]: firebase.firestore.FieldValue.delete()
      });
      this.props.openToastr('Toastr', { severity: 'success', message: 'Success' })
    } catch (error) {
      console.log(error);
      this.props.openToastr('Toastr', { severity: 'error', message: 'Computer says no' })
    }

  };

  handleTestChangeAttendeePhotoInEvent = async () => {
    const firestore = firebase.firestore();
    let eventDocRef = await firestore.collection('events').doc('DELETEME');
    try {
      await eventDocRef.update({
        [`attendees.wgTrGhCTtVRk2CmMycQ9KEWVY9X2.photoURL`]: 'testing123.jpg'
      });
      this.props.openToastr('Toastr', { severity: 'success', message: 'Success' })
    } catch (error) {
      console.log(error);
      this.props.openToastr('Toastr', { severity: 'error', message: 'Computer says no' })
    }
  };

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
        <br />
        <br />
        <br />
        <Typography variant='h2'>Permissions tests</Typography>
        <ThemeBtnPri
          onClick={this.handleCreateTestEvent}
          color='themeDefault'
          label='Test create event - should fail if anon'
        />
        <br/>
        <ThemeBtnPri
          onClick={this.handleTestUpdateProfile}
          color='google'
          label='Test update dianas profile - should fail if anon/not diana - should succeed if diana'
        />
        <ThemeBtnPri
          onClick={this.handleTestJoinEvent}
          color='facebook'
          label='Test joining an event - should fail if anon/not diana - should succeed if diana'
        />
        <ThemeBtnPri
          onClick={this.handleTestCancelGoingToEvent}
          color='success'
          label='Test cancelling attendance to an event - should fail if anon/not diana - should succeed if diana'
        />
        <ThemeBtnPri
          onClick={this.handleTestChangeAttendeePhotoInEvent}
          color='themeOrange'
          label='Test changing photo for event attendee - should fail if anon/not diana - should succeed if diana'
        />
        <br />
        <br />
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