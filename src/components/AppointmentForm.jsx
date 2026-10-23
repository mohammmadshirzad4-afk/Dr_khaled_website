import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { doctor } from "../data/doctor";
import { useLanguage } from "../LanguageContext";

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function AppointmentForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const minDate = getLocalDateString();

  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus(
      t("Your details passed the form checks. This request has not been sent or booked because an approved clinic submission service is not connected. Please call the clinic to arrange an appointment."),
    );
    form.reset();
  };

  return (
    <form className="appointment-form" onSubmit={submit}>
      <p className="eyebrow">{t("APPOINTMENT REQUEST")}</p>
      <h2>{t("How can we reach you?")}</h2>
      <p className="form-intro">
        {t("The prototype checks required fields. Information is not stored or sent.")}
      </p>
      <div className="form-grid">
        <label>
          {t("Full name")}
          <input name="name" required autoComplete="name" placeholder={t("Your name")} />
        </label>
        <label>
          {t("Phone number")}
          <input name="phone" type="tel" dir="ltr" required autoComplete="tel" placeholder="+93 …" />
        </label>
        <label>
          {t("Preferred date")}
          <input name="date" type="date" required min={minDate} />
        </label>
        <label>
          {t("Consultation type")}
          <select name="type" required defaultValue="">
            <option value="" disabled>{t("Select an option")}</option>
            <option>{t("Brain and neurosurgery")}</option>
            <option>{t("Spine care")}</option>
            <option>{t("Neurological consultation")}</option>
            <option>{t("Follow-up")}</option>
            <option>{t("Other inquiry")}</option>
          </select>
        </label>
        <label className="form-wide">
          {t("Short message")}
          <textarea
            name="message"
            rows="3"
            maxLength="400"
            placeholder={t("Optional — please do not include private medical details")}
          />
        </label>
        <label className="consent form-wide">
          <input type="checkbox" required />
          <span>
            {t("I acknowledge the ")}<Link to="/privacy">{t("privacy notice")}</Link>{t(" and understand this prototype does not send or store my information.")}
          </span>
        </label>
      </div>
      <button className="btn" type="submit">
        {t("Check request")} <ArrowUpRight size={16} />
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-callout">
        <Phone size={15} /> {t("To arrange an appointment, call")} {" "}
        <a href={doctor.phoneHref}>{doctor.phone}</a>.
      </p>
    </form>
  );
}
