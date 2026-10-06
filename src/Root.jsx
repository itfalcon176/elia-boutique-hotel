import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-and-condition" element={<TermsAndConditions />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
