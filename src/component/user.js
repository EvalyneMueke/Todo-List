import React from 'react';
//In React, constructors are mainly used for two purposes: 
//It used for initializing the local state of the component by assigning an object to this. state. 
//It used for binding event handler methods that occur in your component.
//Binding => is an inbuilt method in React that is used to pass the data as an argument to the function of a class based component
//Super() it is used to call the constructor of the parent class

class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        hobbies: []
      };
    }
    render() {
      return (
        <div>
            <h1>MY TODO LIST</h1>
          <h1>User Details</h1>
          <form>
          <div>
            
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={event => this.setState({ firstName: event.target.value })}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={event => this.setState({ lastName: event.target.value })}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
          <div>
            <label>Hobbies:</label>
            <input
              type="text"
              value={this.state.hobbies}
              onChange={event => this.setState({ hobbies: event.target.value })}
            />
          </div>
          </form>
        </div>

        
      );
    }
  }
  export default User;