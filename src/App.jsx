import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { articles } from "./data/articles";
import { LanguageProvider } from "./i18n";
import { useLanguage } from "./LanguageContext";
function TitleUpdater() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  useEffect(() => {
    const titles = {
      "/": "Dr. Khalid Khan Zadran | Neurosurgery & Spine Care",
      "/about": "About Dr. Khalid Khan Zadran",
      "/services": "Neurosurgery & Spine Services",
      "/blog": "Brain & Spine Health Journal",
      "/contact": "Contact & Appointments",
      "/privacy": "Privacy Notice",
    };
    const slug = pathname.startsWith("/blog/") ? pathname.slice(6) : "";
    const article = articles.find((item) => item.slug === slug);
    document.title = article
      ? `${t(article.title)} | Dr. Khalid Khan Zadran`
      : t(titles[pathname] || "Brain & Spine Health | Dr. Khalid Khan Zadran");
  }, [pathname, t]);
  return null;
}
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <TitleUpdater />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
