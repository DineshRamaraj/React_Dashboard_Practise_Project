import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
`;

export const LeftSideLogin = styled.div`
  background-color: #000000;
  width: 40%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideHeading = styled.h1`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 48px;
`;

export const RightSideLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 60%;
`;

export const MainLoginContainer = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 400px;
`;

export const RightSideHeading = styled.h1`
  font-family: "Roboto";
  font-size: 24px;
  color: #000000;
`;

export const RightSideHint = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  color: #000000;
`;

export const LoginGoogleAndAppleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
`

export const GoogleButtonContainer = styled.button`
display: flex;
flex-direction: row;
align-items: center;
border: none;
background-color: transparent;
cursor: pointer;
width: 50%;
`

export const GoogleImage = styled.img`
width: 15px;
height: 15px;
`

export const GoogleSignIn = styled.p`
font-family: "Roboto";
font-size: 14px;
`

export const AppleButtonContainer = styled.button`
display: flex;
align-items: center;
border: none;
background-color: transparent;
cursor: pointer;
width: 50%;
`

export const AppleImage = styled.img`
width: 15px;
height: 15px;
margin-right: 5px;
`

export const AppleSignIn = styled.p`
font-family: "Roboto";
font-size: 14px;
`


export const LoginFormContainer = styled.div`
  padding: 20px 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-family: "Roboto";
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #eaeaea;
  font-family: "Roboto";
  font-size: 14px;
  outline: none;
  border: none;
  margin-top: 5px;
  color: #000000;
`;

export const FormForgot = styled.button`
font-family: "Roboto";
font-size: 16px;
color:#346BD4;
background-color: transparent;
border: none;
cursor: pointer;
margin-top: 10px;
margin-bottom: 10px;
 `

export const FormButton = styled.button`
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 18px;
  cursor: pointer;
`;


 export const LoginNoHaveAccount = styled.p`
 font-family:"Roboto";
 font-size: 18px;
 color: #858585;
 `

 export const LoginRegister = styled.button`
 font-family: "Roboto";
 font-size: 16px;
 color:#346BD4;
 background-color: transparent;
 border: none;
 cursor: pointer;
 `