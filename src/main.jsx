import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import './styles/design-system.css'
import './styles/index.css'
import App from './App.jsx'
import Solution from './Solution.jsx'
import Material from './Material.jsx'
import Production from './Production.jsx'
import Contact from './Contact.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import PreviewGate from './PreviewGate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreviewGate>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/solusi" element={<Solution />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/materi" element={<Material />} />
            <Route path="/material" element={<Material />} />
            <Route path="/produksi" element={<Production />} />
            <Route path="/production" element={<Production />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </PreviewGate>
  </StrictMode>,
)
