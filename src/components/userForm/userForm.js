import React from "react";
import UserList from "../userList/userList";
import "./userForm.css";
import { Container, Row, Col, Input } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
const users = require("../../users.json");

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        Id: "",
        Name: "",
        Email: "",
        Contact: "",
        Address: "pune",
        Designation: "employee"
      },
      nameRequired: false,
      emailRequired: false,
      contactRequired: false
    };
  }

  render() {
    let user = { ...this.state.user };
    return (
      <div>
    </div>
    );
  }
}

export default UserForm;
