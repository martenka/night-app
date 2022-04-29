import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

dayjs.extend(CustomParseFormat);

const rootContainer = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

