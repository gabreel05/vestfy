import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import CreateEnterprisePage from '../pages/CreateEnterprise'
import DashboardPage from '../pages/Dashboard/Dashboard'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/create-enterprise" element={<CreateEnterprisePage />} />
      </Routes>
    </BrowserRouter>
  )
}
