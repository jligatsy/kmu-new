import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import { useLang } from "./context/useLang";
import { AlarmClockCheck, ChevronRight, ClipboardCheck, HeartHandshake, Layers, NotepadText, Palette, Scissors, SwatchBook, Tags, Truck } from "lucide-react";

import "./styles/App.css";

import bg from "./assets/stack-label.png";
import hero from "./assets/paper-roll.jpg";
import pantone from './assets/pantone colors.jpg';
import indopoly from './assets/indopoly.png';
import map from "./assets/map boga adiperkasa.png";
import sbux from "./assets/sari rasa.png";
import subway from "./assets/subway.jpeg";
import supernova from "./assets/supernova.png";

import design1 from "./assets/mat-paper-sample.png";
import design3 from "./assets/kmu-semicoat.png";
import design4 from "./assets/yupo-hologram.png";
import sampleCosmetics from "./assets/sample-cosmetics-label.jpg";
import sampleElectronics from "./assets/sample-electronics-label.png";
import sampleFood from "./assets/sample-food-label.webp";
import sampleRetail from "./assets/sample-label-box.png";
import samplePharma from "./assets/sample-healthcare-label.avif";
import sampleLogistic from "./assets/sample-logistics.jpg";


const heroImages = [hero, pantone];
const logos = [indopoly, map, sbux, subway, supernova];
const marqueeLogoGroups = Array.from({ length: 6 }, () => logos).flat();

