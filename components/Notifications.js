import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

class Notifications extends Component {
  componentDidMount(){
    this.props.onMount()
  }
  show(){
    if(this.props.notifications && this.props.notifications.length > 0){
      alert(this.props.notifications.join('<br/>'))
    }
  }
  render(){
    return (
      <div>
        <Button bsSize="large" onClick={this.show()}>
          <Glyphicon glyph="star"/>{this.props.notifications
            ? this.props.notifications.length.toString() + ' new notification(s)'
            : 'No notifications'}
        </Button>
      </div>
    )
  }
}

export default Notifications
