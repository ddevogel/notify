import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

class Notifications extends Component {

  componentDidMount(){
    this.props.onMount()
  }
  show(){
    console.log
    if(this.props.notifications && this.props.notifications.length > 0){
      alert(this.props.notifications.join('\n'))
    }
  }
  render(){
    let style = {
      display: (this.props.notifications && this.props.notifications.length > 0) ? 'block' : 'none'
    }
    return (
      <div>
        <Button bsSize="large" style={style}
          onClick={this.props.onReset}>Clear notifications</Button>
        <ul>
          {this.props.notifications.map(function(notification){
            return <li key={notification}>{notification}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Notifications

//display:{(this.props.notifications && this.props.notifications.length > 0) ? block : none}
// <Button bsSize="large" onClick={this.show(this.props.notifications)}>
//   <Glyphicon glyph="star"/>{this.props.notifications
//     ? this.props.notifications.length.toString() + ' new notification(s)'
//     : 'No notifications'}
// </Button>
