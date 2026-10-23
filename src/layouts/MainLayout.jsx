import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
export default function MainLayout({children}){return <><ScrollTop/><Navbar/><main>{children}</main><Footer/></>}


