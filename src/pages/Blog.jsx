import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import { PageTitle, Breadcrumb } from "../components/SectionTitle";
import { useLanguage } from "../LanguageContext";
export default function Blog() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const cats = ["All categories", ...new Set(articles.map((a) => a.category))];
  const filtered = articles.filter(
    (a) =>
      (category === "All categories" || a.category === category) &&
      `${t(a.title)} ${t(a.excerpt)} ${t(a.category)}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageTitle
        eyebrow="THE JOURNAL"
        title="Knowledge for your wellbeing"
        text="Accessible information about brain and spine health. Sample drafts require medical review before publication."
      />
      <div className="container">
        <Breadcrumb current="Blog" />
      </div>
      <section className="section">
        <div className="container">
          <div className="blog-tools">
            <label className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search articles")}
                aria-label={t("Search articles")}
              />
            </label>
            <select
              aria-label={t("Filter by category")}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {cats.map((c) => (
                <option key={c} value={c}>{t(c)}</option>
              ))}
            </select>
          </div>
          <div className="draft-note">
            <ShieldCheck size={18} />
            <span>
              <b>{t("Editorial notice")}</b> — {t("These sample articles are draft material, not published medical advice. Content requires clinical review and approval.")}
            </span>
          </div>
          {filtered.length ? (
            <div className="article-grid blog-grid">
              {filtered.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search />
              <h3>{t("No articles found")}</h3>
              <p>{t("Try another search or category.")}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
