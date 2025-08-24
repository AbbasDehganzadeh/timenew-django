import { notFound } from 'next/navigation';
import Link from 'next/link';
import { news } from '../../../data/news';
import Sidebar from '../../components/layout/Sidebar';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Calendar, Clock, User, ArrowLeft, Share2, ThumbsUp, ThumbsDown } from 'lucide-react';

export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const new_ = news.find(a => a.slug === slug);

  if (!new_) {
    return {
      title: 'News Not Found',
    };
  }

  return {
    title: new_.title,
    description: new_.excerpt,
    openGraph: {
      title: new_.title,
      description: new_.excerpt,
      images: [new_.imageUrl],
    },
  };
}

export default function NewPage({ params }) {
  const new_ = news.find(a => a.id === params.id);

  if (!new_) {
    notFound();
  }

  const relatedNews = news
    .filter(a => a.id !== new_.id && a.category === new_.category)
    .slice(0, 3);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to News
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            {/* header */}
            <div className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 mb-8">
              <div className="relative h-64 md:h-96">
                <img
                  src={new_.imageUrl}
                  alt={new_.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">{new_.category}</Badge>
                </div>
                {new_.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent">Featured</Badge>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
                  {new_.title}
                </h1>

                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  {new_.excerpt}
                </p>

                {/* meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-secondary mb-6 pb-6 border-b border-base-300">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="font-medium">{new_.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(new_.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{new_.readTime} min read</span>
                  </div>
                </div>

                {/* actions */}
                <div className="flex items-center gap-3 mb-8">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp size={16} />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsDown size={16} />
                    Dislike
                  </Button>
                </div>

                {/* content */}
                <div className="prose prose-lg prose-neutral max-w-none">
                  <p className="lead text-lg text-secondary mb-6">
                    {new_.content}
                  </p>

                  {/* sample news content */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-base-300">
                  {new_.tags.map((tag) => (
                    <Badge key={tag} variant="ghost" size="sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* related */}
            {relatedNews.length > 0 && (
              <div className="bg-base-100 rounded-2xl p-8 shadow-sm border border-base-300">
                <h2 className="text-2xl font-bold text-neutral mb-6">Related News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((relatedNew_) => (
                    <Link key={relatedNew_.slug} href={`/news/${relatedNew_.slug}`} className="block group">
                      <div className="space-y-3">
                        <img
                          src={relatedNew_.imageUrl}
                          alt={relatedNew_.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedNew_.title}
                        </h3>
                        <p className="text-xs text-secondary">
                          {new Date(relatedNew_.publishedAt).toLocaleDateString()}
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
