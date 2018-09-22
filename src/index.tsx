import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import { SAMPLE_LESSON } from './Models';
import { IState, rootReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const initialState: IState = { currentLesson: SAMPLE_LESSON };
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
