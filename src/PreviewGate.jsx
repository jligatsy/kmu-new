import { useState } from 'react';
import './styles/PreviewGate.css';

// Replace this with your SHA-256 hash. Browser console helper:
// crypto.subtle.digest("SHA-256", new TextEncoder().encode("your-password")).then(hash => console.log([...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("")))
const PREVIEW_PASSWORD_HASH = '53ed61a95054b350841499e7cfad5d72f72c2e71927180a41ad46766383d1a20';

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hashBuffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function PreviewGate({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(
    () => sessionStorage.getItem(PREVIEW_PASSWORD_HASH) === 'unlocked',
  );
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsChecking(true);

    try {
      const candidateHash = await sha256(password);

      if (candidateHash === PREVIEW_PASSWORD_HASH) {
        sessionStorage.setItem(PREVIEW_PASSWORD_HASH, 'unlocked');
        setIsUnlocked(true);
        return;
      }

      setError('Password salah. Silakan coba lagi.');
    } catch {
      setError('Tidak dapat memeriksa password di browser ini.');
    } finally {
      setIsChecking(false);
    }
  };

  if (isUnlocked) {
    return children;
  }

  return (
    <main className="preview-gate" aria-labelledby="preview-gate-title">
      <section className="preview-gate__panel">
        <p className="preview-gate__eyebrow">PT. Kreasi Media Utama</p>
        <h1 id="preview-gate-title">Private Preview</h1>
        <p className="preview-gate__lead">
          Situs ini sedang dalam tahap pengerjaan. Masukkan password untuk melihat preview.
        </p>

        <form className="preview-gate__form" onSubmit={handleSubmit}>
          <label htmlFor="preview-password">Password</label>
          <input
            id="preview-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            autoFocus
          />
          {error ? <p className="preview-gate__error">{error}</p> : null}
          <button className="btn btn-primary" type="submit" disabled={isChecking}>
            {isChecking ? 'Memeriksa...' : 'Masuk'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default PreviewGate;
