import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { LoginScreen } from './screens/Login';
import { RegisterScreen } from './screens/Register';
import { ChatsScreen } from './screens/Chats';
import { DiscoverScreen } from './screens/Discover';
import { PhotosScreen } from './screens/Photos';
// import { SeachScreen } from './screens/search';
import { ProfileScreen } from './screens/Profile';
// import {IndexScreen} from './screens/Index';
import {IndividualScreen} from './screens/Individual';
import { CahorosScreen} from './screens/Cachoros';
import { NovaimagemScreen} from './screens/Novaimagem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginScreen color="blue"/>} />
      <Route path="register" element={<RegisterScreen/>} />
      <Route path="chats" element={<ChatsScreen/>} />
      <Route path="discover" element={<DiscoverScreen/>} />
      {/* <Route path="index" element={<IndexScreen/>} /> */}
      <Route path="photos" element={<PhotosScreen/>} />
      <Route path="profile" element={<ProfileScreen/>} />
      {/* <Route path="search" element={<SeachScreen/>} /> */}
      <Route path="individual" element={<IndividualScreen/>} />
      <Route path="cachoros" element={<CahorosScreen/>} />
      {/* <Route path="search-results" element={<Search-resultsScreen/>} />  */}
      <Route path="novaimagem" element={<NovaimagemScreen/>} />
      <Route path="individual" element={<IndividualScreen/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
