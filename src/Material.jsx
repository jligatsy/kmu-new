import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import { useLang } from "./context/useLang";

import chromo from "./assets/mat-paper-sample.png";
import thermal from "./assets/mat-thermal-sample.jpg";
import hologram from "./assets/yupo-hologram.png";
import hvs from "./assets/mat-hvs-sample.webp";
import kraft from "./assets/mat-kraft-sample.webp";
import bopp from "./assets/mat-bopp-sample.avif";
import pet from "./assets/mat-pet-sample.jpeg";
import vinyl from "./assets/mat-vinyl-sample.png";
import sampleHero from "./assets/sample-material-hero.png";

import "./styles/Material.css";

function Material() {
  const { t } = useLang();

  const materialGroups = [
    {
      group: t("Paper Materials", "Paper Materials"),
      materials: [
        {
          id: "chromo",
          name: "Chromo",
          type: t("Coated paper", "Coated paper"),
          characteristic: t("Permukaan coated dengan tampilan bersih.", "Coated surface with a clean appearance."),
          application: t("Label retail, makanan, dan produk harian.", "Retail, food, and everyday product labels."),
          category: t("Paper", "Paper"),
          overviewText: t("Kertas coated halus untuk kemasan retail dan produk harian.", "Smooth coated paper for retail packaging and everyday products."),
          commonUses: t("Retail • Makanan • Consumer Products", "Retail • Food • Consumer Products"),
          image: chromo,
          description: t(
            "Chromo adalah kertas label dengan permukaan coated yang terlihat halus dan bersih. Umum dipakai untuk label produk retail dan kemasan harian; kurang ideal untuk lingkungan yang sering lembap tanpa pelindung tambahan.",
            "Chromo is a paper label material with a smooth coated surface and clean appearance. It is commonly used for retail products and everyday packaging; it is less ideal for frequently damp environments without added protection."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Kertas coated", "Coated paper") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Halus, putih, bersih", "Smooth, white, clean") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Sesuai untuk penggunaan indoor umum", "Suitable for general indoor use") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Retail, makanan kering, kemasan harian", "Retail, dry food, everyday packaging") }
          ]
        },
        {
          id: "hvs",
          name: "HVS",
          type: t("Uncoated paper", "Uncoated paper"),
          characteristic: t("Matte natural dan mudah ditulis.", "Natural matte surface that is easy to write on."),
          application: t("Label harga, pengiriman, dan produk kering.", "Price tags, shipping, and dry goods."),
          category: t("Paper", "Paper"),
          overviewText: t("Kertas matte natural yang praktis untuk label operasional.", "Natural matte paper for practical operational labels."),
          commonUses: t("Harga • Pengiriman • Catatan", "Price • Shipping • Notes"),
          image: hvs,
          description: t(
            "HVS adalah kertas uncoated dengan tampilan matte yang natural. Material ini mudah ditulis dan sering dipakai untuk label operasional sederhana; tampilannya tidak sehalus kertas coated.",
            "HVS is an uncoated paper with a natural matte look. It is easy to write on and often used for simple operational labels; its appearance is less polished than coated paper."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Kertas uncoated", "Uncoated paper") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Matte, natural, bisa ditulis", "Matte, natural, writable") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Sesuai untuk penggunaan indoor dan kering", "Suitable for dry indoor use") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Label harga, pengiriman, catatan operasional", "Price tags, shipping, operational notes") }
          ]
        },
        {
          id: "kraft",
          name: "Kraft",
          type: t("Natural paper", "Natural paper"),
          characteristic: t("Tekstur hangat dengan karakter natural.", "Warm texture with a natural character."),
          application: t("Kemasan artisanal dan brand organik.", "Artisanal packaging and organic brands."),
          category: t("Paper", "Paper"),
          overviewText: t("Kertas natural dengan karakter hangat untuk tampilan artisanal.", "Natural paper with a warm character for artisanal looks."),
          commonUses: t("Artisanal • Organik • Makanan kering", "Artisanal • Organic • Dry Food"),          image: kraft,
          description: t(
            "Kraft adalah kertas dengan warna dan tekstur natural. Material ini sering dipilih untuk kemasan yang ingin terlihat sederhana atau artisanal; warna dasar kraft dapat memengaruhi tampilan warna cetak.",
            "Kraft is a paper material with a natural color and texture. It is often chosen for packaging that needs a simple or artisanal feel; the kraft base color can affect printed color appearance."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Kertas kraft", "Kraft paper") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Natural, hangat, bertekstur", "Natural, warm, textured") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Sesuai untuk penggunaan indoor dan kering", "Suitable for dry indoor use") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Kemasan artisanal, makanan kering, brand natural", "Artisanal packaging, dry food, natural brands") }
          ]
        }
      ]
    },
    {
      group: t("Synthetic Materials", "Synthetic Materials"),
      materials: [
        {
          id: "pp-bopp",
          name: "PP / BOPP",
          type: t("Synthetic film", "Synthetic film"),
          characteristic: t("Film sintetis dengan tampilan bening atau putih.", "Synthetic film with clear or white appearance."),
          application: t("Botol, kosmetik, minuman, dan produk basah.", "Bottles, cosmetics, beverages, and wet products."),
          category: t("Synthetic", "Synthetic"),
          overviewText: t("Film sintetis bening atau putih untuk tampilan label yang rapi.", "Clear or white synthetic film for a clean label appearance."),
          commonUses: t("Botol • Kosmetik • Minuman", "Bottles • Cosmetics • Beverages"),          image: bopp,
          description: t(
            "PP dan BOPP/OPP adalah film polypropylene untuk label dengan tampilan bening, putih, atau film. Material ini umum dipakai pada botol, kosmetik, minuman, dan kemasan yang rentan lembap; kecocokan akhir tetap bergantung pada adhesive, permukaan, dan lingkungan.",
            "PP and BOPP/OPP are polypropylene films for clear, white, or film-style labels. They are commonly used on bottles, cosmetics, beverages, and moisture-prone packaging; final suitability depends on adhesive, surface, and environment."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Film polypropylene", "Polypropylene film") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Bening, putih, atau film", "Clear, white, or film-like") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Dipilih untuk aplikasi yang membutuhkan daya tahan lebih", "Selected for applications requiring greater durability") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Botol, kosmetik, minuman, kemasan lembap", "Bottles, cosmetics, beverages, moisture-prone packaging") }
          ]
        },
        {
          id: "pet",
          name: "PET",
          type: t("Synthetic film", "Synthetic film"),
          characteristic: t("Film sintetis dengan karakter lebih kokoh.", "Synthetic film with a sturdier character."),
          application: t("Label industri, elektronik, dan produk khusus.", "Industrial, electronics, and specialty labels."),
          category: t("Synthetic", "Synthetic"),
          overviewText: t("Film synthetic dengan karakter lebih kokoh untuk label fungsional.", "Synthetic film with a sturdier character for functional labels."),
          commonUses: t("Elektronik • Industri • Informasi", "Electronics • Industrial • Information"),          image: pet,
          description: t(
            "PET adalah film synthetic yang terasa lebih kokoh dibanding banyak material kertas. Umum dipilih untuk label yang membutuhkan tampilan rapi dan daya tahan lebih; spesifikasi akhir perlu dicocokkan dengan kondisi pemakaian.",
            "PET is a synthetic film that feels sturdier than many paper materials. It is commonly selected for labels needing a clean appearance and greater durability; final specs should be matched to usage conditions."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Film polyester", "Polyester film") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Rapi, stabil, sintetis", "Clean, stable, synthetic") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Dipilih untuk aplikasi yang membutuhkan daya tahan lebih", "Selected for applications requiring greater durability") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Elektronik, industri, label informasi", "Electronics, industrial, information labels") }
          ]
        },
        {
          id: "vinyl",
          name: "Vinyl",
          type: t("Flexible synthetic", "Flexible synthetic"),
          characteristic: t("Lentur untuk pemakaian yang lebih berat.", "Flexible for heavier-use applications."),
          application: t("Outdoor, promosi, dan permukaan bergesekan.", "Outdoor, promotion, and high-contact surfaces."),
          category: t("Synthetic", "Synthetic"),
          overviewText: t("Material sintetis lentur untuk stiker dan aplikasi lebih berat.", "Flexible synthetic material for stickers and heavier-use applications."),
          commonUses: t("Promosi • Aset • Outdoor tertentu", "Promotion • Assets • Selected Outdoor"),
          image: vinyl,
          description: t(
            "Vinyl adalah material sintetis lentur yang sering digunakan untuk stiker atau label dengan kebutuhan fisik lebih berat. Cocok dipertimbangkan untuk promosi, aset, atau area yang sering tersentuh; kecocokan akhir bergantung pada permukaan dan lingkungan.",
            "Vinyl is a flexible synthetic material often used for stickers or labels with heavier physical demands. It is worth considering for promotion, assets, or frequently handled areas; final suitability depends on surface and environment."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Sintetis lentur", "Flexible synthetic") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Fleksibel, tersedia dalam beberapa tampilan", "Flexible, available in several appearances") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Dipilih untuk aplikasi yang membutuhkan daya tahan lebih", "Selected for applications requiring greater durability") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Stiker promosi, aset, penggunaan luar ruang tertentu", "Promotional stickers, assets, selected outdoor use") }
          ]
        }
      ]
    },
    {
      group: t("Specialty Materials", "Specialty Materials"),
      materials: [
        {
          id: "thermal",
          name: "Thermal",
          type: t("Direct print stock", "Direct print stock"),
          characteristic: t("Siap cetak thermal tanpa ribbon.", "Thermal-ready printing without ribbon."),
          application: t("Barcode, logistik, timbangan, dan operasional.", "Barcode, logistics, weighing scales, and operations."),
          category: t("Specialty", "Specialty"),
          overviewText: t("Material untuk cetak thermal pada kebutuhan barcode dan operasional.", "Material for thermal printing in barcode and operational uses."),
          commonUses: t("Barcode • Resi • Timbangan", "Barcode • Receipts • Scales"),          
          image: thermal,
          description: t(
            "Thermal adalah material yang dapat dicetak dengan printer thermal tertentu tanpa ribbon. Umum digunakan untuk barcode, resi, timbangan, dan label operasional jangka pendek; hasilnya perlu disesuaikan dengan printer dan kondisi penyimpanan.",
            "Thermal is a material that can be printed with certain thermal printers without ribbon. It is commonly used for barcodes, receipts, weighing scales, and short-term operational labels; results should be matched to printer and storage conditions."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Material direct thermal", "Direct thermal stock") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Putih, fungsional, untuk cetak thermal", "White, functional, for thermal printing") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Umum untuk kebutuhan operasional jangka pendek", "Common for short-term operational use") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Barcode, resi, timbangan, logistik", "Barcodes, receipts, scales, logistics") }
          ]
        },
        {
          id: "metallic-foil",
          name: "Metallic",
          type: t("Metallic-faced material", "Metallic-faced material"),
          characteristic: t("Permukaan metalik; berbeda dari hot foil finishing.", "Metallic surface; different from hot foil finishing."),
          application: t("Kosmetik, hampers, dan edisi khusus.", "Cosmetics, hampers, and special editions."),
          category: t("Specialty", "Specialty"),
          overviewText: t("Material berpermukaan metalik untuk tampilan yang lebih mencolok.", "Metallic-faced material for a more distinctive appearance."),
          commonUses: t("Kosmetik • Hampers • Edisi khusus", "Cosmetics • Hampers • Special Editions"),          
          image: hologram,
          description: t(
            "Metallic material memiliki permukaan dasar yang memberi efek kilap metalik. Ini berbeda dari foil finishing, yaitu proses tambahan di area tertentu. Material ini umum dipakai untuk label kosmetik, hampers, atau edisi khusus; desain warna perlu disesuaikan dengan permukaan reflektif.",
            "Metallic material has a base surface that creates a metallic shine. This is different from foil finishing, which is an added process on selected areas. It is commonly used for cosmetics, hampers, or special editions; color design should account for the reflective surface."
          ),
          specs: [
            { label: t("Jenis Material", "Material Type"), value: t("Material berpermukaan metalik", "Metallic-faced material") },
            { label: t("Permukaan / Tampilan", "Surface / Appearance"), value: t("Reflektif, metalik, mencolok", "Reflective, metallic, distinctive") },
            { label: t("Daya Tahan Umum", "General Durability"), value: t("Kecocokan akhir bergantung pada desain dan aplikasi", "Final suitability depends on design and application") },
            { label: t("Aplikasi Umum", "Common Applications"), value: t("Kosmetik, hampers, edisi khusus", "Cosmetics, hampers, special editions") }
          ]
        }
      ]
    }
  ];

  const materials = materialGroups.flatMap((group) =>
    group.materials.map((material) => ({ ...material, group: group.group }))
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
                <span className="eyebrow">{t("Material Label", "Label Materials")}</span>
                <h1 style={{ marginTop: "28px" }}>
                  {t(
                    <>Berbagai <em>materi</em> untuk berbagai kegunaan</>,
                    <>Various <em>materials</em> for various uses</>
                  )}
                </h1>
              </div>
              <p className="lead">
                {t(
                  "Kenali karakter, keunggulan, dan aplikasi setiap material untuk menentukan pilihan yang tepat sesuai kebutuhan label. Halaman ini memberikan informasi dasar sebagai panduan sebelum menentukan spesifikasi produksi.",
                  "Explore the characteristics, advantages, and applications of each material to find the right fit for your label needs. This page provides essential information to guide you before defining your production specifications."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="page-content">
          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Ringkasan Material", "Material Overview")}</span>
                <h2 className="h-1">
                  {t("Produk hebat diawali dengan pemilihan materi yang tepat.", "Great products start with the right materials.")}
                </h2>
                <p className="lead">
                  {t(
                    "Lihat pilihan material seperti membuka buku sampel. Klik salah satu material untuk membaca penjelasan lengkap di bawah.",
                    "Browse the materials like a sample book. Click any material to read the full explanation below."
                  )}
                </p>
              </div>

              <div className="material-overview">
                {materials.map((material) => (
                  <a className="material-swatch" href={`#${material.id}`} key={material.id}>
                    <div className="material-swatch__image">
                      <img src={material.image} alt={material.name} />
                      <span>{material.category}</span>
                    </div>
                    <div className="material-swatch__body">
                      <div className="material-swatch__head">
                        <h3>{material.name}</h3>
                      </div>
                      <p>{material.overviewText}</p>
                      <small>{material.commonUses}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="section cream">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{t("Detail Material", "Material Details")}</span>
                <h2 className="h-1">
                  {t("Pilihan material sesuai dengan kebutuhan.", "Selection of materials based on each needs.")}
                </h2>
                <p className="lead">
                  {t(
                    "Setiap material perlu dicocokkan dengan produk, lingkungan penyimpanan, bentuk kemasan, dan proses aplikasi label.",
                    "Each material should be matched to the product, storage environment, packaging shape, and label application process."
                  )}
                </p>
              </div>

              <div className="mat-list">
                {materials.map((mat) => (
                  <section id={mat.id} key={mat.id} className="mat-detail">
                    <div className="mat-photo">
                      <img src={mat.image} alt={mat.name} />
                    </div>
                    <div className="mat-text">
                      <div className="mat-code">{mat.group}</div>
                      <h3>{mat.name}</h3>
                      <p>{mat.description}</p>
                      <div className="mat-spec-grid">
                        {mat.specs.map((spec) => (
                          <div key={spec.label} className="mat-spec">
                            <div className="lbl">{spec.label}</div>
                            <div className="val">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
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

export default Material;
