import React from 'react'
import './welcome.css'
/* import socialDev from './assets/socialDEV-removebg-preview.png' */
import logo1 from '../pageInitial/assets/logofg.png'
import { Link } from 'react-router-dom'


export const Welcome = () => {
  return (
    <div className='boxMainWelcome'>
    <div className='boxWelcome1'></div>
    <div className='boxWelcome2'>
        <div className='blurWelcome'>
            <img className='socialLogo' src={logo1} alt="logo" />
            <Link to='/login'><button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Iniciar</span>
                </button>
            </Link>
            
        </div>
    </div>
    </div>
  )
}
