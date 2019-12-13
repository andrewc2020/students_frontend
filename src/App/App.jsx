import React from 'react';
import {Router, Link, Route} from 'react-router-dom';


import { history, Role } from '../_helpers';
import { authenticationService } from '../_services/authentication-service';
import { PrivateRoute } from '../_components/PrivateRoute';
import HomePage  from '../HomePage/HomePage';
import AdminPage from '../AdminPage/AdminPage';
import LoginPage  from '../LoginPage/LoginPage';
import UserPage from '../UserPage/UserPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x && x.user,
            isAdmin: x && x.user && x.user.isAdmin 
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/userPage"  className="nav-item nav-link">User</Link>
                                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                                <a href="" onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <Route path="/login" component={LoginPage} />
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/userpage" component={UserPage} />
                                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App ; 