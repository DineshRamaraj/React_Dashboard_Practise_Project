import { GoogleLogin } from "@react-oauth/google";
import { Component } from "react";
import { Navigate } from "react-router-dom";
// import jwt_decode from 'jwt-decode's
import {
  LoginContainer,
  LeftSideLogin,
  LeftSideHeading,
  RightSideLogin,
  MainLoginContainer,
  RightSideHeading,
  RightSideHint,
  LoginGoogleAndAppleContainer,
  GoogleButtonContainer,
  AppleButtonContainer,
  AppleImage,
  AppleSignIn,
  LoginFormContainer,
  InputContainer,
  FormInput,
  FormLabel,
  FormButton,
  FormForgot,
  LoginNoHaveAccount,
  LoginRegister,
} from "./styledComponents";

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <LeftSideLogin>
          <LeftSideHeading>Board.</LeftSideHeading>
        </LeftSideLogin>

        <RightSideLogin>
          <MainLoginContainer>
            <RightSideHeading>Sign In</RightSideHeading>
            <RightSideHint>Sign in to your account</RightSideHint>
            <LoginGoogleAndAppleContainer>
              <GoogleButtonContainer type="button">
                  <GoogleLogin
                      onSuccess={credentialResponse => {
                        // const credentialResponseDecrypted = jwt_decode(credentialResponse);
                        // console.log(credentialResponseDecrypted);
                        console.log(credentialResponse);
                        <Navigate to="/dashboard"/>
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
              </GoogleButtonContainer>
              <AppleButtonContainer>
                <AppleImage
                  src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710747930/gdhhcsgzyfrfcw752xxe.png"
                  alt="apple"
                />
                <AppleSignIn>Sign in with Apple</AppleSignIn>
              </AppleButtonContainer>
            </LoginGoogleAndAppleContainer>
            <LoginFormContainer>
              <InputContainer>
                <FormLabel>Email address</FormLabel>
                <FormInput type="text" placeholder="Enter Your Email" />
              </InputContainer>
              <InputContainer>
                <FormLabel>Password</FormLabel>
                <FormInput type="text" placeholder="Enter Your Password" />
              </InputContainer>
              <FormForgot type="button">Forgot Password?</FormForgot>
              <FormButton type="submit">Sign In</FormButton>
            </LoginFormContainer>
            <LoginNoHaveAccount>
              Don't have an account?{" "}
              <LoginRegister type="button">Register here</LoginRegister>
            </LoginNoHaveAccount>
          </MainLoginContainer>
        </RightSideLogin>
      </LoginContainer>
    );
  }
}
export default Login;
