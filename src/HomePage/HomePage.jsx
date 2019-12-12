import React from 'react';
import { authenticationService } from '../_services/authentication-service';
import { userService } from '../_services/user-service';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        
       userService.getCurrentUser().then(userFromApi => this.setState({userFromApi}));
    
    }
    render() {
       const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Home</h1>
        <p>From storage: {currentUser && currentUser.user && currentUser.user.userName}</p>
    <p>Email: {currentUser && currentUser.user && currentUser.user.email}</p>
        <strong>{currentUser && currentUser.user && currentUser.user.isAdmin?"admin":"user"}</strong>
        <div>Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.userName}</li>
                        </ul>
                    }</div>
       
            </div>
        );
    }
}

export default HomePage;
