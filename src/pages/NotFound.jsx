import { CircleHelp } from 'lucide-react'
import Button from '../components/Button'
import { useLanguage } from '../LanguageContext'
export default function NotFound(){const {t}=useLanguage();return <section className="section"><div className="container empty-state"><CircleHelp/><p className="eyebrow">{t('404 · PAGE NOT FOUND')}</p><h1>{t("We couldn't find that page")}</h1><p>{t('The link may be out of date. Return home or explore services.')}</p><div className="hero-actions"><Button to="/">{t('Back home')}</Button><Button to="/services" secondary>{t('Explore services')}</Button></div></div></section>}
