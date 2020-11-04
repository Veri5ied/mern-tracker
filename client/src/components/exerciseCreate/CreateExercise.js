import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateExercise() {
  const [username, setUsername] = useState({});
  const [description, setDescription] = useState({});
  const [duration, setDuration] = useState({});
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    axios
      .post("http://localhost:5000/api/exercise/add", exercise)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })

    window.location = "/";
  };
  
  return (
    <div>
      <h3>Create New Exercise</h3>
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
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration(in mins): </label>
          <input
            type="text"
            name="duration"
            onChange={(e) => setDuration(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise"
            className="btn btn-success"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
