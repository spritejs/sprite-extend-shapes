import React, {Component} from 'react';
import LiveEdit from './react-live';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LiveEdit
            code="() => (
              <h3>
                So functional. Much wow!
              </h3>
            )"
          />
        </header>
      </div>
    );
  }
}

export default App;
