import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './routes/index.tsx'

import { GlobalStyle } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Router />
    </>
  </React.StrictMode>
)
