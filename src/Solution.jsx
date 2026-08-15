import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import { useLang } from "./context/useLang";
import { Check } from "lucide-react";

import sampleCosmetics from "./assets/sample-cosmetics-label.jpg";
import sampleElectronics from "./assets/sample-electronics-label.png";
import sampleFood from "./assets/sample-food-label.webp";
import sampleRetail from "./assets/sample-label-box.png";
import sampleLogistic from "./assets/sample-logistics.jpg";
import samplePharma from "./assets/sample-healthcare-label.avif";
import sampleHero from "./assets/sample-label-hero.png";

import "./styles/Solution.css";

function Solution() {
  const { t } = useLang();
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const detailRef = useRef(null);

  const industries = [
    {
      id: "food-beverage",
      title: t("Food & Beverage", "Food & Beverage"),
      cardLine: t("Minuman, frozen food, kopi, saus, dan makanan kemasan.", "Beverages, frozen food, coffee, sauces, and packaged foods."),
      image: sampleFood,
      heroImage: sampleFood,
      alt: t("Contoh label pada kemasan makanan dan minuman.", "Example labels on food and beverage packaging."),
description: t(
  "Label untuk produk makanan dan minuman yang dirancang agar tampil menarik, mudah dikenali, dan tetap berkualitas dari rak hingga pengiriman.",
  "Labels for food and beverage products designed to stand out, stay recognizable, and maintain quality from shelf to delivery."
),
      applications: ["Frozen food", "Beverages", "Sauces", "Coffee", "Bakery products"],
      materials: ["PP", "PET", "Thermal", "Paper-based materials"],
      gallery: [
        { image: sampleFood, title: t("Label minuman", "Beverage labels") },
        { image: sampleRetail, title: t("Kemasan produk", "Product packaging") },
        { image: samplePharma, title: t("Label informasi produk", "Product information labels") }
      ]
    },
    {
      id: "cosmetics-personal-care",
      title: t("Cosmetics & Personal Care", "Cosmetics & Personal Care"),
      cardLine: t("Skincare, hair care, sabun, fragrance, dan personal care.", "Skincare, hair care, soap, fragrance, and personal care."),
      image: sampleCosmetics,
      heroImage: sampleCosmetics,
      alt: t("Contoh label kosmetik dan personal care.", "Example cosmetics and personal care labels."),
description: t(
  "Label kosmetik dan personal care yang memperkuat tampilan brand dengan hasil cetak berkualitas serta informasi produk yang tetap jelas dan mudah dibaca.",
  "Cosmetics and personal care labels that strengthen your brand with premium print quality and clear, easy-to-read product information."
),
      applications: ["Skincare", "Hair care", "Fragrance", "Soap", "Personal care packaging"],
      materials: ["PP", "PET", "BOPP / OPP", "Foil"],
      gallery: [
        { image: sampleCosmetics, title: t("Botol kosmetik", "Cosmetic bottles") },
        { image: sampleFood, title: t("Label brand produk", "Product branding labels") },
        { image: sampleElectronics, title: t("Label detail kecil", "Small detail labels") }
      ]
    },
    {
      id: "logistics-warehousing",
      title: t("Logistics & Warehousing", "Logistics & Warehousing"),
      cardLine: t("Pengiriman, tracking, stok, karton, dan organisasi gudang.", "Shipping, tracking, stock, cartons, and warehouse organization."),
      image: sampleLogistic,
      heroImage: sampleLogistic,
      alt: t("Contoh label logistik dan gudang.", "Example logistics and warehousing labels."),
description: t(
  "Label logistik yang membantu proses pengiriman, pelacakan, dan pengelolaan stok menjadi lebih cepat, rapi, dan efisien.",
  "Logistics labels that support faster shipping, accurate tracking, and more efficient inventory management."
),
      applications: ["Shipping cartons", "Warehouse racks", "Inventory", "Asset marking", "Sorting workflows"],
      materials: ["Thermal", "HVS", "Chromo", "PP"],
      gallery: [
        { image: sampleLogistic, title: t("Label pengiriman", "Shipping labels") },
        { image: samplePharma, title: t("Aplikasi barcode", "Barcode applications") },
        { image: sampleElectronics, title: t("Label aset", "Asset labels") }
      ]
    },
    {
      id: "retail-barcode",
      title: t("Retail & Barcode", "Retail & Barcode"),
      cardLine: t("Harga, SKU, barcode, promo, dan kebutuhan display toko.", "Price, SKU, barcode, promo, and store display needs."),
      image: sampleRetail,
      heroImage: sampleRetail,
      alt: t("Contoh label barcode untuk retail.", "Example barcode labels for retail."),
description: t(
  "Label retail yang dirancang untuk harga, barcode, dan informasi produk agar mudah dipindai, dikenali, dan tertata rapi di area penjualan.",
  "Retail labels for pricing, barcodes, and product information that are easy to scan, recognize, and organize across retail displays."
),
      applications: ["Price tags", "SKU labels", "POS labels", "Shelf labels", "Batch marking"],
      materials: ["Thermal", "Chromo", "HVS", "Paper-based materials"],
      gallery: [
        { image: sampleRetail, title: t("Label kemasan retail", "Retail packaging labels") },
        { image: sampleLogistic, title: t("Label stok retail", "Retail stock labels") },
        { image: sampleFood, title: t("Stiker promosi", "Promotional stickers") }
      ]
    },
    {
      id: "electronics",
      title: t("Electronics", "Electronics"),
      cardLine: t("Serial, rating, kabel, komponen, dan identifikasi perangkat.", "Serials, ratings, cables, components, and device identification."),
      image: sampleElectronics,
      heroImage: sampleElectronics,
      alt: t("Contoh label untuk produk elektronik.", "Example labels for electronics products."),
description: t(
  "Label elektronik dengan hasil cetak presisi untuk serial number, spesifikasi, dan identifikasi perangkat yang jelas serta tahan lama.",
  "Precision labels for serial numbers, specifications, and device identification with clear printing and lasting durability."
),
      applications: ["Device labels", "Cable labels", "Component marking", "Warning labels", "Serial labels"],
      materials: ["PET", "PP", "Vinyl", "BOPP / OPP"],
      gallery: [
        { image: sampleElectronics, title: t("Label perangkat", "Device labels") },
        { image: sampleLogistic, title: t("Label tracking", "Tracking labels") },
        { image: sampleCosmetics, title: t("Label kecil", "Small labels") }
      ]
    },
    {
      id: "healthcare-pharmaceutical",
      title: t("Healthcare / Pharmaceutical", "Healthcare / Pharmaceutical"),
      cardLine: t("Suplemen, botol kecil, klinik, batch, dan informasi produk.", "Supplements, small bottles, clinic supplies, batches, and product information."),
      image: samplePharma,
      heroImage: samplePharma,
      alt: t("Contoh label healthcare dan farmasi.", "Example healthcare and pharmaceutical labels."),
description: t(
  "Label healthcare dan farmasi yang menjaga informasi penting tetap jelas, rapi, dan mudah dibaca pada berbagai jenis kemasan.",
  "Healthcare and pharmaceutical labels that keep essential information clear, organized, and easy to read across a wide range of packaging."
),
      applications: ["Medicine bottles", "Supplements", "Healthcare packaging", "Clinic supplies", "Batch identification"],
      materials: ["Chromo", "PP", "PET", "Paper-based materials"],
      gallery: [
        { image: samplePharma, title: t("Label botol healthcare", "Healthcare bottle labels") },
        { image: sampleCosmetics, title: t("Kemasan kecil", "Small packaging") },
        { image: sampleFood, title: t("Label informasi produk", "Product information labels") }
      ]
    }
  ];

  const selected = industries[selectedIndustry];
  const activeImage = selected.gallery[activeExample] ?? selected.gallery[0];

  useEffect(() => {
    setActiveExample(0);
  }, [selectedIndustry]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveExample((current) => (current + 1) % selected.gallery.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeExample, selected.gallery.length, selectedIndustry]);

  const selectIndustry = (idx) => {
    setSelectedIndustry(idx);
    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const renderApplications = (items) => (
    <ul className="solution-check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={15} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const renderMaterials = (items) => (
    <div className="solution-materials">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );

  return (
    <>
      <Navbar />

      <main>
        <section
          className="page-intro page-intro--image"
          style={{ "--page-intro-image": `url(${sampleHero})` }}
        >
          <div className="page-intro__container">
            <div className="page-intro__grid">
              <div>
                <span className="eyebrow">{t("Solusi Label", "Label Solutions")}</span>
                <h1 style={{ marginTop: "28px" }}>
                  {t(
                    <>Menyediakan <em>solusi</em> untuk berbagai industri</>, 
                    <>Label <em>Solutions</em> Across Various Industries</>
                    )}
                </h1>
              </div>
              <p className="lead">
                {t(
                  "Jelajahi contoh penggunaan label di berbagai industri dan aplikasi. Halaman ini menunjukkan bagaimana label dapat digunakan untuk produk, kemasan, operasional, dan kebutuhan brand.",
                  "Browse examples of how labels are used across different industries and applications. This page shows how labels can support products, packaging, operations, and brand needs."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Portfolio Aplikasi", "Application Portfolio")}</span>
                <h2 className="h-1">{t("Label Untuk Berbagai Industri", "Various Labels Across Different Industries")}</h2>
                <p className="lead">
                  {t(
                    "Pilih salah satu industri untuk melihat aplikasi umum, material yang sering dipertimbangkan, dan contoh visual yang paling mendekati.",
                    "Choose an industry to view common applications, materials often considered, and the closest visual examples."
                  )}
                </p>
              </div>

              <div className="industry-gallery" aria-label={t("Pilihan industri", "Industry choices")}>
                {industries.map((industry, idx) => (
                  <button
                    type="button"
                    className={`industry-card ${selectedIndustry === idx ? "is-selected" : ""}`}
                    key={industry.id}
                    onClick={() => selectIndustry(idx)}
                    aria-pressed={selectedIndustry === idx}
                    aria-controls="industry-detail"
                  >
                    <img src={industry.image} alt={industry.alt} />
                    <span className="industry-card__overlay" />
                    <span className="industry-card__content">
                      <strong>{industry.title}</strong>
                      <span>{industry.cardLine}</span>
                    </span>
                  </button>
                ))}
              </div>

              <article className="industry-detail" id="industry-detail" ref={detailRef}>
                <div className="industry-detail__content">
                  <div className="solution-kicker">{t("Contoh aplikasi", "Application example")}</div>
                  <h2>{selected.title}</h2>
                  <p>{selected.description}</p>

                  <div className="industry-detail__groups">
                    <div>
                      <h3>{t("Aplikasi umum", "Common applications")}</h3>
                      {renderApplications(selected.applications)}
                    </div>
                    <div>
                      <h3>{t("Material sesuai", "Suitable materials")}</h3>
                      {renderMaterials(selected.materials)}
                    </div>
                  </div>
                </div>

                <div className="industry-detail__media">
                  <img src={activeImage.image} alt={activeImage.title} />
                  <section className="example-applications" aria-label={t("Contoh aplikasi", "Example applications")}>
                    <h3>{t("Contoh aplikasi", "Example applications")}</h3>
                    <div className="example-applications__grid">
                      {selected.gallery.map((example, idx) => (
                        <button
                          type="button"
                          className={`example-card ${activeExample === idx ? "is-active" : ""}`}
                          key={example.title}
                          onClick={() => setActiveExample(idx)}
                          aria-pressed={activeExample === idx}
                        >
                          <img src={example.image} alt={example.title} />
                          <span>{example.title}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            </div>
          </section>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Solution;
