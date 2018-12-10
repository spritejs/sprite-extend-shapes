import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import {spritejs} from 'sprite-vue';
import {install} from '../src/';
import NavBar from './components/nav';

import Sector from 'raw-loader!./components/sector.js';
import Wave from 'raw-loader!./components/wave.example';

import './index.css';

spritejs.use(install);

const routeMap = {
  Sector,
  Wave
};

class App extends PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, '', '/#/' + key);
    this.forceUpdate();
  };

  componentDidMount() {
    window.addEventListener(
      'popstate',
      e => {
        document
          .querySelector('.playgroundPreview')
          .removeChild(document.querySelector('.playgroundPreview canvas'));
        this.forceUpdate();
      },
      false
    );
  }

  render() {
    const hash = document.location.hash.replace(/#\/?/, '');
    let CurrentPage = () =>
      routeMap[hash] ? (
        <Playground codeText={routeMap[hash]} es6Console scope={{React}} />
      ) : (
        <p style={{padding: 15}}>Click the left side menu to navigate.</p>
      );

    return (
      <div>
        <NavBar />
        <div className="container">
          <aside>
            <ul className="menu">
              {Object.keys(routeMap).map((key, i) => (
                <li
                  className="menu-item"
                  key={'menu-item__' + i}
                  onClick={() => this.handleLinkClick(key)}
                >
                  <span>{key}</span>
                </li>
              ))}
            </ul>
          </aside>

          <main>
            <CurrentPage />
          </main>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
