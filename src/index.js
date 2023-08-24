import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import { Provider } from 'react-redux'
import store_company from "./app/store_company";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store_company}>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
);

reportWebVitals();
