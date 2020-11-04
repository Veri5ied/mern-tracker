import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import EditExercise from "./components/exerciseEdit/EditExercise";
import ExerciseList from "./components/exerciseList/ExerciseList";
import CreateExercise from "./components/exerciseCreate/CreateExercise";
import CreateUser from "./components/createUser/CreateUser";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
