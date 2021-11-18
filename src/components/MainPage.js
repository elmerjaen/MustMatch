import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainPage.css';

function MainPage() {
  return (
    <div className='main-container'>
      <video src='/videos/sign-language-video.mp4' autoPlay loop muted />
      <h1>SIGNSPA</h1>
      <p>El Primer Traductor de Señas Panameño</p>
      <div className='main-btn'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EMPEZAR
        </Button>
      </div>
    </div>
  );
}

export default MainPage;