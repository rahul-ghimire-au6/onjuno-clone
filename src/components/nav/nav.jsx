import React, { Fragment } from 'react'
import logo from '../../assets/img/logo.png'
import Button1 from '../button/button'
import './nav.css'

export default function Nav1({navclassname}) {
    return (
        <Fragment>
            <nav className={navclassname} >
                <div className='nav-container'>
                    <img src={logo} alt="company logo" className='logo1'/>
                    <a href='/' className='home'>Home</a>
                    <a href='/' className='company'>Company <span style={{position:'relative',bottom:'0.2em'}}>&#8964;</span></a>
                    <a href='/' className='learn'>Learn <span style={{position:'relative',bottom:'0.3em'}}>&#8964;</span></a>
                    <a href='/' className='legal'>Legal <span style={{position:'relative',bottom:'0.3em'}}>&#8964;</span></a>
                    <div className='button_container'>
                        <div>
                        <Button1 classnamevalue='button_login' buttonvalue='Login'/>
                        </div>
                        <div>
                        <Button1 classnamevalue='button_signup'  buttonvalue='Signup'/>
                        </div>
                        </div>
                    </div>
                </nav>            
        </Fragment>
    )
}
