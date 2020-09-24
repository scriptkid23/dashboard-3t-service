/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Container,Row,Col,Form,Button,Alert} from 'react-bootstrap'
import image from '../../assets/index'
import {FontPoppins} from '../../styles/common/index'
import { useHistory} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import * as authReducer from '../../redux/reducers/auth.reducer'

import {otp} from '../../services/extensions'
export default function ConfirmOTP() {
    const history = useHistory();
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions}
    const authStore  = useSelector(state => state.auth)
    const [passcode, setPasscode] = React.useState("")
    const otpRef = React.useRef(null);
    
    React.useEffect(() => {
        let optModule = otp('otp-inputs')
        optModule.init((passcode) => setPasscode(passcode) )
    },[passcode])
    
    const handleConfirmOTP = () => {
        dispatch(authAction.confirm.requested({otp:passcode, callback:history}))
    }
  return (
     <Container fluid>
         <Row className="vh-100">
            <Col xs={7} className="ttt-auth-content d-flex align-items-center">          
                     <img src={image.svg.logo} alt="" className="ttt-login-logo"/>
                     <Container>
                         <Col xs={7}>
                            <Form className="mt-5">                     
                                    <div className="ttt-pointer" onClick={() => history.goBack()}>
                                        <i className="fas fa-arrow-left signup-back"></i>
                                        <span className="signup-back">Back</span>
                                    </div>
                                    <div>
                                        {authStore.message.length > 0 && 
                                            authStore.variant !== 'success' && 
                                            <Alert variant={authStore.variant} className="m-0">{authStore.message}</Alert>
                                        }
                                        <FontPoppins size={33} className="font-weight-bold">Enter vertification code</FontPoppins>
                                        <FontPoppins size={17} className="m-0">We have just send vertification code to {'email'}</FontPoppins>
                                    </div>
                                  
                                        <img src={image.svg.rectangle} alt=" "/>
                                <div id="otp-inputs" ref={otpRef} className="mt-3 mb-3 d-flex justify-content-between">
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                    <input className="otp-input" type="text"  pattern="\d*" inputMode="numeric"/>
                                </div>    
                                <Form.Group className="d-flex justify-content-end">
                                        <FontPoppins 
                                        onClick={() => history.push('/auth/password-recovery')}
                                        color="#224070" 
                                        className="ttt-pointer">Resend vertification code</FontPoppins> 
                                      
                                </Form.Group>   
                                <Form.Group className="d-flex justify-content-end">
                                    <Button 
                                        onClick = {() => handleConfirmOTP()}
                                        className="btn-customize mr-2" 
                                        data-micron="bounce">
                                            Send
                                    </Button>
                                </Form.Group>
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