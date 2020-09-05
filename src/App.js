import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Prashant", age: 23 },
      { name: "Abit", age: 22 },
      { name: "Anish", age: 33 },
    ],
  };

  switchNameHandler = () => {
    console.log("Was clicked!!!");

    // DON'T MUTATE DIRECTLY LIKE THIS!
    // this.state.persons[0].name = "Prashant Sedhain";

    this.setState({
      persons: [
        { name: "Prashant Sedhain ", age: 23 },
        { name: "Abit", age: 22 },
        { name: "Anish", age: 33 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: "Abit", age: 22 },
        { name: "Anish", age: 33 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>

        <Person
          changed={this.nameChangedHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
