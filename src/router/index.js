import React, { Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultComponent from '../components/default/default.component';
import PageNotFound from '../components/notfound/notfound.component';

class CustomRouter extends Component{
    render(){        
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={DefaultComponent}/>
                        <Redirect path="/home" to="/"/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default CustomRouter;