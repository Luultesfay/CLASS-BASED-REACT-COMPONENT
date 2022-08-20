///migrating from functional compon to class component
import { Component } from "react"; //component is importd from react

import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class Users extends Component {
  constructor() {
    super(); //super should be at the top all the time
    this.state = { showUsers: true, more: "test" }; //state should be objects in class components and the name state is pre-defined or given by react not us
  }
  toggleUsersHandler() {
    //setState method is used to updtae the state not replaced it
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );

// return (
//   <div className={classes.users}>
//     <button onClick={toggleUsersHandler}>
//       {showUsers ? 'Hide' : 'Show'} Users
//     </button>
//     {showUsers && usersList}
//   </div>
// );
//};

export default Users;
