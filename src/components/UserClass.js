import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default Name",
        location: "Default Location",
        avatar_url: "dummy_url",
        twitter_username: "Default Twitter",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Compoent Did Mount");
    const res = await fetch("https://api.github.com/users/rushi812");
    const data = await res.json();
    // console.log(data);
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    // console.log(this.props.name + " Child Compoent Did Update");
  }

  componentWillUnmount() {
    // console.log(this.props.name + " Child Compoent Will Unmount");
  }

  render() {
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;

    // console.log(this.props.name + " Child Render");
    return (
      <div className="user">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Twitter: @{twitter_username}</h2>
      </div>
    );
  }
}

export default UserClass;
