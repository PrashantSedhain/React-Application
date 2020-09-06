import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Prashant", age: 23 },
      { id: "dscds", name: "Abit", age: 22 },
      { id: "cadcxs", name: "Anish", age: 33 },
    ],
    showPersons: false,
  };

  switchNameHandler = () => {
    // DON'T MUTATE DIRECTLY LIKE THIS!
    // this.state.persons[0].name = "Prashant Sedhain";

    this.setState({
      persons: [
        { id: "asdf", name: "Prashant Sedhain", age: 23 },
        { id: "dscds", name: "Abit", age: 22 },
        { id: "cadcxs", name: "Anish", age: 33 },
      ],
      showPersons: !this.state.showPersons,
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // Can be done this too:
    // Array in java is mutable
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let view = <div>I am empty</div>;

    if (this.state.showPersons) {
      view = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    let classes = "";

    if (this.state.persons.length <= 2) {
      classes = "red";
    }

    if (this.state.persons.length <= 1) {
      classes += classes + " bold";
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes}> Hi, I am a react app</h1>
          <button style={style} onClick={this.switchNameHandler}>
            Switch Name
          </button>
          {view}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
