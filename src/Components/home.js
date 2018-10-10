import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <nav>
                        <Link to = '/'><li>Home</li></Link>
                        <Link to = '/loginpage'><li>Login</li></Link>
                        <Link to = '/profile'><li>Profile</li></Link>
                    </nav>
                </div>
                <div className="heads">
                    <h1>Welcome To.......</h1>
                    <h2>Mock Services</h2>
                </div>
            </div>
        );
    }
}


export default Home;