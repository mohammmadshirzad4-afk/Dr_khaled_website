import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import { doctor } from "../data/doctor";
import { services } from "../data/services";
import { useLanguage } from "../LanguageContext";
const currentYear = new Date().getFullYear();
export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="brand brand-light" to="/">
            <span className="brand-icon">
              <Brain size={23} />
            </span>
            <span>
              <strong>{doctor.name}</strong>
            <small>{t(doctor.subtitle)}</small>
            </span>
          </Link>
          <p>{t("Specialist-focused brain and spine care in Kabul, Afghanistan.")}</p>
        </div>
        <div>
          <h4>{t("Explore")}</h4>
          <Link to="/about">{t("About the doctor")}</Link>
          <Link to="/services">{t("Services")}</Link>
          <Link to="/blog">{t("Health articles")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
        </div>
        <div>
          <h4>{t("Services")}</h4>
          {services.slice(0, 4).map((s) => (
            <Link key={s.title} to="/services">
              {t(s.title)}
            </Link>
          ))}
        </div>
        <div>
          <h4>{t("Get in touch")}</h4>
          <span>{t(doctor.clinic)}</span>
          <span>{t(doctor.location)}</span>
          <a href={doctor.phoneHref}>{doctor.phone}</a>
          <Link to="/privacy" className="privacy-link">
            {t("Privacy notice")}
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {currentYear} {doctor.name}. {t("All rights reserved.")}
        </span>
        <span>
          {t("Medical information on this site is for general education only.")}
        </span>
      </div>
    </footer>
  );
}
