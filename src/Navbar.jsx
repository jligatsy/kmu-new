import { Link, useLocation } from 'react-router-dom';
import { useLang } from './context/useLang';
import kmu from './assets/kmu.png';
import './styles/Navbar.css';

function Navbar() {
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          <img src={kmu} alt="KMU" />
          <span className="nav-brand-name">
            <span className="pt">PT</span>
            <span>KREASI MEDIA UTAMA</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              {t('Beranda', 'Home')}
            </Link>
          </li>
          <li>
            <Link to="/solusi" className={isActive('/solusi') || isActive('/solution') ? 'active' : ''}>
              {t('Solusi', 'Solutions')}
            </Link>
          </li>
          <li>
            <Link to="/materi" className={isActive('/materi') || isActive('/material') ? 'active' : ''}>
              {t('Materi', 'Materials')}
            </Link>
          </li>
          <li>
            <Link to="/produksi" className={isActive('/produksi') || isActive('/production') ? 'active' : ''}>
              {t('Produksi', 'Production')}
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'id' ? 'is-active' : ''}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Link to="/kontak" className="btn btn-primary nav-cta">
            {t('Hubungi Kami', 'Get in Touch')}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
