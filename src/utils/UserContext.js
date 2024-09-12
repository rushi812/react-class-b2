import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "John Doe",
  dummy: "Some random dummy data!",
});

export default UserContext;
