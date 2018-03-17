import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../data/store';

import { injectGlobal } from 'styled-components';

import BaseLayout from './base-layout';

const App = () => {
    return (
        <Provider store={store}>
            <BaseLayout />
        </Provider>
    );
}

/* Below are some site-wide stylings
 */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Raleway');

html {
    font-size: 15px;
}
`;

const wrapper = document.getElementById("app-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
