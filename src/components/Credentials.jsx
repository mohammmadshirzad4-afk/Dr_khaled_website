import { CheckCircle2 } from 'lucide-react'
import { doctor } from '../data/doctor'
import { useLanguage } from '../LanguageContext'
export default function Credentials(){const {t}=useLanguage();return <div className="credential-list"><div><h3>{t('Qualifications')}</h3><div className="chip-list">{doctor.credentials.map(x=><span key={x}>{x}</span>)}</div></div><div><h3>{t('Professional memberships')}</h3><ul>{doctor.memberships.map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul></div></div>}
