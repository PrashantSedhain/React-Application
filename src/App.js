import React, { Component } from "react";
import dynamicClasses from "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Prashant", age: 23 },
      { id: "dscds", name: "Abit", age: 22 },
      { id: "cadcxs", name: "Anish", age: 33 },
    ],
    showPersons: false,
    viewText: "Show",
  };

  switchNameHandler = () => {
    // DON'T MUTATE DIRECTLY LIKE THIS!
    // this.state.persons[0].name = "Prashant Sedhain";
    let vText = "";
    if (this.state.viewText === "Hide") {
      vText = "Show";
    } else {
      vText = "Hide";
    }
    this.setState({
      persons: [
        { id: "asdf", name: "Prashant Sedhain", age: 23 },
        { id: "dscds", name: "Abit", age: 22 },
        { id: "cadcxs", name: "Anish", age: 33 },
      ],
      showPersons: !this.state.showPersons,
      viewText: vText,
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

  // const p = [...this.state.persons];
  // p.viewText = "Hide";
  // this.setState({ persons: p });
  test = () => {
    const p = [...this.state.persons];
    p.viewText = "Show";
    this.setState({ persons: p });
  };
  render() {
    let view = "";

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
      <div className={dynamicClasses.App}>
        <h1> Hi, I am a react app</h1>
        <button
          className={dynamicClasses.button}
          onClick={this.switchNameHandler}
        >
          {this.state.viewText}
        </button>
        {view}
      </div>
    );
  }
}

export default App;
