import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './comp/page/page'

createRoot(document.getElementById('page')).render(
  <StrictMode>

    <Page/>

  </StrictMode>,
)