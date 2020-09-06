import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
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
    };
    let view = <div>I am empty</div>;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
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
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        {view}
      </div>
    );
  }
}

export default App;
