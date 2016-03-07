import { /*CONNECT,*/ RECEIVE/*, DISPLAY*/, RESET } from './constants.js'
//import { getGames, getGame } from '../api/api.js'

// export function connectToBroker(){
//   return
  // return dispatch => {
  //   getGames(JSON.stringify(terms), function(games){
  //     dispatch({type: RECEIVE_SEARCH_RESULTS, terms, games});
  //   });
  // };
//}

export function receive(notification){
  return {
    type: RECEIVE,
    notification: notification
  }
}

// export function display(notifications){
//   return {
//     type: RECEIVE,
//     notifications
//   }
// }

export function reset(){
  return {
    type: RESET,
    lastNotification: '',
    notifications: []
  }
}
