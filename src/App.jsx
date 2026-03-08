import { useState, useEffect } from 'react';
import CountUp from "react-countup";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import {motion} from "framer-motion";
import {ChevronLeft, ChevronRight} from "lucide-react";

import "./styles/App.css";
import "./styles/Carousel.css";

import bg from "./assets/label-stacks.png";
import pantone from './assets/pantone colors.jpg';
import indopoly from './assets/indopoly.png';
import map from "./assets/map boga adiperkasa.png";
import sbux from "./assets/sari rasa.png";
import subway from "./assets/subway.jpeg";
import supernova from "./assets/supernova.png";
import giant from "./assets/logo giant.png"

import design1 from "./assets/design1.png";
import design2 from "./assets/design2.png";
import design3 from "./assets/design3.png";
import design4 from "./assets/design4.png";



const images = [bg, pantone];
const logos = [indopoly, map, sbux, subway, supernova, giant, indopoly, map, sbux, ];


function App() {

  const [current, setCurrent] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Timer for image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextS = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevS = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Timer for logo carousel
  const [logoIndex, setLogoIndex] = useState(0);
  const visibleLogos = 7;
  const totalLogos = logos.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % totalLogos);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalLogos]);

  const nextLogo = () => setLogoIndex((prev) => (prev + 1) % totalLogos);
  const prevLogo = () => setLogoIndex((prev) => (prev - 1 + totalLogos) % totalLogos);

  const displayedLogos = logos
    .slice(logoIndex, logoIndex + visibleLogos)
    .concat(logos.slice(0, Math.max(0, logoIndex + visibleLogos - totalLogos)));


  return (
    <> 
    <Navbar />

    <div className="kmu-ticker">
      <div className="kmu-ticker-text">
        KREASI MEDIA UTAMA
      </div>
    </div>


    <div className="home">
      <section className="carousel">
        <img src={images[current]} alt="slide" className="carousel-image"/>
        <button className="arrows left" onClick={prevS}> &#8249; </button>
        <button className="arrows right" onClick={nextS}> &#8250; </button>
        <div className = "dots">
          {images.map((_,idx) => (
            <span key={idx} 
                  className={`dot ${current === idx ? "active" : ""}`} 
                  onClick={() => setCurrent(idx)}> </span>
          ))}
        </div>
      </section>

      <section className="materials">
        <h2 className="materials-title">Materials</h2>

        <div className="materials-grid">
          <div className="material-card">
            <img className="material-design" src={design1} alt="" />
            <div className="material-name">HVS</div>
            <div className="material-img-placeholder" />
          </div>

          <div className="material-card">
            <img className="material-design" src={design2} alt="" />
            <div className="material-name">semicoat</div>
            <div className="material-img-placeholder" />
          </div>

          <div className="material-card">
            <img className="material-design" src={design3} alt="" />
            <div className="material-name">OPP</div>
            <div className="material-img-placeholder" />
          </div>

          <div className="material-card">
            <img className="material-design" src={design4} alt="" />
            <div className="material-name">yupo</div>
            <div className="material-img-placeholder" />
          </div>
        </div>

        <button className="materials-btn">learn more</button>
      </section>

      <section className="counters">
        <div className="circle">
          <h4> 
            <CountUp start={0} end={15} duration={5} />+ <br></br>years
          </h4>
        </div>

        <div className="circle">
          <h4>
            <CountUp start={0} end={300} duration={2} />+ <br></br>clients
          </h4>
        </div>

        <div className="circle">
          <h4> 
            <CountUp start={0} end={50000} duration={3} />+ <br></br>label rolls
          </h4>
        </div>
      </section>

      <section className="logo-carousel">
        <h2 className="logo-title">Our Clients</h2>
        <div className="carousel-wrapper">
          <button className="arrow-btn left" onClick={prevLogo}> <ChevronLeft /> </button>
          <div className="logo-track">
            {displayedLogos.map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Client logo ${i}`}
                className="logo-img"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.05}}
              />
            ))}
          </div>
          <button className="arrow-btn right" onClick={nextLogo}> <ChevronRight /> </button>
        </div>
        <br></br>
      </section>

      <section className="quality">
        <div className="service-card">
          <h3>Stickers that Sticks, Quality that Lasts</h3>
          <p>Produk kami dirancang dengan bahan berkualitas tinggi yang memastikan daya rekat kuat dan tahan lama.</p>
        </div>
        <div className="service-card">
          <h3>Handling with Precision and Care</h3>
          <p>Setiap label diproses dengan ketelitian tinggi, menjamin hasil yang rapi dan presisi sesuai kebutuhan anda.</p>
        </div>
        <div className="service-card">
          <h3>Affordable pricing in mind</h3>
          <p>Kami menyediakan solusi berkualitas dengan harga yang bersaing, memastikan nilai terbaik untuk setiap pesanan.</p>
        </div>
      </section>
      <section className="quality">
        <div className="service-card">
          <h3>Efficient Service with Reliable Results</h3>
          <p>Layanan kami cepat dan efisien, memberikan solusi yang tepat dan dapat diandalkan setiap saat.</p>
        </div>
        <div className="service-card">
          <h3>Stickers that Sticks, Quality that Lasts</h3>
          <p>Produk kami dirancang dengan bahan berkualitas tinggi yang memastikan daya rekat kuat dan tahan lama.</p>
        </div>
        <div className="service-card">
          <h3>Stickers that Sticks, Quality that Lasts</h3>
          <p>Produk kami dirancang dengan bahan berkualitas tinggi yang memastikan daya rekat kuat dan tahan lama.</p>
        </div>
      </section>

      <br />
      
    </div>
    <br>
    </br>
    <Footer />
    </>
  );
}

export default App;