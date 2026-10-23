import { ArrowUpRight } from "lucide-react";
import { doctor } from "../data/doctor";
import Button from "../components/Button";
import DoctorVisual from "../components/DoctorVisual";
import Credentials from "../components/Credentials";
import { PageTitle, Breadcrumb, SectionHead } from "../components/SectionTitle";
import { useLanguage } from "../LanguageContext";
export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <PageTitle
        eyebrow="ABOUT THE DOCTOR"
        title="Experience grounded in care"
        text="Get to know Dr. Khalid Khan Zadran and his professional approach to brain and spine care."
      />
      <div className="container">
        <Breadcrumb current="About" />
      </div>
      <section className="section about-main">
        <div className="container about-grid">
          <DoctorVisual large />
          <div>
            <p className="eyebrow">{t("CONSULTANT NEUROSURGEON")}</p>
            <h2 dir="ltr">Dr. Khalid Khan Zadran</h2>
            <p className="lead">{t("Brain & Spine Surgeon · Kabul, Afghanistan")}</p>
            <p>{t(doctor.bio)}</p>
            <p>
              {t("Dr. Zadran's approach centers on careful assessment, clear communication, and helping patients understand their options. Clinical recommendations are made for each individual after appropriate consultation.")}
            </p>
            <Button to="/contact">
              {t("Ask about an appointment")} <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container credentials">
          <div>
            <p className="eyebrow">{t("PROFESSIONAL PROFILE")}</p>
            <h2>
              {t("Education &")}<br />
              {t("Affiliations")}
            </h2>
            <p className="muted">
              {t("All details below are editable draft content and should be confirmed by the clinic before publication.")}
            </p>
          </div>
          <Credentials />
        </div>
      </section>
      <section className="section">
        <div className="container approach">
          <SectionHead
            eyebrow={t("PATIENT CARE")}
            title={t("A professional, considered approach")}
            text={t("Every patient and concern is different. The aim is to make the consultation informative and respectful.")}
          />
          <div className="approach-cards">
            {[
              [
                "Listen carefully",
                "Understand the concern and what matters most to the patient.",
              ],
              [
                "Assess professionally",
                "Review relevant findings and explain what they may mean.",
              ],
              [
                "Discuss next steps",
                "Share clear information about options and follow-up availability.",
              ],
            ].map(([t, d], i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-content">
          <div>
            <p className="eyebrow eyebrow-light">{t("RIFAH MEDICAL COMPLEX")}</p>
            <h2>{t("Connect with the clinic")}</h2>
            <p>{t(doctor.location)} · <span dir="ltr">{doctor.phone}</span></p>
          </div>
          <Button to="/contact">
          {t("Contact & appointments")} <ArrowUpRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
