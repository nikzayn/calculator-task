import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Calculator from './containers/Calculator';

import calculateReducer from './containers/Calculator/reducer';
import './styles/styles.css';

const store = createStore(calculateReducer);

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Calculator />
            </div>
        </Provider>
    );
}

export default App;