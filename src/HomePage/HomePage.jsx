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
        //const { currentUser } = this.state;
        
        //userService.getById(currentUser.currentUser.user._id).then(userFromApi => this.setState({ userFromApi }));
        userService.getCurrentUser().then(userFromApi => this.setState({userFromApi}));
        userService.getCurrentUser().then((result)=> console.log(result));
        console.log("current user", this.state);
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>You're logged in with React & JWT!!</p>
        <p>Your role is: <strong>{userFromApi && userFromApi.isAdmin?'admin':'user'}</strong>.</p>
                <p>This page can be accessed by all authenticated users.</p>
                <div>
                    Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.userName}</li>
                        </ul>
                    }
                    
                </div>
                <div>
                    Current user from storage:
                    {currentUser &&
                        <ul>
                            <li>{currentUser.user.userName}</li>
                        </ul>
                    }
                    
                </div>
            </div>
        );
    }
}

export default HomePage;