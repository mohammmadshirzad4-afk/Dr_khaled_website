import { Link } from 'react-router-dom'
export default function Button({to,href,children,secondary=false,className='',onClick}){const cls=`btn inline-flex items-center justify-center gap-2 transition-colors ${secondary?'btn-outline':''} ${className}`;return to?<Link className={cls} to={to} onClick={onClick}>{children}</Link>:<a className={cls} href={href||'#'} onClick={onClick}>{children}</a>}
