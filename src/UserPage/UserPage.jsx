import React from 'react';
import { authenticationService } from '../_services/authentication-service';
import { userService } from '../_services/user-service';
import { kittenService} from '../_services/kitten-service';


class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            kittens: null
        };
    }

    componentDidMount() {
        
       userService.getCurrentUser().then(userFromApi => this.setState({userFromApi}));
       kittenService.getAll().then(kittens => this.setState({kittens}));
    }
    render() {
       const { currentUser, userFromApi} = this.state;
       let {kittens} = this.state;
       
       
        return (
            <div>
                <h1>About me</h1>
        <p>From storage: {currentUser && currentUser.user && currentUser.user.userName}</p>
    <p>Email: {currentUser && currentUser.user && currentUser.user.email}</p>
        <strong>{currentUser && currentUser.user && currentUser.user.isAdmin?"admin":"user"}</strong>
        <div>Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.userName}</li>
                        </ul>
                    }</div>
                     <div>
               
               
            </div>
            <div><strong>kittens</strong>
                <ul>
                {
                kittens && kittens.kittens &&
                  kittens.kittens.map(kitten => <li key={kitten._id}>{kitten.name}</li>)
                  }
                
                
                </ul>
            </div>
       
            </div>
           
        );
    }
}

export default UserPage;
