import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</a>
      </td>
    </tr>;
}

function ExerciseList() {
  const [deleteExercise, setDeleteExercise] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exercise/")
      .then((res) => {
        setDeleteExercise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleDelete = (id) => {
    axios.delete("http://localhost:5000/api/exercise/" + id).then((res) => {
      console.log(res.data);
      setDeleteExercise(deleteExercise.filter((el) => el._id !== id));
    });
  };

  const exerciseList = () => {
    return deleteExercise.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
