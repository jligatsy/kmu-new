import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import { useLang } from "./context/useLang";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import sampleHero from "./assets/sample-label-hero.png";
import "./styles/Contact.css";

// const whatsappUrl = "https://wa.me/6281211295355";
const whatsappUrl = "https://wa.me/19495659672";
const emailUrl = "mailto:ligatsyahj@gmail.com";
const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=106.7780%2C-6.1450%2C106.7980%2C-6.1290&layer=mapnik&marker=-6.1370%2C106.7880";

function Contact() {
  const { t } = useLang();

  const details = [
    {
      icon: <MapPin size={18} />,
      label: t("Lokasi", "Location"),
      value: "Jl. Jembatan Tiga Raya No. 36AS, Komplek Ruko Tama Indah, Penjaringan, Jakarta Utara 14440"
    },
    {
      icon: <Clock size={18} />,
      label: t("Jam operasional", "Operating hours"),
      value: t("Senin-Jumat <br /> 08.00-17.00 WIB", "Monday-Saturday, 08:00-17:00 WIB")
    },
    {
      icon: <Phone size={18} />,
      label: t("Telepon", "Phone"),
      value: "+62 xxx"
    }
  ];

  return (
    <>
      <Navbar />

      <main>
      <section
        className="page-intro page-intro--image contact-hero"
        style={{ "--page-intro-image": `url(${sampleHero})` }}
      >
        <div className="page-intro__container">
          <div className="page-intro__grid">
            <div>
              <span className="eyebrow">{t("Hubungi Kami", "Get in Touch")}</span>
              <h1 style={{ marginTop: "28px" }}>
                {t(
                  <>Diskusi label, material, dan <em>estimasi produksi</em>.</>,
                  <>Discuss labels, materials, and <em>production estimates</em>.</>
                )}
              </h1>
            </div>
              <p className="lead">
                {t(
                  "Kirim kebutuhan label Anda lewat WhatsApp atau email. Kunjungan ke kantor dan pabrik dapat dijadwalkan terlebih dahulu agar tim kami dapat menyiapkan pembahasan yang sesuai.",
                  "Send your label requirements through WhatsApp or email. Factory and office visits can be scheduled in advance so our team can prepare the right discussion."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <section className="section contact-location-section">
            <div className="wrap">
              <div className="contact-location-head">
                <div>
                  <span className="eyebrow">{t("Lokasi", "Location")}</span>
                  <h2 className="h-1">
                    {t("Lokasi dan kontak utama.", "Location and main contact.")}
                  </h2>
                </div>
                <p className="lead">
                  {t(
                    "Kami berada di Penjaringan, Jakarta Utara. WhatsApp adalah cara tercepat untuk mengirim kebutuhan label, menanyakan jadwal, atau mengatur kunjungan.",
                    "We are located in Penjaringan, North Jakarta. WhatsApp is the fastest way to send label requirements, ask about schedules, or arrange a visit."
                  )}
                </p>
          </div>

          <div className="contact-location-grid">
            <div className="contact-map">
              <iframe
                title="Lokasi PT. Kreasi Media Utama"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-pin-card">
                <MapPin size={18} />
                <div>
                  <strong>PT. Kreasi Media Utama</strong>
                  <span>Jl. Jembatan Tiga Raya 36AS</span>
                </div>
              </div>
            </div>

                <aside className="contact-detail-panel">
                  <div className="contact-panel-head">
                    <span>{t("Kontak pabrik", "Factory contact")}</span>
                    <h3>PT. Kreasi Media Utama</h3>
                  </div>

                  <div className="contact-panel-actions">
                    <a href={whatsappUrl} className="contact-whatsapp">
                      <MessageCircle size={18} />
                      {t("Chat WhatsApp", "Chat on WhatsApp")}
                    </a>
                    <a href={emailUrl} className="contact-email">
                      <Mail size={17} />
                      {t("Kirim Email", "Send Email")}
                    </a>
                  </div>

                  {details.map((item) => (
                  <div className="contact-detail" key={item.label}>
                      <div className="contact-detail-icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail-label">{item.label}</div>
                    <p dangerouslySetInnerHTML={{ __html: item.value }}></p>
                  </div>
                    </div>
                  ))}

                  
                </aside>
              </div>
        </div>
      </section>

      </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
