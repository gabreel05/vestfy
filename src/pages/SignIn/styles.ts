import styled from 'styled-components'

export const SignInPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ecf1f8;
`

export const SignInPageFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100%;
  padding: 20px;
`

export const SignInPageSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100%;
`

export const SignInPageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const SignInFormCard = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`

export const SignInFormInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`

export const SignInFormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: #255de6;
  color: #fff;
  cursor: pointer;
`

export const SignInForgotMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const SignInFormCheckboxForgotMe = styled.input``

export const SignInFormCheckboxForgotMeLabel = styled.label`
  margin-left: 5px;
`

export const SignInPageIcon = styled.img`
  width: 100%;
  height: 100%;
`

export const SignInFormForgotPasswordLink = styled.a`
  margin-left: 5px;
  color: #255de6;
  text-decoration: none;
  cursor: pointer;
`
export const SignInFormSignUpLink = styled.a`
  margin-top: 10px;
  margin-left: 5px;
  color: #255de6;
  text-decoration: none;
  cursor: pointer;
`
