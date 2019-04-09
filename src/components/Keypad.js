import React, {Component} from 'react'

export default class Keypad extends Component {

  handler = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input type="password" onKeyUp={this.handler}/>
    )
  }
}
// import React from 'react';
//
// class Keypad extends React.Component {
//
//   handleInputPassword = () => console.log('Entering password...')
//
//   render() {
//     return (
//       <div>
//         <input
//           type="password"
//           onKeyUp={this.handleInputPassword}
//         />
//       </div>
//     )
//   }
// }
//
// export default Keypad;
