import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements,
   Route, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css file for styling
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // import bootstrap js file for functionalitynp
// import LogInScreen from './screens/LogInScreen';
// import AboutScreen from './screens/AboutScreen';
// import ContactScreen from './screens/ContactScreen';
// import NotFoundScreen from './screens/NotFoundScreen';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import store from './store';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route  path="/" element={<App />}>
    <Route index={true} path="/" element={<HomeScreen />} />
    <Route path="/product/:id" element={<ProductScreen />} />
    {/* <Route path="cart" element={<Cart />} />
    <Route path="signin" element={<Log In />} /> */} 
    {/* <Route path="about" element={<AboutScreen />} /> */}
    {/* <Route path="contact" element={<ContactScreen />} /> */}
    {/* <Route path="*" element={<NotFoundScreen />} /> */}
  </Route>
))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
