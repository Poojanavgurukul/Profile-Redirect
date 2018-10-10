import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component{
   constructor(){
       super();
       this.state={
           profile:[]
       }
   }
    componentWillMount(){
        fetch('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
            .then(res=> res.json())
            .then(data => this.setState({profile:[data]}));
    }
    render(){
        const profileItems = this.state.profile.map(profiles=>(
            <div key={profiles.id}>
            <p>{profiles.contacts[1].name}</p>
            </div>
        ));
        return(
            <div>
                 <div className="navbar">
                    <nav>
                        <Link to = '/'><li>Home</li></Link>
                        <Link to = '/loginpage'><li>Login</li></Link>
                        <Link to = '/profile'><li>Profile</li></Link>
                    </nav>
                </div>
            {profileItems}
            </div>
        );
    }
}
export default Profile;