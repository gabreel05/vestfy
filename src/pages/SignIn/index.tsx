import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as firebaseui from 'firebaseui'

import auth from '../../services/auth'

import {
  SignInForgotMeContainer,
  SignInFormButton,
  SignInFormCard,
  SignInFormCheckboxForgotMe,
  SignInFormCheckboxForgotMeLabel,
  SignInFormForgotPasswordLink,
  SignInFormInput,
  SignInFormSignUpLink,
  SignInPageContainer,
  SignInPageFirstColumn,
  SignInPageIcon,
  SignInPageSecondColumn,
  SignInPageTitle,
} from './styles'

export default function SignInPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          console.log(authResult, redirectUrl)

          return true
        },
      },
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
    })
  }, [])

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const email = form.get('email')?.toString()
    const password = form.get('password')?.toString()

    signInWithEmailAndPassword(auth, email!!, password!!)
      .then(userCredential => {
        userCredential.user
          .getIdToken()
          .then(token => localStorage.setItem('token', token))
        navigate('/')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <SignInPageContainer>
      <SignInPageFirstColumn>
        <SignInFormCard onSubmit={handleSignIn}>
          <SignInPageTitle>Vestfy | Entrar</SignInPageTitle>

          <SignInFormInput placeholder="E-mail" name="email" />
          <SignInFormInput placeholder="Senha" name="password" />

          <SignInFormButton>Entrar</SignInFormButton>

          <SignInForgotMeContainer>
            <SignInFormCheckboxForgotMe type="checkbox" />
            <SignInFormCheckboxForgotMeLabel>
              Lembrar-me
            </SignInFormCheckboxForgotMeLabel>
          </SignInForgotMeContainer>
          <SignInFormForgotPasswordLink>
            Esqueceu sua senha?
          </SignInFormForgotPasswordLink>
          <SignInFormSignUpLink href="/sign-up">
            Não tem uma conta? Cadastre-se
          </SignInFormSignUpLink>

          <div id="firebaseui-auth-container"></div>
        </SignInFormCard>
      </SignInPageFirstColumn>
      <SignInPageSecondColumn>
        <SignInPageIcon src="https://source.unsplash.com/random?wallpapers" />
      </SignInPageSecondColumn>
    </SignInPageContainer>
  )
}
