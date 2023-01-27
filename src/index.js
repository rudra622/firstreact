import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter} from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
// import Home from './components/header/pages/home/Home';
// import Features from './components/header/pages/feature/Feature';
// import Addemployee from './components/addEmployee/Addemployee';
// import Empview from './components/empview/Empview';
// import View from './components/view/view';
import View from './components/header/pages/View';

// import App from './components/App';
// import Header from './components/header/header';
// import { Card } from 'react-bootstrap';
// import Card from './components/card/card';
// import Gallary from './components/gallary';
// import FromSt from './components/Form1st';
// import Tab from './components/Tab';
// import Title from './components/title';
// import Header from './components/Header';
// import Header from './components/header/header';
import Products from './components/header/pages/Products';
// import Counter from './components/counter'
// import HOverCounter from './components/HOverCounter';
// import CounterHook from './components/CounterHook';
// import CounterWidth from './components/width'
// import CounterFun from './components/Counterfun';
// import Theme from './components/Theme-bg';
// import ManageForm from './components/manageForm';
// import TodoApp from './components/todo';
// import Register from './components/Register';
import Crud from './components/crud';
// import Error from './components/error/error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> 
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
                {/* <Route path='/Feature' element={<Features/>}/>
                <Route path='/Addemployee' element={<Addemployee/>}/>
                <Route path='/Empview' element={<Empview/>}/> 
                <Route path='/View' element={<View/>}/>  */}
                 {/* <Route path='/' element={<Card/>}/> 
                <Route path='/view' element={<View/>}/> */}
                {/* <Route path='*' element={<Error/>}/> */}
                <Route path='/' element={<Products/>}/>
            </Routes>
        </BrowserRouter>
        {/* <Crud/> */}
        {/* <Title/>
        <Gallary/> */}
        {/* <Header logo="img/logo.png" dropdown="pages"/>
        <Header logo="img/logo1.webp" dropdown="Shop"/> */}
        {/* <Counter/> */}
        {/* <HOverCounter/> */}
        {/* <CounterHook/> */}
        {/* <Theme/> */}
        {/* <CounterWidth/>
        <CounterFun/> */}
        {/* <FromSt/> */}
        {/* <ManageForm /> */}
        {/* <Register/> */}
        {/* <TodoApp/> */}
        {/* <App /> */}
        {/* <Tab/> */}
    </>
);