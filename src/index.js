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
))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