function App() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx) => setCurrent(idx);

  // const whyUs = [
  //   {
  //     icon: <NotepadText size={22} aria-hidden="true" />,
  //     title: t('Solusi Label yang Disesuaikan', 'Tailored Label Solutions'),
  //     desc: t(
  //       'Setiap label dibahas berdasarkan produk, permukaan kemasan, cara pemakaian, dan kebutuhan aplikasi pelanggan.',
  //       'Each label is discussed around the customer’s product, packaging surface, usage, and application requirements.'
  //     )
  //   },
  //   {
  //     icon: <Tags size={22} aria-hidden="true" />,
  //     title: t('Kualitas Cetak yang Konsisten', 'Consistent Print Quality'),
  //     desc: t(
  //       'Artwork, warna acuan, ukuran, dan area potong ditinjau agar hasil cetak lebih terjaga antar produksi.',
  //       'Artwork, color references, sizing, and cut areas are reviewed to help keep print results consistent across runs.'
  //     )
  //   },
  //   {
  //     icon: <AlarmClockCheck size={22} aria-hidden="true" />,
  //     title: t('Produksi yang Fleksibel', 'Flexible Production'),
  //     desc: t(
  //       'Pilihan material, ukuran, adhesive, bentuk, dan finishing dapat disesuaikan dengan kebutuhan label yang berbeda.',
  //       'Materials, sizes, adhesives, shapes, and finishing options can be adjusted for different label requirements.'
  //     )
  //   },
  //   {
  //     icon: <HeartHandshake size={22} aria-hidden="true" />,
  //     title: t('Layanan yang Dapat Diandalkan', 'Reliable Service'),
  //     desc: t(
  //       'Komunikasi dibuat jelas sejak awal, termasuk spesifikasi, estimasi, dan detail pesanan untuk produksi berikutnya.',
  //       'Communication is kept clear from the start, including specs, estimates, and order details for future production.'
  //     )
  //   }
  // ];

  const whyUs = [
  {
    icon: <NotepadText size={22} aria-hidden="true" />,
    title: t('Solusi Label yang Tepat', 'Tailored Label Solutions'),
    desc: t(
      'Setiap label dirancang sesuai produk, kemasan, penggunaan, dan kebutuhan aplikasi agar hasilnya benar-benar tepat.',
      'Every label is tailored to your product, packaging, usage, and application needs for the right fit.'
    )
  },
  {
    icon: <Tags size={22} aria-hidden="true" />,
    title: t('Hasil Cetak yang Konsisten', 'Consistent Print Quality'),
    desc: t(
      'Artwork, warna, ukuran, dan area potong diperiksa dengan teliti untuk menjaga hasil cetak tetap konsisten.',
      'Artwork, colors, sizing, and cut areas are carefully checked to deliver consistent print quality every run.'
    )
  },
  {
    icon: <AlarmClockCheck size={22} aria-hidden="true" />,
    title: t('Produksi yang Fleksibel', 'Flexible Production'),
    desc: t(
      'Material, ukuran, perekat, bentuk, dan finishing dapat disesuaikan untuk berbagai kebutuhan label Anda.',
      'Materials, sizes, adhesives, shapes, and finishing are customized to match your unique labeling requirements.'
    )
  },
  {
    icon: <HeartHandshake size={22} aria-hidden="true" />,
    title: t('Layanan yang Terpercaya', 'Reliable Service'),
    desc: t(
      'Spesifikasi, estimasi, dan detail pesanan dikomunikasikan dengan jelas agar proses berjalan lebih lancar.',
      'Specifications, estimates, and order details are communicated clearly for a smooth production experience.'
    )
  }
];
  const materialGroups = [
    {
      name: t('Paper Materials', 'Paper Materials'),
      type: t('Chromo, HVS, Kraft', 'Chromo, HVS, Kraft'),
      image: design1,
      desc: t(
        'Untuk label indoor, kemasan kering, kebutuhan retail, dan tampilan natural atau ekonomis.',
        'For indoor labels, dry packaging, retail needs, and natural or economical appearances.'
      )
    },
    {
      name: t('Synthetic Materials', 'Synthetic Materials'),
      type: t('PP / BOPP, PET, Vinyl', 'PP / BOPP, PET, Vinyl'),
      image: design3,
      desc: t(
        'Untuk produk yang membutuhkan tampilan film, fleksibilitas, atau pilihan material dengan daya tahan lebih.',
        'For products that need a film look, flexibility, or material choices with greater durability.'
      )
    },
    {
      name: t('Specialty Materials', 'Specialty Materials'),
      type: t('Thermal, Metallic Material', 'Thermal, Metallic Material'),
      image: design4,
      desc: t(
        'Untuk kebutuhan khusus seperti barcode thermal, tampilan metalik, atau aplikasi label tertentu.',
        'For specific needs such as thermal barcodes, metallic appearances, or selected label applications.'
      )
    }
  ];

  const processSteps = [
    {
      icon: <ClipboardCheck size={22} />,
      title: t('Consultation', 'Consultation'),
      desc: t('Kami memahami produk, ukuran, jumlah, dan kondisi pemakaian label.', 'We understand the product, size, quantity, and label application conditions.')
    },
    {
      icon: <Layers size={22} />,
      title: t('Label Solution', 'Label Solution'),
      desc: t('Material, adhesive, bentuk, dan finishing dibahas berdasarkan kebutuhan.', 'Material, adhesive, shape, and finishing are discussed based on the requirement.')
    },
    {
      icon: <Palette size={22} />,
      title: t('Printing', 'Printing'),
      desc: t('Label diproduksi mengikuti artwork dan spesifikasi yang sudah disepakati.', 'Labels are produced according to the agreed artwork and specifications.')
    },
    {
      icon: <Scissors size={22} />,
      title: t('Finishing', 'Finishing'),
      desc: t('Proses seperti laminasi atau potong bentuk dilakukan sesuai kebutuhan label.', 'Processes such as lamination or shape cutting are applied as needed.')
    },
    {
      icon: <Truck size={22} />,
      title: t('Delivery', 'Delivery'),
      desc: t('Label dikemas dan disiapkan untuk pengambilan atau pengiriman.', 'Labels are packed and prepared for pickup or delivery.')
    }
  ];

  const solutionCategories = [
    {
      name: 'Food & Beverage',
      desc: t(
        'Contoh kebutuhan untuk saus botol, kopi, bakery, minuman, dan frozen food.',
        'Example needs for bottled sauces, coffee, bakery products, beverages, and frozen food.'
      ),
      image: sampleFood
    },
    {
      name: 'Cosmetics & Personal Care',
      desc: t(
        'Tampilan label untuk skincare, hair care, sabun, fragrance, dan personal care.',
        'Label looks for skincare, hair care, soap, fragrance, and personal care.'
      ),
      image: sampleCosmetics
    },
    {
      name: 'Retail',
      desc: t(
        'Label produk, harga, promo, barcode, dan kebutuhan display toko.',
        'Product, price, promo, barcode, and store display labels.'
      ),
      image: sampleRetail
    },
    {
      name: 'Logistics',
      desc: t(
        'Label resi, karton, sortir gudang, stok, dan pengiriman harian.',
        'Airwaybill, carton, warehouse sorting, stock, and daily shipping labels.'
      ),
      image: sampleLogistic
    },
    {
      name: 'Healthcare',
      desc: t(
        'Label untuk suplemen, klinik, botol kecil, informasi produk, dan batch.',
        'Labels for supplements, clinic supplies, small bottles, product information, and batches.'
      ),
      image: samplePharma
    },
    {
      name: 'Electronics',
      desc: t(
        'Label untuk serial, rating, peringatan, kabel, komponen, dan identifikasi perangkat.',
        'Labels for serials, ratings, warnings, cables, components, and device identification.'
      ),
      image: sampleElectronics
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        {heroImages.map((img, idx) => (
          <div key={idx} className={`hero-slide ${current === idx ? 'is-active' : ''}`}>
            <img src={img} alt="" />
          </div>
        ))}
        
        <div className="hero-content">
          <div className="wrap">
            <div className="hero-tag">
              {t('Produsen label custom', 'Custom label manufacturer')}
            </div>
            <h1>
              {/* Wujudkan identitas produk melalui label yang tepat. */}
              {t(
                <>Label custom untuk <em>produk dan bisnis</em> Anda.</>,
                <>Custom labels for your <em>products and business</em>.</>
              )}
            </h1>
            <p className="hero-lead">
              {t(
                'PT. Kreasi Media Utama membantu bisnis memproduksi label, stiker, dan kebutuhan kemasan custom untuk berbagai industri — dari makanan dan minuman, kosmetik, retail, logistik, sampai produk operasional.',
                'PT. Kreasi Media Utama helps businesses produce custom labels, stickers, and packaging needs across industries — from food and beverage, cosmetics, retail, logistics, to operational products.'
              )}
            </p>
            <div className="hero-cta">
              <Link to="/kontak" className="btn btn-amber">
                {t('Minta Penawaran', 'Request a Quote')}
                <ChevronRight size={14} className="arrow" />
              </Link>
              <Link to="/materi" className="btn btn-light">
                {t('Lihat Katalog', 'See Catalog')}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${current === idx ? 'is-active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="hero-counter">
          <strong>{String(current + 1).padStart(2, '0')}</strong> &nbsp;/&nbsp; {String(heroImages.length).padStart(2, '0')}
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="who-section">
        <div className="wrap">
          <div className="who-grid">
            <div className="who-copy">
              <span className="eyebrow">{t('Tentang KMU', 'Who We Are')}</span>
              <h2 className="h-1">
                {t(
                  'Produksi label presisi dengan respon cepat dan solusi tepat.',
                  'Precise label production with quick response and accurate solutions.'
                )}
              </h2>
              <p className="lead">
                {t(
                  'PT. Kreasi Media Utama adalah produsen label custom yang berpengalaman membantu bisnis menyiapkan label untuk berbagai jenis produk dan kebutuhan industri. Kami bekerja dengan pendekatan yang sederhana: memahami kebutuhan produk, memilih material yang sesuai, lalu memproduksi label dengan proses yang rapi.',
                  'PT. Kreasi Media Utama is an experienced custom label manufacturer helping businesses prepare labels for many product types and industry needs. Our approach is simple: understand the product requirements, choose a suitable material, then produce labels through an orderly process.'
                )}
              </p>
            </div>
            <div className="who-photo">
              <img src={bg} alt={t('Area produksi dan penyimpanan KMU.', 'KMU production and storage area.')} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose KMU */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t('Mengapa Memilih KMU', 'Why Companies Choose KMU')}</span>
            <h2 className="h-1">
              {t(
                'Dukungan di setiap proses, memastikan hasil yang sukses.',
                'Support at every step, ensuring successful results.'
              )}
            </h2>
            <p className="lead">
              {t(
                'Kami membantu pelanggan mengambil keputusan produksi dengan jelas: material, ukuran, finishing, jadwal, dan detail repeat order.',
                'We help customers make production decisions clearly: material, size, finishing, timeline, and repeat-order details.'
              )}
            </p>
          </div>

          <div className="why-grid">
            {whyUs.map((item, idx) => (
              <article key={idx} className="why-card">
                <span className="why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Preview */}
      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t('Keahlian Material', 'Material Expertise')}</span>
            <h2 className="h-1">
              {t(
                'Label yang memikat,\ndimulai dari materi yang tepat',
                'Choosing the right material makes the label captivating.'
              )}
            </h2>
            <p className="lead">
              {t(
                'Memilih material adalah bagian penting dari solusi label. Kami membantu mempertimbangkan permukaan kemasan, kondisi penggunaan, tampilan, dan cara label akan diaplikasikan.',
                'Choosing material is an important part of a label solution. We help consider the packaging surface, usage conditions, appearance, and how the label will be applied.'
              )}
            </p>
          </div>

          <div className="materials-preview-grid">
            {materialGroups.map((mat, idx) => (
              <article key={idx} className="material-preview">
                <img className="material-preview-bg" src={mat.image} alt="" aria-hidden="true" />
                <div className="material-body">
                  <div className="material-code">{mat.type}</div>
                  <h3>{mat.name}</h3>
                  <p>{mat.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio-more">
            <Link to="/material" className="btn btn-ghost">
              {t('Pelajari Material Label', 'Explore Label Materials')}
              <ChevronRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Label Solutions Across Industries */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t('Portofolio Label', 'Label Portfolio')}</span>
            <h2 className="h-1">
              {t(
                'Sedia solusi untuk setiap industri',
                'Label Solutions Across Various Industries'
              )}
            </h2>
            <p className="lead">
              {t(
                'Berbagai industri yang sering membutuhkan label custom, dari kemasan produk hingga kebutuhan operasional.',
                'Various industries that often need custom labels, from product packaging to operational needs.'
              )}
            </p>
          </div>

          <div className="portfolio-grid">
            {solutionCategories.map((ind, idx) => (
              <article key={idx} className="portfolio-card">
                <div className="portfolio-img">
                  <img src={ind.image} alt={ind.name} />
                </div>
                <div className="portfolio-body">
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <Link to="/solusi" className="portfolio-link">
                    {t('Explore Solutions', 'Explore Solutions')}
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="portfolio-more">
            <Link to="/solusi" className="btn btn-ghost">
              {t('Lihat semua kategori solusi', 'See all solution categories')}
              <ChevronRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <div className="wrap">
          <div className="clients-head">
            <h2>
              {t(
                'Dipercaya Oleh',
                'Trusted By'
              )}
            </h2>
          </div>
        </div>
        <div className="clients-marquee">
          <div className="clients-track">
            {Array.from({ length: 2 }, (_, run) => (
              <div className="clients-run" key={run} aria-hidden={run !== 0}>
                {marqueeLogoGroups.map((logo, i) => (
                  <img
                    key={`${run}-${i}`}
                    src={logo}
                    alt={run === 0 && i < logos.length ? `Client ${i + 1}` : ""}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Production Process */}
      <section className="section production-preview-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t('Proses Sederhana', 'Simple Process')}</span>
            <h2 className="h-1">
              {t(
                'Solusi yang melebihi ekspektasi\n dimulai dari diskusi',
                'Solutions that exceeds expectations\n starts with a discussion'
              )}
            </h2>
            <p className="lead">
              {t(
                'Proses produksi label tidak perlu rumit. Kami membantu menyusun kebutuhan secara bertahap agar keputusan material, desain, dan finishing lebih jelas.',
                'Label production does not need to feel complicated. We help organize the requirements step by step so material, design, and finishing decisions are clearer.'
              )}
            </p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <article className="process-step" key={step.title}>
                <div className="process-icon">{step.icon}</div>
                <div className="process-number">{String(idx + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/produksi" className="btn btn-ghost">
              {t('Lihat Proses Produksi', 'View Production Process')}
              <ChevronRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
