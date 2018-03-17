import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { API_URL } from './../Constants/constants';

class Ping extends Component{
  constructor(props){
    super(props);
    this.state={
      message: ''
    };
  };

  render(){
    const {isAuthenticated} = this.props.auth;
    const {message} = this.state;
    return (
          <div className="container">
            <h1>Make a Call to the Server</h1>
            {
              !isAuthenticated() 
                ? <p>Log in to call a private (secured) server endpoint.</p>
                : <span />
            }
            <Button bsStyle="primary" onClick={this.ping.bind(this)}>Ping</Button>
            {' '}
            <Button bsStyle="primary" onClick={this.securedPing.bind(this)}>Call Private</Button>
            <h2>{message}</h2>
          </div>
        );
  };

  ping() {
   axios.get(`${API_URL}/public`)
     .then(response => this.setState({ message: response.data.message }))
     .catch(error => this.setState({ message: error.message }));
 };

 securedPing() {
   const { getAccessToken } = this.props.auth;
   const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
   axios.get(`${API_URL}/private`, { headers })
     .then(response => this.setState({ message: response.data.message }))
     .catch(error => this.setState({ message: error.message }));
 };
};

export default Ping;
