import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Learn from '@/learn/Learn'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Learn />
  </StrictMode>,
)
