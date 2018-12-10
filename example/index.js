import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import {spritejs} from 'sprite-vue';
import {install} from '../src/';
import NavBar from './components/nav';

import Circle from 'raw-loader!./examples/circle.example';
import Polycurve from 'raw-loader!./examples/polycurve.example';
import Polygon from 'raw-loader!./examples/polygon.example';
import Polyline from 'raw-loader!./examples/polyline.example';
import Rect from 'raw-loader!./examples/rect.example';
import Ring from 'raw-loader!./examples/ring.example';
import Sector from 'raw-loader!./examples/sector.example';
import Star from 'raw-loader!./examples/star.example';
import Triangle from 'raw-loader!./examples/triangle.example';
import Wave from 'raw-loader!./examples/wave.example';

import './index.css';

spritejs.use(install);

const routeMap = {
  Circle,
  Polycurve,
  Polygon,
  Polyline,
  Rect,
  Ring,
  Sector,
  Star,
  Triangle,
  Wave
};

class App extends PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, '', '/sprite-extend-shapes/#/' + key);
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
                  className={key === hash ? 'is-active' : ''}
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
