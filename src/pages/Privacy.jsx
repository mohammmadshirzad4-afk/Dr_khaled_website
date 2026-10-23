import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { PageTitle } from '../components/SectionTitle'
import { useLanguage } from '../LanguageContext'
export default function Privacy(){const {t}=useLanguage();return <><PageTitle eyebrow="PRIVACY" title="Privacy notice" text="How this website prototype handles information."/><section className="section"><div className="container privacy-copy"><h2>{t('Appointment form')}</h2><p>{t('This website is a frontend prototype. The appointment form checks required fields in your browser but does not transmit or store your entries. Do not enter sensitive medical information.')}</p><h2>{t('When a service is connected')}</h2><p>{t('Before enabling appointment requests, the clinic should add an approved submission service and publish its privacy practices, data retention period, and privacy contact.')}</p><Button to="/contact">{t('Return to contact')} <ArrowRight size={16}/></Button></div></section></>}


