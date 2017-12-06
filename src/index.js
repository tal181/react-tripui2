import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createInitAppStore} from './store/rootReducer'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
ReactDOM.render( <Provider store={createInitAppStore()}>
                                  <BrowserRouter>
                                      <App  />
                                  </BrowserRouter>
                        </Provider>, document.getElementById('root'));
registerServiceWorker();
