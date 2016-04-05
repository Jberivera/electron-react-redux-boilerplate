import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import myAppStore from './reducers/myApp';

// react components
import ShowNote from './containers/ShowNote';

const App = (props) => (
  <Provider store={createStore(myAppStore)}>
    <ShowNote />
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'));
