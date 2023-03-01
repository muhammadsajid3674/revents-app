
import { CircularProgress, Grid } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from '../features/Events/EventList/EventList'
import { getEventsForDashboard } from '../features/Events/EventActions';
import BackdropLoader from '../components/loading/MuiBackdrop';
import EventActivity from '../features/Events/EventActivity/EventActivity';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDashboard extends Component {
  state = {
    moreEvents: false,
    initialLoading: true,
    loadEvents: []
  }

  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();
    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        initialLoading: false
      })
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.events !== prevProps.events) {
      this.setState({
        loadEvents: [...this.state.loadEvents, ...this.props.events]
      })
    }
  }

  getNextEvent = async () => {
    const { events } = this.props;
    const lastEvent = events && events[events.length - 1];
    const next = await this.props.getEventsForDashboard(lastEvent);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreEvents: false
      })
    }
  }

  render() {
    if (this.state.initialLoading) return <BackdropLoader />
    return (
      <Grid container spacing={2}>
        <Grid item md={7}>
          <EventList events={this.state.loadEvents} isLoading={this.props.loading} nextEvent={this.getNextEvent} moreEvents={this.state.moreEvents} />
        </Grid>
        <Grid item md={5}>
          <EventActivity />
        </Grid>
        <Grid item md={7} textAlign='center'>
          {this.props.loading && <CircularProgress />}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    events: state.events,
    loading: state.async.loading
  }
}

const mapDispatchToProp = {
  getEventsForDashboard
}

export default compose(firestoreConnect([{ collection: 'events' }]), connect(mapStateToProp, mapDispatchToProp))(EventDashboard);

