import './css/reset.css';
import './css/common.css';

import React,{ Component } from 'react';
import { render }from 'react-dom';

import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
