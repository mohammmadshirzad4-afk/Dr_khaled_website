import { ArrowUpRight, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { doctor } from "../data/doctor";
import { services } from "../data/services";
import { articles } from "../data/articles";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ArticleCard from "../components/ArticleCard";
import DoctorVisual from "../components/DoctorVisual";
import MedicalHero from "../components/MedicalHero";
import ContactStrip from "../components/ContactStrip";
import Credentials from "../components/Credentials";
import { SectionHead } from "../components/SectionTitle";
import { useLanguage } from "../LanguageContext";
export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <MedicalHero />
      <ContactStrip />
      <section className="section">
        <div className="container intro-grid">
          <DoctorVisual large />
          <div className="intro-copy">
            <p className="eyebrow">{t("A THOUGHTFUL APPROACH TO CARE")}</p>
            <h2>
              {t("Meet Dr. Khalid")}
              <br />
              {t("Khan Zadran")}
            </h2>
            <p>{t(doctor.bio)}</p>
            <p>
              {t("Each consultation is an opportunity to listen, assess concerns, and discuss clear next steps with the patient.")}
            </p>
            <Button to="/about" secondary>
              {t("Read Full Biography")} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow={t("SPECIALIST SERVICES")}
            title={t("Care focused on you")}
            text={t("Explore consultation and care areas. Availability should be confirmed directly with the clinic.")}
          />
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="center-button">
            <Button to="/services" secondary>
              {t("View all services")} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container credentials">
          <div>
            <p className="eyebrow">{t("TRAINING & AFFILIATIONS")}</p>
            <h2>
              {t("Qualifications &")}<br />
              {t("Professional Credentials")}
            </h2>
            <p className="muted">
              {t("Draft information supplied for this website. Credentials and memberships require confirmation before publication.")}
            </p>
          </div>
          <Credentials />
        </div>
      </section>
      <section className="section section-navy">
        <div className="container why-grid">
          <div>
            <p className="eyebrow eyebrow-light">{t("A CLEARER CARE EXPERIENCE")}</p>
            <h2>
              {t("Care begins with")}
              <br />{t("a conversation.")}
            </h2>
            <p>
              {t("Understand your concerns, get a professional assessment, and discuss possible next steps.")}
            </p>
          </div>
          <div className="why-list">
            {[
              "Specialist-focused neurological care",
              "Patient-centered communication",
              "Professional assessment",
              "Clear information about treatment options",
              "Careful follow-up where available",
            ].map((item, i) => (
              <div key={item}>
                <span>0{i + 1}</span>
                {t(item)}
                <CheckCircle2 size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={t("FROM THE JOURNAL")}
            title={t("Health information, made clear")}
            text={t("Sample article drafts for review. Content is not medical advice and requires clinical approval before publication.")}
          />
          <div className="article-grid">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
          <div className="center-button">
            <Button to="/blog" secondary>
              {t("Visit the journal")} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-content">
          <div>
            <p className="eyebrow eyebrow-light">{t("HERE WHEN YOU NEED US")}</p>
            <h2>
              {t("Need a Neurosurgical")}
              <br />
              {t("Consultation?")}
            </h2>
            <p>
              {t("Contact the clinic to ask about consultation availability and the next steps for arranging an appointment.")}
            </p>
          </div>
          <div className="cta-buttons">
            <Button href={doctor.phoneHref} secondary>
              {t("Call the Clinic")} <Phone size={16} />
            </Button>
            <Button to="/contact">
              {t("Request an Appointment")} <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
