import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
// import Gallary from './components/gallary';
// import Title from './components/title';
// import Header from './components/Header';
// import Counter from './components/counter'
import Theme from './components/Theme-bg';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
const list =["Home","Service","Pages","Blog","Gallary","About Us","Contet Us"];
root.render(
    <>
        {/* <Title/>
        <Gallary/> */}
        {/* <Header logo="img/logo.png" dropdown="pages"/>
        <Header logo="img/logo1.webp" dropdown="Shop"/> */}
        {/* <Counter/> */}
        {/* <Theme/> */}
        <Header logo="img/logo.png" list={list}/>
    </>
    // <App />
);