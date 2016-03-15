import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createConnectedClient } from '../api/broker.js'
import Notifications from '../components/Notifications.js'
import { receive, reset, openModal, closeModal } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      let client = createConnectedClient(
        function(newMessage){
          dispatch(receive(newMessage))
        }
      )
    },
    onReset: (notifications) => {
      dispatch(reset())
    },
    onShowModal: () => {
      dispatch(openModal())
    },
    onHideModal: () => {
      dispatch(closeModal())
    }
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(Notifications)

export default AppContainer
