import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styling.scss'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
);
reportWebVitals();
