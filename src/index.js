// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import styles from './index.scss';

const Main = () => <h1 className={styles.title}>Hello</h1>;

const el = document.querySelector('#app');

const render = Component => {
    el &&
        ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
            el,
        );
};

render(Main);

// Webpack Hot Module Replacement API
const moduleHot: mixed = (module: any).hot;
if (moduleHot && typeof moduleHot === 'function') {
    moduleHot.accept('./containers/App', () => {
        render(Main);
    });
}
