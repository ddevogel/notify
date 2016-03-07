import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createConnectedClient } from '../api/broker.js'
import Notifications from '../components/Notifications.js'
import { receive, reset } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      let client = createConnectedClient(
        function(newMessage){
          dispatch(receive(newMessage))
        }
      )
    }
    // ,
    // onClick: () => {
    //   //console.log(s)
    //   // if(notifications && notifications.length > 0){
    //   //   console.log('g')
    //   //   alert(notifications.join('<br/>'))
    //   // }
    //   //dispatch(reset())
    // }
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(Notifications)

export default AppContainer

//state => {return {'notifications': state.notifications}}, mapDispatchToProps)(Notifications)
