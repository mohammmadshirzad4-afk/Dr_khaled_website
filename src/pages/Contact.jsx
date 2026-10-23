import { MapPin, Phone, Clock3 } from "lucide-react";
import { doctor } from "../data/doctor";
import AppointmentForm from "../components/AppointmentForm";
import { PageTitle, Breadcrumb } from "../components/SectionTitle";
import { useLanguage } from "../LanguageContext";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <PageTitle
        eyebrow="CONTACT & APPOINTMENTS"
        title="We're here to help"
        text="Contact the clinic to ask about consultation availability and arranging an appointment."
      />
      <div className="container">
        <Breadcrumb current="Contact" />
      </div>
      <section className="section contact-main">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="eyebrow">{t("GET IN TOUCH")}</p>
            <h2>{t("Rifah Medical Complex")}</h2>
            <p>
              {t("For appointments and service information, contact the clinic directly.")}
            </p>
            <div className="contact-detail">
              <span>
                <MapPin size={20} />
              </span>
              <div>
                <small>{t("LOCATION")}</small>
                <b>{t(doctor.clinic)}</b>
                <p>{t(doctor.location)}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Phone size={20} />
              </span>
              <div>
                <small>{t("PHONE")}</small>
                <a href={doctor.phoneHref}>
                  <b>{doctor.phone}</b>
                </a>
                <p>{t("Tap to call the clinic")}</p>
              </div>
            </div>
            <div className="map-placeholder">
              <MapPin size={26} />
              <b>{t("Clinic location")}</b>
              <span>{t("Map embed can be added after the address is verified.")}</span>
            </div>
            <p className="hours-note">
              <Clock3 size={16} /> {t("Contact the clinic for current availability.")}
            </p>
          </div>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
