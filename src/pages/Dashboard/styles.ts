import styled from 'styled-components'

export const DashboardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ecf1f8;
`

export const DashboardPageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const DashboardSignOutButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  background-color: #255de6;
  color: #fff;
  cursor: pointer;
`

export const DashboardNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const DashboardPageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`

export const DashboardEnterpriseEmail = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const DashboardVestingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`

export const DashboardVestingValueLabel = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const DashboardVestingValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const DashboardVestingDateLabel = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const DashboardVestingDate = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
