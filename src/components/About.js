import React from "react";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Us!</h1>
        <h2>Welcome to About Us Page!</h2>
        <UserContext.Consumer>
          {(data) => {
            return (
              <h1 className="text-red-700 text-2xl font-bold">
                {data.loggedInUser}
              </h1>
            );
          }}
        </UserContext.Consumer>
        <UserClass name="Rushiraj Class" />
      </div>
    );
  }
}

export default About;
