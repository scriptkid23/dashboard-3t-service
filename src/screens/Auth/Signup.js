/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Container,Row,Col,Form,Button, Alert} from 'react-bootstrap'
import image from '../../assets/index'
import {FontPoppins} from '../../styles/common/index'
import {Slide} from 'react-awesome-reveal'
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Backdrop from '../../components/common/Backdrop'
import * as authReducer from '../../redux/reducers/auth.reducer'
export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authAction = {...authReducer.actions}
  const authStore  = useSelector(state => state.auth)

  const setValue = (e) => {
    dispatch(authAction.setValue({
             name : e.target.name,
             value: e.target.value}))
 }
  const handleSignup = () => {
      dispatch(authAction.signup.requested({callback:history}))
  }
  const goBack = () => {
    dispatch(authAction.setDefault())
    history.goBack()
  }
  return (
     <Container fluid>
         {authStore.loading &&<Backdrop show={authStore.loading}/>}
         <Row className="vh-100">
            <Col xs={7} className="ttt-auth-content d-flex align-items-center">          
                     <img src={image.svg.logo} alt="" className="ttt-login-logo"/>
                     <Container>
                         <Col xs={7}>
                            <Form className="mt-5">
                                <Slide cascade>
                                   
                                    <div className="ttt-pointer" onClick={() => goBack()}>
                                        <i className="fas fa-arrow-left signup-back"></i>
                                        <span className="signup-back">Back</span>
                                    </div>
                                    <div>
                                        {authStore.message.length > 0 && 
                                            authStore.variant !== 'success' && 
                                            <Alert variant={authStore.variant} className="m-0">{authStore.message}</Alert>
                                        }
                                        <FontPoppins size={36} className="font-weight-bold">Create an Account</FontPoppins>
                                        <FontPoppins size={17} className="m-0">Sign in continue</FontPoppins>
                                    </div>
                                    <img src={image.svg.rectangle} alt=" "/>
                                </Slide>
                                <Slide>
                                    <Form.Group className="mb-0 mt-5" >
                                        <Form.Control type="text" 
                                        placeholder="Enter Fullname" 
                                        name = "fullname"
                                        value = {authStore.fullname}
                                        onChange = {e => setValue(e)}
                                        className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group  className="mt-0 mb-0">
                                        <Form.Control 
                                        type="email" 
                                        name = "email"
                                        value = {authStore.email}
                                        onChange = {e => setValue(e)}
                                        placeholder="Enter Email" 
                                        className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group  className="mt-0">
                                        <Form.Control 
                                        type="password" 
                                        name = "password"
                                        value = {authStore.password}
                                        onChange = {e => setValue(e)}
                                        placeholder="Enter Password" 
                                        className="input-customize"/>
                                    </Form.Group>
                                    <Form.Group className="d-flex justify-content-end">
                                        <Button 
                                        onClick ={() => handleSignup()}
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