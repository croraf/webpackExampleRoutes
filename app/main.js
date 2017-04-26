
import styles from './style1.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {SuperApp} from './SuperApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {rootReducer} from './reducers/rootReducer';

const store = createStore (rootReducer);

export {store};

ReactDOM.render(
    <Provider store={store}>
        <SuperApp />
    </Provider>,
    document.getElementById('root')
);
