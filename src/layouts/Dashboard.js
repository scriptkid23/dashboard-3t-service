import React, { Component } from 'react'
import Routers from '../routes';
import {Route,Redirect,Link} from 'react-router-dom'
export default class Dashboard extends Component {
    getRoutes = routes => {
    
        return routes.map((prop, key) => {
          if (prop.layout === "/dashboard") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (
                    localStorage.getItem("token") ?
                  <prop.component
                    {...props}
                    
                  />:<Redirect to='/auth/login'/>
                )}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      }
    render() {
        return (
            <div>
               {this.getRoutes(Routers)}
            </div>
        )
    }
}
