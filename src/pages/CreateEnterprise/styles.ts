import styled from 'styled-components'

export const CreateEnterprisePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ecf1f8;
`
export const CreateEnterprisePageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const CreateEnterpriseFormCard = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`

export const CreateEnterpriseFormInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`

export const CreateEnterpriseFormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: #255de6;
  color: #fff;
  cursor: pointer;
`

export const CreateEnterpriseAlreadyHaveAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CreateEnterpriseAlreadyHaveAccountLink = styled.a`
  margin-left: 5px;
  color: #255de6;
  text-decoration: none;
  cursor: pointer;
`
