import { Component } from "react"; //we import Component from react
import classes from "./User.module.css";
//CLASS BASED REACT COMPONENETS
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
//FUNCTION BASED REACT  COMPONENTS
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
