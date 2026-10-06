import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  try {
    return decodeURIComponent(path)
  } catch {
    return path
  }
}

export default function Root() {
  const path = currentPath()

  if (path === '/privacy-policy') return <PrivacyPolicy />
  if (path === '/term-and-condition') return <TermsAndConditions />

  return <App />
}
