/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Container,Row,Col,Form,Button,Alert} from 'react-bootstrap'
import image from '../../assets/index'
import {FontPoppins} from '../../styles/common/index'
import {Slide} from 'react-awesome-reveal'
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Backdrop from '../../components/common/Backdrop'
import * as authReducer from '../../redux/reducers/auth.reducer'

export default function PasswordRecovery() {
  const history = useHistory();
 
  const dispatch = useDispatch();
  const authActions = {...authReducer.actions};
  const authStore  = useSelector(state => state.auth)

  const setValue = (e) => {
      dispatch(authActions.setValue({name:e.target.name,value : e.target.value}))
  }
  const handleSend = (e) => {
    dispatch(authActions.forgot.requested({email:authStore.email,callback : history}))
    e.preventDefault()
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
                                <Slide>
                                    <div className="ttt-pointer" onClick={() => history.goBack()}>
                                        <i className="fas fa-arrow-left signup-back"></i>
                                        <span className="signup-back">Back</span>
                                    </div>
                                    <div>
                                        {authStore.message.length > 0 && 
                                            authStore.variant !== 'success' && 
                                            <Alert variant={authStore.variant} className="m-0">{authStore.message}</Alert>
                                        }
                                        <FontPoppins size={36} className="font-weight-bold">Password Recovery</FontPoppins>
                                        <FontPoppins size={17} className="m-0">Enter Email Receive your password </FontPoppins>
                                    </div>
                                    <Slide>
                                        <img src={image.svg.rectangle} alt=" "/>
                                    </Slide>
                                </Slide>
                                <Slide>
                                    <Form onSubmit = {handleSend}>
                                        <Form.Group className="mt-3">
                                            <Form.Control 
                                                value = {authStore.email}
                                                onChange = {(e) => setValue(e)}
                                                type="email" 
                                                name = "email"
                                                placeholder="Enter Email" 
                                                className="input-customize"/>
                                        </Form.Group>
                                    
                                        <Form.Group className="d-flex justify-content-end">
                                            <Button 
                                            onClick = {(e) => handleSend(e)}
                                            className="btn-customize mr-2" 
                                            data-micron="bounce">
                                                Send
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                    
                                </Slide>
                            </Form>
                        </Col>
                        
                     </Container>       
             </Col>
             <Col xs={5} className="ttt-login-bg d-flex justify-content-center align-items-center">
                <img 
                    src={image.svg.pictureForgot} 
                    alt="description of image"
                    className="ttt-signup-picture"
                    />
             
             </Col>  
         </Row>
     </Container>
    
  );
}