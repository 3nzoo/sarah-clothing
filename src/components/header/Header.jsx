import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
import { connect } from 'react-redux'



const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>            
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
                    :<Link className='option' to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
    )
}


const mapsStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapsStateToProps)(Header);