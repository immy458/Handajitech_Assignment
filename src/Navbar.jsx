import React, { Component } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="nav">{this.props.title}</div>
      </>
    );
  }
}

export default Navbar;
