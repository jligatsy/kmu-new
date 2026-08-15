import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import { useLang } from "./context/useLang";
import { CheckCircle2, ClipboardCheck, Layers, Palette, Scissors, Truck } from "lucide-react";

import sampleCosmetics from "./assets/sample-cosmetics-label.jpg";
import sampleElectronics from "./assets/sample-electronics-label.avif";
import sampleFood from "./assets/sample-food.webp";
import sampleFrozen from "./assets/sample-frozen-label.avif";
import samplePharma from "./assets/sample-healthcare-label.avif";
import sampleHero from "./assets/sample-production-hero.png";
import printmachine from "./assets/intermitten-machine.png";
import ondamachine from "./assets/onda-machine.png";
import iwazaki from "./assets/iwazaki-machine.png";


import "./styles/Production.css";

function Production() {
  const { t } = useLang();

  const workflow = [
    {
      icon: <ClipboardCheck size={22} />,
      title: t("Consultation", "Consultation"),
      desc: t(
        "Artwork, ukuran, materi, dan produksi ditinjau sesuai dengan kebutuhan.",
        "Customer artwork, dimensions, materials, and production requirements are reviewed to ensure they meet the needs."
      )
    },
    {
      icon: <Palette size={22} />,
      title: t("Printing", "Printing"),
      desc: t(
        "Label diproduksi dengan proses cetak sesuai dengan jumlah dan kebutuhan.",
        "Labels are produced using the printing process suited to the order quantity and requirements."
      )
    },
    {
      icon: <Scissors size={22} />,
      title: t("Finishing", "Finishing"),
      desc: t(
        "Laminasi, die cutting, atau finishing lain diterapkan sesuai spesifikasi pelanggan.",
        "Lamination, die cutting, or other finishing processes are applied according to customer specifications."
      )
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: t("Final Inspection", "Final Inspection"),
      desc: t(
        "Label yang sudah selesai diperiksa kembali sebelum dikemas untuk pengiriman.",
        "Finished labels are reviewed before packing and delivery preparation."
      )
    },
    {
      icon: <Truck size={22} />,
      title: t("Ready for Delivery", "Ready for Delivery"),
      desc: t(
        "Label dikemas dan disiapkan untuk pengambilan atau pengiriman.",
        "Labels are packed and prepared for pickup or delivery."
      )
    }
  ];

  const equipment = [
    {
      image: printmachine,
      category: t("Flexographic Printing", "Flexographic Printing"),
      desc: t(
        "Digunakan untuk produksi label roll berulang dengan proses yang efisien untuk pesanan yang sesuai.",
        "Used for repeat roll-label production with an efficient process for suitable orders."
      )
    },
    {
      image: ondamachine,
      category: t("Laminating", "Laminating"),
      desc: t(
        "Digunakan untuk menambahkan lapisan permukaan tertentu sesuai tampilan dan kebutuhan pemakaian label.",
        "Used to add selected surface layers based on label appearance and usage needs."
      )
    },
    {
      image: iwazaki,
      category: t("Die Cutting", "Die Cutting"),
      desc: t(
        "Digunakan untuk membentuk label sesuai ukuran dan bentuk yang dibutuhkan pelanggan.",
        "Used to form labels according to the customer’s required size and shape."
      )
    }
  ];

  const finishedProducts = [
    { image: sampleFood, alt: t("Contoh label makanan dan minuman.", "Example food and beverage labels.") },
    { image: sampleCosmetics, alt: t("Contoh label kosmetik dan personal care.", "Example cosmetics and personal care labels.") },
    { image: sampleHero, alt: t("Contoh label logistik dan barcode.", "Example logistics and barcode labels.") },
    { image: samplePharma, alt: t("Contoh label healthcare dan farmasi.", "Example healthcare and pharmaceutical labels.") },
    { image: sampleFrozen, alt: t("Contoh label frozen food.", "Example frozen food labels.") },
    { image: sampleElectronics, alt: t("Contoh label elektronik.", "Example electronics labels.") }
  ];

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
                <span className="eyebrow">{t("Proses Produksi", "Production Process")}</span>
                <h1 style={{ marginTop: "28px" }}>
                  {t(
                    <>Dari pemilihan material sampai <em>label selesai</em>.</>,
                    <>From material selection to <em>finished labels</em>.</>
                  )}
                </h1>
              </div>
              <p className="lead">
                  {t(
                  "KMU memproduksi label custom melalui proses yang rapi dan praktis: artwork ditinjau, material dipilih, label dicetak, finishing dilakukan, lalu hasil akhir diperiksa sebelum dikemas.",
                  "KMU produces custom labels through a practical, orderly process: artwork is reviewed, materials are selected, labels are printed, finishing is applied, and finished work is checked before packing."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <section className="section cream">
            <div className="wrap">
              <div className="production-intro">
                <span className="eyebrow">{t("Alur Produksi", "Production Workflow")}</span>
                <h2 className="h-1">
                  {t(
                    "Proses yang jelas membantu hasil label tetap konsisten.",
                    "A clear process helps keep label results consistent."
                  )}
                </h2>
                <p className="lead">
                  {t(
                    "Setiap proyek dimulai dari kebutuhan nyata: bentuk kemasan, kondisi penggunaan, jumlah, desain, dan jadwal. Dari sana, proses produksi disusun dengan pertimbangan material, finishing, dan cara label akan digunakan.",
                    "Every project starts with real needs: packaging shape, usage conditions, quantity, design, and timeline. From there, production is arranged with material, finishing, and label application in mind."
                  )}
                </p>
              </div>

              <div className="workflow">
                {workflow.map((step, idx) => (
                  <article className="workflow-step" key={step.title}>
                    <div className="workflow-icon">{step.icon}</div>
                    <div className="workflow-index">{String(idx + 1).padStart(2, "0")}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* <section className="section">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Kapabilitas Produksi", "Production Capabilities")}</span>
                <h2 className="h-1">{t("Yang bisa kami bantu produksi.", "What we can help produce.")}</h2>
              </div>

              <div className="production-capabilities">
                {capabilities.map((item) => (
                  <article className="production-card" key={item.title}>
                    <PackageCheck size={22} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section> */}

          <section className="section cream">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Peralatan Pendukung", "Selected Equipment")}</span>
                <h2 className="h-1">{t("Peralatan tepat, hasil hebat.", "Right Tools, Great Results")}</h2>
                <p className="lead">
                  {t(
                    "Peralatan mendukung proses produksi, tetapi keputusan utama tetap pada pemilihan material yang sesuai, persiapan artwork yang benar, dan pengerjaan yang teliti.",
                    "Equipment supports the production process, but the important decisions remain suitable material selection, proper artwork preparation, and careful workmanship."
                  )}
                </p>
              </div>

              <div className="equipment-grid">
                {equipment.map((item) => (
                  <article className="equipment-card" key={item.category}>
                    <div className="equipment-photo">
                      <img src={item.image} alt={item.category} />
                    </div>
                    <div className="equipment-body">
                      <h3>{item.category}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Hasil Produksi", "Finished Products")}</span>
                <h2 className="h-1">{t("Contoh label dan kemasan yang selesai diproduksi.", "Examples of finished labels and packaging.")}</h2>
              </div>

              <div className="finished-gallery">
                {finishedProducts.map((item) => (
                  <img src={item.image} alt={item.alt} key={item.alt} />
                ))}
              </div>
            </div>
          </section>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Production;
