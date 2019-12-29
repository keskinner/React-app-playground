import React from 'react';

class TheDate extends React.Component {
    render() {
      console.log(this.state)
      return (
        <div>{this.state.hello}</div>
      )
    }
  }
  
  export default TheDate