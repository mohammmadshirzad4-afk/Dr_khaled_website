import { Brain, CircleHelp } from "lucide-react";
import { medicalImages } from "../data/images";
import { useLanguage } from "../LanguageContext";

export default function DoctorVisual({ large = false, illustrative = true }) {
  const { t } = useLanguage();

  return (
    <div className={`doctor-visual ${large ? "large" : ""} ${illustrative ? "illustrative" : ""}`}>
      {illustrative ? (
        <img
          src={medicalImages.consultation.src}
          alt={t(medicalImages.consultation.alt)}
          fetchPriority="high"
        />
      ) : (
        <div
          className="portrait-placeholder"
          role="img"
          aria-label={t("Doctor portrait placeholder. Add an approved photograph of Dr. Zadran before publication.")}
        >
          <Brain size={72} />
          <span>{t("APPROVED PORTRAIT TO BE ADDED")}</span>
        </div>
      )}
      <div className="photo-note">
        {illustrative ? (
          <>
            <a href={medicalImages.consultation.source} target="_blank" rel="noreferrer">
              {medicalImages.consultation.credit}
            </a>
            <span>· {t("Illustrative, not Dr. Zadran")}</span>
          </>
        ) : (
          <>
            <CircleHelp size={15} /> {t("Replace with verified doctor portrait")}
          </>
        )}
      </div>
      <div className="floating-card">
        <span className="floating-icon"><Brain size={18} /></span>
        <span>
          <b>{t(illustrative ? "Imaging-informed care" : "Brain & Spine")}</b>
          <small>{t(illustrative ? "Illustrative consultation photo" : "Consultant Neurosurgeon")}</small>
        </span>
      </div>
    </div>
  );
}
