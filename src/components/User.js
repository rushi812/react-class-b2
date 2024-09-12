import { useState, useEffect } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = async () => {
    // await fetch(https://api.github.com/users/rushi812)
  };

  // Render => Shimmer UI (empty data) => API data => Re-Render

  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Twitter: @rushi123</h2>
    </div>
  );
};

export default User;
