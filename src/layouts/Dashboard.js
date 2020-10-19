import React, { Component } from 'react'
import Routers from '../routes';
import {Row,Container,Col} from 'react-bootstrap'
import {Route,Redirect,Link} from 'react-router-dom'
import Navbar from '../components/dashboard/Navbar'
import Sidebar from '../components/dashboard/Sidebar'
import CookieService from '../services/CookieService'

export default class Dashboard extends Component {
  
    getRoutes = routes => {
    
        return routes.map((prop, key) => {
          if (prop.layout === "/dashboard") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (
                    CookieService.get('token') ?
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
            <div className="d-block bg-light">
               <Container fluid className="d-flex">
                  <div className="flex-grow-1">
                    <Sidebar/>
                  </div>     
                  <div id="dashboard-content">
                    <Navbar/>
                    {this.getRoutes(Routers)}
                  </div>
               </Container>
            </div>
        )
    }
}
