import { RECEIVE, RESET } from '../actions/constants.js'

function emptyState(){
  return {
      lastNotification: null,
      notifications: []
  }
}

function notificationsReducer(state = emptyState(), action){
  switch(action.type){
    case RECEIVE:
      let newState = Object.assign({}, state, {
        lastNotification: action.notification
      })
      newState.notifications.push(action.notification)
      return newState
      break;
    case RESET:
      return emptyState()
      break;
    default:
      console.log('Unknown action: ' + action.type)
      return emptyState()
      break;
  }
}

export default notificationsReducer
