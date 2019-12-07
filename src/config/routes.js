import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import RegisterContainer from '../components/Auth/RegisterContainer';
import LoginContainer from '../components/Auth/LoginContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import MarketContainer from '../containers/MarketContainer/MarketContainer';
import playerContainer from '../containers/PlayerContainer/PlayerContainer';

export default () => (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/register' component={ RegisterContainer }/>
        <Route path='/login' component={ LoginContainer }/>
        <Route path='/myteam' component={ ProfileContainer }/>
        <Route path='/market' component={ MarketContainer }/>
        <Route path='/player/:playername' component={ playerContainer }/>

    </Switch>
);