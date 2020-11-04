import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
    };
    axios
      .post("http://localhost:5000/api/auth/add", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-success" />
      </div>
    </form>
  );
}

export default CreateUser;
