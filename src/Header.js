import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <>
        <div className = 'header'>
            <div className="header__left">
                <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="" />
            </div>
            <div className="header__right">
                <h4 className = 'intern'>Internships</h4>
                <h4 className = 'training'>Online Trainings</h4>
                <h4 className = 'jobs'>Fresher Jobs</h4>
                <button className = 'header__login'>
                    Login
                </button>
                <button className = 'header__register'>Register</button>
                
            </div>
            
        </div>
        <hr/>

        <div className="header__bottom">
            <input placeholder = "What are you Looking For ? " type="text" />
            <SearchIcon/>
        </div>
        </>
    )
}

export default Header
