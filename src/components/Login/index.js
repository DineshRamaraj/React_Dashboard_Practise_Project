import {Component} from 'react'
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
  GoogleImage,
  GoogleSignIn,
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
  LoginRegister
} from "./styledComponents";

class Login extends Component{
    render(){
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
                        <GoogleImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/btdlmlptcunyphtj0vl3.png" alt="google"/>
                        <GoogleSignIn>Sign in with Google</GoogleSignIn>
                    </GoogleButtonContainer>
                    <AppleButtonContainer>
                        <AppleImage/>
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
                    Don't have an account? <LoginRegister type="button">Register here</LoginRegister>
                  </LoginNoHaveAccount>
                </MainLoginContainer>
              </RightSideLogin>
            </LoginContainer>
          );
        
    }
}
export default Login;
