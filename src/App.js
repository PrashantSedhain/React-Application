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
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    console.log(personIndex);
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
      backgroundColor: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        {this.state.persons.map((elem, index) => {
          return (
            <Person
              changed={(event) => this.nameChangedHandler(event, elem.id)}
              name={elem.name}
              age={elem.age}
              key={elem.id}
              click={() => this.deletePersonHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
