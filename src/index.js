import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
