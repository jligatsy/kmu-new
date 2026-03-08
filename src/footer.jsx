import React from "react";
import "./styles/Footer.css";
import kmuLogo from "./assets/kmu.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={kmuLogo} alt="KMU logo" className="footer-logo" />
          <p>Kreasi Media Utama</p>
        </div>

        <div className="footer-center">
          <p>Jl. Jembatan Tiga Raya No. 36AS</p>
          <p>Komplek Ruko Tama Indah, RT.1/RW.16</p>
          <p>Penjaringan, Kecamatan Penjaringan, Jakarta Utara,</p>
          <p>Daerah Khusus Ibukota Jakarta 14440, Indonesia</p>
        </div>

        <div className="footer-right">
          <div className="footer-icon"><Mail size={22} /></div>
          <div className="footer-icon"><MapPin size={22} /></div>
          <div className="footer-icon"><Phone size={22} /></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
