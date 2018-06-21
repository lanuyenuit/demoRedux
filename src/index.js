import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import myReducer from './reducers/index'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(myReducer, /* preloadedState, */ composeEnhancers(

		// other store enhancers if any
));
let tasks = [
  {
    id: 1,
    name: 'hoc react',
    status:'1'
  },
  {
    id: 2,
    name: 'hoc hat',
    status: '0'
  },
  {
    id: 3,
    name: 'di boi',
    status: '1'
  }
]

ReactDOM.render(
    <Provider store={store}>
      <App tasks={tasks} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
