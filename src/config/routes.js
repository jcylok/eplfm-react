import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import RegisterContainer from '../components/Auth/RegisterContainer';
import LoginContainer from '../components/Auth/LoginContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';


export default () => (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/register' component={ RegisterContainer }/>
        <Route path='/login' component={ LoginContainer }/>
        <Route path='/profile' component={ ProfileContainer }/>

    </Switch>
);