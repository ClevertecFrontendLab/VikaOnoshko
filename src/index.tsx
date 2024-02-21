import 'normalize.css';
import 'antd/dist/antd.less';
import './index.less';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { store, history } from '@redux/configure-store';
import { routes } from '@routes/routes';
// import { Loader } from '@components/loader/loader';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <Loader /> */}
            <HistoryRouter history={history}>{routes}</HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
