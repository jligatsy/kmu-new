import { Link } from "react-router-dom";
import { useLang } from "./context/useLang";
import "./styles/Footer.css";
import kmuLogo from "./assets/kmu.png";

const whatsappUrl = "https://wa.me/19495659672";
const emailUrl = "mailto:ligatsyahj@gmail.com";
const phoneHref = "tel:+19495659672";

function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <section className="footer-cta" aria-label={t("Diskusikan kebutuhan label", "Discuss label requirements")}>
          <div>
            <h2>
              {t(
                "Mulai konsultasi\n untuk solusi yang pasti",
                "Start a consultation\nto find the right solution"
              )}
            </h2>
            <p>
              {t(
                "Ceritakan produk dan kebutuhan label Anda.",
                "Tell us about your product and label requirements."
              )}
            </p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/kontak" className="footer-btn footer-btn-primary">
              {t("Diskusikan Kebutuhan Label", "Discuss Label Requirements")}
            </Link>
            <a href={whatsappUrl} className="footer-btn footer-btn-secondary">
              {t("Chat WhatsApp", "WhatsApp Chat")}
            </a>
          </div>
        </section>

        <div className="footer-grid" aria-label={t("Informasi footer", "Footer information")}>
          <div className="footer-brand">
            <img src={kmuLogo} alt="KMU" />
            <strong>PT Kreasi Media Utama</strong>
            <p>
              {t(
                "Manufaktur label custom untuk kebutuhan kemasan dan operasional di berbagai industri.",
                "Custom label manufacturing for packaging and operational needs across various industries."
              )}
            </p>
          </div>

          <nav aria-label={t("Navigasi footer", "Footer navigation")}>
            <h4>{t("Navigasi", "Navigation")}</h4>
            <ul>
              <li><Link to="/">{t("Beranda", "Home")}</Link></li>
              <li><Link to="/solusi">{t("Solusi", "Solutions")}</Link></li>
              <li><Link to="/materi">{t("Material", "Materials")}</Link></li>
              <li><Link to="/produksi">{t("Produksi", "Production")}</Link></li>
              <li><Link to="/kontak">{t("Kontak", "Contact")}</Link></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4>{t("Kontak", "Contact")}</h4>
            <address>
              {/* <a href={mapLink}>
                Jl. Jembatan Tiga Raya No. 36AS, Komplek Ruko Tama Indah, Penjaringan, Jakarta Utara 14440
              </a> */}
              <span>{t("Senin-Jumat, 08.00-17.00 WIB", "Monday-Friday, 08:00-17:00 WIB")}</span>
              <a href={emailUrl}>kreasimediautama@gmail.com</a>
              <a href={whatsappUrl}>WhatsApp: +62 xxx</a>
              <a href={phoneHref}>+62 xxx</a>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} PT Kreasi Media Utama</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
