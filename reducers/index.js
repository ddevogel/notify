import { /*CONNECT,*/ RECEIVE, RESET } from '../actions/constants.js'

// import { getGames, getGame } from '../api/api.js'
//
const initialState = {
    lastNotification: {},
    notifications: []
}

function notificationsReducer(state = initialState, action){
  switch(action.type){
    // case CONNECT:
    //   return initialState;
    //   break;
    case RECEIVE:
      let newState = Object.assign({}, state, {
        lastNotification: action.notification
      })
      newState.notifications.push(action.notification)
      return newState
      break;
    // case DISPLAY:
    //   return Object.assign({}, state, {
    //     notifications: action.notifications
    //   })
    //   break;
    case RESET:
        return initialState
        break;
    default:
      console.log('Unknown action: ' + action.type)
      return initialState;
      break;
  }
}

export default notificationsReducer

//
// var mqtt = require('mqtt');
// var React = require('react');
//
// var host = 'ws://localhost:7000';
// var client = mqtt.connect(host);
//
// client.on('connect', function() {
//     client.subscribe("haw");
// });
