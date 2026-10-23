import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
export default function ServiceCard({service}){const Icon=service.icon;const {t}=useLanguage();return <article className="service-card"><div className="service-icon"><Icon size={22}/></div><h3>{t(service.title)}</h3><p>{t(service.text)}</p><Link to="/services" className="text-link">{t('Learn more')} <ArrowRight size={15}/></Link></article>}
