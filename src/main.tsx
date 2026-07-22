import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div style={{color: 'white', padding: '2rem'}}>App crashed. Check browser console for errors.</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
