import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';


import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './static/splash';


class App extends React.Component{
    render(){

        return( 
            <div className="wrapper">
                <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
                {/* <Switch>
                    <AuthRoute path="/" component={Splash} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <AuthRoute path="/login" component={LogInFormContainer} />
                    <ProtectedRoute path="/" component={DashboardContainer} />
                </Switch> */}


                    <Switch>
                        <AuthRoute exact path="/login" component={LogInFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
                        {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
                        <Route exact path="/" component={Splash} />
                    </Switch>
            </div>
        );         
    }
}

export default App;
