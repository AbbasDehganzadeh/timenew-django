import Link from 'next/link';
import { articles } from '../../../data/articles';
import { news } from '../../../data/news';
import ArticleCard from '../articles/ArticleCard';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const mainArticle = articles.find(t => t.featured);
  const subArticles = articles.filter(t => !t.featured).slice(0, 3);
  const sideNews = news.slice(0, 4);

  if (!mainArticle) return null;

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 gap-2">
          <div className="">
            <Link href={`/articles/${mainArticle.slug}`} className="block group">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={mainArticle.imageUrl}
                  alt={mainArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent" size="sm">
                      Breaking News
                    </Badge>
                    <Badge variant="ghost" size="sm" className="text-white border-white/30">
                      {mainArticle.category}
                    </Badge>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {mainArticle.title}
                  </h1>

                  <p className="text-lg text-white/90 mb-6 line-clamp-2">
                    {mainArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{mainArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(mainArticle.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{mainArticle.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {subArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                content={article}
                variant={article.featured ? "featured" : ""}
		className="lg:col-span-2 lg:row-span-1"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral">Trending Now</h2>
            <Link href="/news">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {sideNews.map((new_, index) => (
            <Link key={new_.slug} href={`/news/${new_.slug}`} className="block group">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-base-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="primary" size="xs">
                      {new_.category}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {new_.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-secondary">
                    <span>{new_.author}</span>
                    <span>•</span>
                    <span>{new Date(new_.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
            <h3 className="font-bold text-lg mb-2">Stay Informed</h3>
            <p className="text-sm text-secondary mb-4">
              Get the latest news delivered straight to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-sm w-full"
              />
              <Button size="sm" className="w-full">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
