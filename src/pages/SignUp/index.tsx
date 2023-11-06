import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import auth from '../../services/auth'
import db from '../../services/database'

import {
  SignUpAlreadyHaveAccountContainer,
  SignUpAlreadyHaveAccountLink,
  SignUpFormButton,
  SignUpFormCard,
  SignUpFormInput,
  SignUpPageContainer,
  SignUpPageTitle,
} from './styles'

export default function SignUpPage() {
  const navigate = useNavigate()

  function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const email = form.get('email')?.toString()
    const password = form.get('password')?.toString()

    createUserWithEmailAndPassword(auth, email!!, password!!)
      .then(userCredential => {
        addDoc(collection(db, 'users'), {
          id: userCredential.user.uid,
          name: form.get('name'),
          surname: form.get('surname'),
          email: form.get('email'),
          birthdate: form.get('birthdate'),
          document: form.get('document'),
          usertype: form.get('usertype'),
          isFirstAccess: true,
        })

        navigate('/create-enterprise')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <SignUpPageContainer>
      <SignUpFormCard onSubmit={handleSignUp}>
        <SignUpPageTitle>Vestfy | Cadastrar</SignUpPageTitle>

        <SignUpFormInput placeholder="Nome" name="name" />
        <SignUpFormInput placeholder="Sobrenome" name="surname" />
        <SignUpFormInput placeholder="E-mail" type="email" name="email" />
        <SignUpFormInput placeholder="Senha" type="password" name="password" />
        <SignUpFormInput
          placeholder="Data de Nascimento"
          type="date"
          name="birthdate"
        />
        <SignUpFormInput placeholder="CPF" name="document" />
        <SignUpFormInput placeholder="Tipo de Usuário" name="usertype" />

        <SignUpFormButton>Cadastrar</SignUpFormButton>

        <SignUpAlreadyHaveAccountContainer>
          <SignUpAlreadyHaveAccountLink>
            Já tem uma conta? Cadastre-se
          </SignUpAlreadyHaveAccountLink>
        </SignUpAlreadyHaveAccountContainer>
      </SignUpFormCard>
    </SignUpPageContainer>
  )
}
