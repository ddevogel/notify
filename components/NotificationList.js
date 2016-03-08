import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class NotificationList extends Component {

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

export default NotificationList
