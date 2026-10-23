import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
export function PageTitle({eyebrow,title,text}){const {t}=useLanguage();return <div className="page-title"><div className="container"><p className="eyebrow">{t(eyebrow)}</p><h1>{t(title)}</h1>{text&&<p className="lead">{t(text)}</p>}</div></div>}
export function Breadcrumb({current}){const {t}=useLanguage();return <div className="breadcrumb"><Link to="/">{t('Home')}</Link><ChevronRight size={14}/><span>{t(current)}</span></div>}
export function SectionHead({eyebrow,title,text}){const {t}=useLanguage();return <div className="section-head"><p className="eyebrow">{t(eyebrow)}</p><h2>{t(title)}</h2>{text&&<p>{t(text)}</p>}</div>}
