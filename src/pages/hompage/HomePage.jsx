import React from 'react'
import Directory from '../../components/directory/Directory'
import './Homepage.scss'


const HomePage = ({history}) => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}

export default HomePage;