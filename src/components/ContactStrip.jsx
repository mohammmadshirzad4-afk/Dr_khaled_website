import { Link } from 'react-router-dom'
import { MapPin,Phone,ArrowRight } from 'lucide-react'
import { doctor } from '../data/doctor'
import { useLanguage } from '../LanguageContext'
export default function ContactStrip(){const {t}=useLanguage();return <section className="contact-strip"><div className="container strip-grid"><span className="strip-icon"><MapPin/></span><div><b>{t(doctor.clinic)}</b><small>{t(doctor.location)}</small></div><a href={doctor.phoneHref} className="strip-phone"><Phone size={16}/>{doctor.phone}</a><Link className="text-link" to="/contact">{t('Get in touch')} <ArrowRight size={16}/></Link></div></section>}
