import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
import Gallary from './components/gallary';
import Title from './components/title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Title/>
        <Gallary/>
    </>
    // <App />
);