import React from 'react';
import './loginpage.css';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toUpperCase()})
    }
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
                <form className="container">
                    <labael className="text">UserId</labael>
                    <input type="email" placeholder="Enter your Id" name="email" className="inp" value={this.state.email} onChange={this.onChange}></input>
                    <label className="text">Password</label>
                    <input type="password" placeholder="Enter your Password" name="password"className="inp" value={this.state.password} onChange={this.onChange}></input>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;