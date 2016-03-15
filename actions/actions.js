import { RECEIVE, RESET, OPEN_MODAL, CLOSE_MODAL } from './constants.js'

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

export function openModal(){
  return {
    type: OPEN_MODAL,
    modalIsOpen: true
  }
}

export function closeModal(){
  return {
    type: CLOSE_MODAL,
    modalIsOpen: false
  }
}
