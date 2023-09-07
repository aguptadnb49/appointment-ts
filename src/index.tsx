import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/login';
import LogoutButton from './components/logout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppointmentTable from './components/appointmentList';
import AppointmentForm from './components/appointmentForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <Auth0Provider
      domain="dev-lzpdqmdb2yfnmavu.us.auth0.com"    
      clientId="EqzdIBO4iW6I2O9Wf1owFzvbBIV7jJhI"    
      authorizationParams={{      
        redirect_uri: window.location.origin
      }}  
    >   
    <App />
    <Login />
    <LogoutButton />
  </Auth0Provider> */}
  <Auth0Provider
    domain="dev-lzpdqmdb2yfnmavu.us.auth0.com"
    clientId="EqzdIBO4iW6I2O9Wf1owFzvbBIV7jJhI"
    authorizationParams={{
      redirect_uri: window.location.origin,
      // audience: "https://dev-lzpdqmdb2yfnmavu.us.auth0.com/api/v2/",
      audience: "https://www.epam-api.com",
      scope: "openid profile email",
    }}
    cacheLocation="localstorage"
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<AppointmentTable />} />
        <Route path="/new" element={<AppointmentForm />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
