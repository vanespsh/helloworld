import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Content/Profile/ProfileContainer';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Photos from './components/Content/Photos/Photos';
import {Routes, Route } from 'react-router-dom';
import MusicsContainer from './components/Content/Musics/MusicsContainer';
import React from 'react';
import UsersContainer from './components/Content/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {

  return (

    <div className={styles.app}>
      
        <HeaderContainer />
        <NavBar />
        <div className={styles.appContent}>
          <Routes>
            <Route path='/MyProfile/:userId' element={<ProfileContainer/>}/>

            <Route path='/Messages/' element={<DialogsContainer/>} />

            <Route path='/Photos/' element={<Photos />} />

            <Route path='/Musics/' element={<MusicsContainer/>}/>
            <Route path='/Users/' element={<UsersContainer/>} />

            

          </Routes>
        </div>
      
    </div>

  );
}

export default App;
