import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const userElements = users.map((user) => {
    return (
      <div className="box">
        <p>{user.name}</p>
        <p>{user.last_name}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Users: </h1>
      {userElements}
    </div>
  );
}

export default App;
