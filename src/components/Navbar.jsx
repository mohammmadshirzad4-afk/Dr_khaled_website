import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Brain, Menu, X, ArrowUpRight } from "lucide-react";
import { doctor } from "../data/doctor";
import Button from "./Button";
import { useLanguage } from "../LanguageContext";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = [
    [t("Home"), "/"],
    [t("About"), "/about"],
    [t("Services"), "/services"],
    [t("Blog"), "/blog"],
    [t("Contact"), "/contact"],
  ];
  return (
    <header className="navbar">
      <div className="nav-wrap">
        <Link className="brand" to="/">
          <span className="brand-icon">
            <Brain size={23} />
          </span>
          <span>
            <strong>{doctor.name}</strong>
            <small>{t(doctor.subtitle)}</small>
          </span>
        </Link>
        <nav
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label={t("Main navigation")}
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Button
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            {t("Book Appointment")} <ArrowUpRight size={15} />
          </Button>
          <label className="language-picker">
            <span className="sr-only">{t("Choose language")}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label={t("Choose language")}
            >
              <option value="en">English</option>
              <option value="fa">فارسی</option>
              <option value="ps">پښتو</option>
            </select>
          </label>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("Close menu") : t("Open menu")}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
