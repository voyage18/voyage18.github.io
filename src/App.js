import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    view: "Home"
  };

  renderNavigator = () => {
    const { view } = this.state;
    const navClassName = `App-nav-header ${
      view === "Home" ? "white" : "black"
    }`;
    return (
      <nav className="App-nav">
        {["Home", "View", "About"].map(button => {
          return (
            <h3 key={`${button}-button`} className={navClassName}>
              <button onClick={() => this.setState({ view: button })}>
                {button}
              </button>
            </h3>
          );
        })}
      </nav>
    );
  };

  render() {
    const { view } = this.state;
    return (
      <div className={`App ${view}`}>
        <header className="App-header">{this.renderNavigator()}</header>
      </div>
    );
  }
}

export default App;
