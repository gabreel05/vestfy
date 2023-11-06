import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import auth from '../../services/auth'
import db from '../../services/database'

import {
  CreateEnterpriseFormButton,
  CreateEnterpriseFormCard,
  CreateEnterpriseFormInput,
  CreateEnterprisePageContainer,
  CreateEnterprisePageTitle,
} from './styles'

export default function CreateEnterprisePage() {
  const navigate = useNavigate()

  function handleCreateEnterprise(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    onAuthStateChanged(auth, user => {
      addDoc(collection(db, 'enterprises'), {
        id: user?.uid,
        name: form.get('name'),
        country: form.get('country'),
        email: form.get('email'),
        foundationdate: form.get('foundationdate'),
        document: form.get('document'),
      })
    })

    navigate('/sign-in')
  }

  return (
    <CreateEnterprisePageContainer>
      <CreateEnterpriseFormCard onSubmit={handleCreateEnterprise}>
        <CreateEnterprisePageTitle>
          Vestfy | Cadastrar
        </CreateEnterprisePageTitle>

        <CreateEnterpriseFormInput placeholder="Nome" name="name" />
        <CreateEnterpriseFormInput placeholder="País" name="country" />
        <CreateEnterpriseFormInput
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <CreateEnterpriseFormInput
          placeholder="Senha"
          type="password"
          name="password"
        />
        <CreateEnterpriseFormInput
          placeholder="Data de fundação"
          type="date"
          name="foundationdate"
        />
        <CreateEnterpriseFormInput placeholder="CNPJ" name="document" />
        <CreateEnterpriseFormInput
          placeholder="Valor do Vesting"
          name="vestingValue"
        />
        <CreateEnterpriseFormInput
          placeholder="Data do Vesting"
          name="vestingDate"
          type="date"
        />

        <CreateEnterpriseFormButton>Cadastrar</CreateEnterpriseFormButton>
      </CreateEnterpriseFormCard>
    </CreateEnterprisePageContainer>
  )
}
