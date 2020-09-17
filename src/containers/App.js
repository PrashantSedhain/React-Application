import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit.js";
class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Prashant", age: 23 },
      { id: "dscds", name: "Abit", age: 22 },
      { id: "cadcxs", name: "Anish", age: 33 },
    ],
    showPersons: true,
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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div>
        <Cockpit
          clicked={this.switchNameHandler}
          viewText={this.state.viewText}
        ></Cockpit>
        {view}
      </div>
    );
  }
}

export default App;
