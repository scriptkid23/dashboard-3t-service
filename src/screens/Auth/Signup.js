/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import image from '../../assets/index'
import {FontPoppins} from '../../styles/common/index'
import {Slide,Fade} from 'react-awesome-reveal'
import { useHistory } from "react-router-dom";
export default function Signup() {
  const  history = useHistory()
  return (
     <Container fluid>
         <Row className="vh-100">
            <Col xs={7} className="ttt-login-content d-flex align-items-center">          
                     <img src={image.svg.logo} alt="" className="ttt-login-logo"/>
                     <Container>
                         <Col xs={7}>
                            <Form className="mt-5">
                                <Slide cascade>
                                    <div className="ttt-pointer" onClick={() => history.goBack()}>
                                        <i className="fas fa-arrow-left signup-back"></i>
                                        <span className="signup-back">Back</span>
                                    </div>
                                    <div>
                                        <FontPoppins size={36} className="font-weight-bold">Create an Account</FontPoppins>
                                        <FontPoppins size={17} className="m-0">Sign in continue</FontPoppins>
                                    </div>
                                    <img src={image.svg.rectangle} alt=" "/>
                                </Slide>
                                <Slide>
                                    <Form.Group className="mb-0 mt-5" >
                                        <Form.Control type="text" 
                                        placeholder="Enter Name" 
                                        className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="mt-0 mb-0">
                                        <Form.Control type="email" placeholder="Enter Email" className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="mt-0">
                                        <Form.Control type="password" placeholder="Enter Password" className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group className="d-flex justify-content-end">
                                        <Button 
                                        className="btn-customize mr-2" 
                                        data-micron="fade">
                                            Sign Up
                                        </Button>
                                    </Form.Group>
                                </Slide>
                            </Form>
                        </Col>
                        
                     </Container>
                   
                       
             </Col>
             <Col xs={5} className="ttt-login-bg d-flex justify-content-center align-items-center">
                <img 
                    src={image.svg.pictureSignup} 
                    alt="description of image"
                    className="ttt-signup-picture"
                    />
             </Col>      
         </Row>
     </Container>
    
  );
}