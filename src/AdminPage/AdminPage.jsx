import React from 'react';

import { userService } from '../_services/user-service';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
      userService.getAll().then(users => this.setState({users}));
     
      
    }

    render() {
        let {users}  = this.state;
       
        
        return (
            <div>
                <h1>Admin</h1>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                   
                    {users &&
                        <ul>
                            
                            {users.map(user =>
                                <li key={user._id}>{user.userName}</li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default AdminPage ;