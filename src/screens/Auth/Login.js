/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import image from '../../assets/index'
import {FontPoppins} from '../../styles/common/index'
export default function Login() {

  return (
     <Container fluid>
         <Row className="vh-100">
             <Col xs={7} className="ttt-login-content d-flex align-items-center">          
                     <img src={image.svg.logo} alt="" className="ttt-login-logo"/>
                     <Container>
                         <Col xs={7}>
                         <Form>
                            <FontPoppins size={36} className="font-weight-bold">Login</FontPoppins>
                            <FontPoppins size={17} className="m-0">Welcome back, Please login in to your account</FontPoppins>
                            <img src={image.svg.rectangle} alt=" " />
                            <Form.Group controlId="formBasicEmail" className="mb-0 mt-5" >
                             
                                <Form.Control type="email" 
                              
                                placeholder="Enter email" 
                                className="input-customize"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="mt-0">
                                <Form.Control type="password" placeholder="Enter password" className="input-customize"/>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-end">
                                <FontPoppins color="#224070" className="ttt-pointer">Forgot Password ?</FontPoppins> 
                            </Form.Group>
                                
                            
                            <Form.Group className="d-flex justify-content-end">
                            <Button 
                            className="btn-customize btn-outline mr-2" 
                            data-micron="fade">
                                Sign Up
                            </Button>
                            <Button
                             className="btn-customize"
                             data-micron="blink"
                             >Login</Button>
                            </Form.Group>
                            
                        </Form>
                         </Col>
                        
                     </Container>
                   
                       
             </Col>
           
             <Col xs={5} className="ttt-login-bg d-flex justify-content-center align-items-center">
                <img 
                    src={image.svg.picture} 
                    alt="description of image"
                    className="ttt-login-picture"
                    />
             </Col>
            
             
            
         </Row>
     </Container>
    
  );
}