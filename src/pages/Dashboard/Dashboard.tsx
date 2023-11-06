import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

import db from '../../services/database'

import {
  DashboardEnterpriseEmail,
  DashboardNavBar,
  DashboardPageCard,
  DashboardPageContainer,
  DashboardPageTitle,
  DashboardSignOutButton,
  DashboardVestingCard,
  DashboardVestingDate,
  DashboardVestingDateLabel,
  DashboardVestingValue,
  DashboardVestingValueLabel,
} from './styles'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../../services/auth'

export default function DashboardPage() {
  const navigate = useNavigate()

  const [enterprise, setEnterprise] = useState('')
  const [email, setEmail] = useState('')
  const [vestingValue, setVestingValue] = useState('')
  const [vestingDate, setVestingDate] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const uid = user?.uid

      if (uid) {
        const unsubscribe = onSnapshot(
          query(collection(db, 'enterprises'), where('id', '==', uid)),
          snapshot => {
            const data = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }))

            setEnterprise(data[0].name)
            setEmail(data[0].email)
            setVestingValue(data[0].vestingValue)
            setVestingDate(data[0].vestingDate)
          }
        )

        return () => unsubscribe()
      }
    })
  }, [])

  function handleSignOut() {
    auth.signOut()

    navigate('/sign-in')
  }

  return (
    <DashboardPageContainer>
      <DashboardNavBar>
        <DashboardPageTitle>{enterprise}</DashboardPageTitle>
        <DashboardSignOutButton onClick={handleSignOut}>
          Sair
        </DashboardSignOutButton>

        <DashboardPageCard>
          <DashboardEnterpriseEmail>{email}</DashboardEnterpriseEmail>

          <DashboardVestingCard>
            <DashboardVestingValueLabel>
              Valor do Vesting:
            </DashboardVestingValueLabel>
            <DashboardVestingValue>{vestingValue}</DashboardVestingValue>
            <br />
            <DashboardVestingDateLabel>
              Data do Vesting:
            </DashboardVestingDateLabel>
            <DashboardVestingDate>{vestingDate}</DashboardVestingDate>
          </DashboardVestingCard>
        </DashboardPageCard>
      </DashboardNavBar>
    </DashboardPageContainer>
  )
}
