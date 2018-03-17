import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../data/store';

const App = () => {
    return (
        <Provider store={store}>
            <div>Hello World</div>
        </Provider>
    );
}

const wrapper = document.getElementById("app-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
