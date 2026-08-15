import { useState, useEffect } from 'react';
import LanguageContext from './language';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('kmu-lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('kmu-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = (newLang) => {
    setLang(newLang);
  };

  const t = (id, en) => (lang === 'id' ? id : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
