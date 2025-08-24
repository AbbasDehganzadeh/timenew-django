import ArticleCard from './ArticleCard';
import { clsx } from 'clsx';

export default function ArticleGrid({
  articles,
  showFeatured = false,
  className
}) {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className={clsx('space-y-8', className)}>
      {/* featured */}
      {showFeatured && featuredArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-neutral">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredArticles.slice(0, 3).map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="featured"
                className={index === 0 ? 'lg:col-span-2' : ''}
              />
            ))}
          </div>
        </section>
      )}

      {/* regular */}
      <section>
        {showFeatured && (
          <h2 className="text-2xl font-bold mb-6 text-neutral">Latest Articles</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showFeatured ? regularArticles : articles).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="default"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
