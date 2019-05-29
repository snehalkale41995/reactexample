import React from "react";
import axios from "axios";
import { Button } from "reactstrap";
import _ from "lodash";
import "../../App.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import "./userList.css";


export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    this.setState({ users: this.props.users });
  };

  deleteButton(Id) {
    return <Button onClick={() => this.deleteUser(Id)}>Delete</Button>;
  }

  editButton(Id) {
    return <Button onClick={() => this.deleteUser(Id)}>Edit</Button>;
  }

  deleteUser(Id) {
    console.log("Id", Id)
    let users = [...this.state.users];
    let userList = _.filter(users, function(user) {
      return user.Id != Id;
    });
    this.setState({ users: userList });
  }

  displayUsers = () => {
    return (
      <div className="divClass">
        <table className="table">
          <tr className="tr">
            <th className="th">Id</th>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Contact</th>
            <th className="th">Address</th>
            <th className="th">Designation</th>
            <th className="th">Edit</th>
            <th className="th">Delete</th>
          </tr>
          <tbody>
            {this.state.users.map(function(item, key) {
              return (
                <tr className="tr" key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Contact}</td>
                  <td>{item.Address}</td>
                  <td>{item.Designation}</td>
                  <td>{this.editButton(item.Id)}</td>
                  <td>{this.deleteButton(item.Id)}</td>
                </tr>
              );
            }, this)}
          </tbody>
        </table>
      </div>
    );
  };

  updateUser = () => {};
  render() {
    return (
      <div>
        <div> {this.displayUsers()}</div>
      </div>
    );
  }
}
