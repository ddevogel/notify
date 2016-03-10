import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import Modal from 'react-modal'

class Notifications extends Component {

  constructor() {
   super();
   this.state = {modalIsOpen: false}
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal(clear) {
    this.setState({modalIsOpen: false});
    if(clear){
      clear()
    }
  }

  componentDidMount(){
    this.props.onMount()
  }

  render(){
    const count = this.props.notifications ? this.props.notifications.length : 0
    let style = {
        display: count > 0 ? 'block' : 'none'
    }
    const customStyles = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'rgba(255, 255, 255, 0.75)'
        },
        content : {
          position                   : 'absolute',
          top                        : '50px',
          left                       : '50px',
          right                      : '50px',
          bottom                     : '50px',
          border                     : '1px solid #ccc',
          background                 : '#fff',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '4px',
          outline                    : 'none',
          padding                    : '20px'
        }
      }

    return (
      <div style={style} className="round-button">
        <div className="round-button-circle">
          <a href="#" onClick={() => this.openModal()} className="round-button">{count}</a>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          style={customStyles} >

          <h2>Notification List</h2>
          <div>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.notifications.map((notification, index) =>
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{notification}</td>
                    </tr>
                )
              }
              </tbody>
          </Table>
          </div>
          <div>
            <span className="buttonBar">
              <Button onClick={() => this.closeModal(this.props.onReset)}>Clear</Button>
              <Button onClick={() => this.closeModal()}>Close</Button>
            </span>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Notifications
//
// <ul>
//   {this.props.notifications.map(function(notification){
//     return <li key={notification}>{notification}</li>
//   })}
// </ul>
// let style = {
//     display: (this.props.count && this.props.count > 0) ? 'block' : 'none'
// }


// <Button bsSize="large" style={style}
//   onClick={this.props.onReset}>{this.props.count}</Button>
//
// <ul>
//   {this.props.notifications.map(function(notification){
//     return <li key={notification}>{notification}</li>
//   })}
// </ul>


// content : {
//   top                   : '50%',
//   left                  : '50%',
//   right                 : 'auto',
//   bottom                : 'auto',
//   marginRight           : '-50%',
//   transform             : 'translate(-50%, -50%)'
// }
