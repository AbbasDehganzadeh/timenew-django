import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../../../data/articles';
import Sidebar from '../../components/layout/Sidebar';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/articles">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            {/* header */}
            <div className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 mb-8">
              <div className="relative h-64 md:h-96">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">{article.category}</Badge>
                </div>
                {article.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent">Featured</Badge>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
                  {article.title}
                </h1>

                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-secondary mb-6 pb-6 border-b border-base-300">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>

                {/* actions */}
                <div className="flex items-center gap-3 mb-8">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bookmark size={16} />
                    Save
                  </Button>
                </div>

                {/* content */}
                <div className="prose prose-lg prose-neutral max-w-none">
                  <p className="lead text-lg text-secondary mb-6">
                    {article.content}
                  </p>

                  {/* sample article content */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <img
                  src="https://placehold.co/250"
                  alt={article.title}
                  className="w-full/2 h-full/2 object-fit"
                />
                  <h2>Key Developments</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <img
                  src="https://placehold.co/250"
                  alt={article.title}
                  className="w-full/2 h-full/2 object-fit"
                />
                  <h3>Impact and Analysis</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <blockquote>
                    "This development represents a significant milestone in our ongoing efforts
                    to address these critical challenges." - Industry Expert
                  </blockquote>

                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-base-300">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="ghost" size="sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* related */}
            {relatedArticles.length > 0 && (
              <div className="bg-base-100 rounded-2xl p-8 shadow-sm border border-base-300">
                <h2 className="text-2xl font-bold text-neutral mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link key={relatedArticle.slug} href={`/articles/${relatedArticle.slug}`} className="block group">
                      <div className="space-y-3">
                        <img
                          src={relatedArticle.imageUrl}
                          alt={relatedArticle.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-xs text-secondary">
                          {new Date(relatedArticle.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
