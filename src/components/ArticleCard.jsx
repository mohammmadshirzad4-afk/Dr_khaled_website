import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { medicalImages } from '../data/images'
import { useLanguage } from '../LanguageContext'
const imageFor={spine:medicalImages.imaging,brain:medicalImages.consultation,care:medicalImages.patientCare}
export function ArticleImage({type='brain'}){const image=imageFor[type]||medicalImages.surgery;const {t}=useLanguage();return <div className={`article-image image-${type}`}><img src={image.src} alt={t(image.alt)} loading="lazy"/><span className="image-caption">{t('Illustrative photo · Draft article')}</span></div>}
export default function ArticleCard({article}){const {t}=useLanguage();return <article className="article-card"><Link to={`/blog/${article.slug}`}><ArticleImage type={article.image}/></Link><div className="article-body"><span className="tag">{t(article.category)}</span><h3><Link to={`/blog/${article.slug}`}>{t(article.title)}</Link></h3><p>{t(article.excerpt)}</p><div className="article-meta"><span>{t(article.date)}</span><Link to={`/blog/${article.slug}`} aria-label={`${t('Read more')}: ${t(article.title)}`}><ArrowRight size={17}/></Link></div></div></article>}
