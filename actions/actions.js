import { RECEIVE, RESET } from './constants.js'

export function receive(notification){
  return {
    type: RECEIVE,
    notification: notification
  }
}

export function reset(){
  return {
    type: RESET,
    lastNotification: '',
    notifications: []
  }
}
