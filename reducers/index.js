import { RECEIVE, RESET, OPEN_MODAL, CLOSE_MODAL } from '../actions/constants.js'

function emptyState(){
  return {
      lastNotification: null,
      notifications: [],
      modalIsOpen: false
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
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: action.modalIsOpen
      })
      break;
    default:
      console.log('Unknown action: ' + action.type)
      return emptyState()
      break;
  }
}

export default notificationsReducer
