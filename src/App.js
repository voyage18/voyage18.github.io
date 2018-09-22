import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    view: "Home"
  };

  renderNavigator = () => {
    return (
      <nav className="App-nav">
        {["Home", "View", "About"].map(button => {
          return (
            <h3 key={`${button}-button`} className="App-nav-header">
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
        <p className="App-intro">Skeleton</p>
      </div>
    );
  }
}

export default App;
