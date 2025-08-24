import Link from 'next/link';
import { Badge } from '../common/Badge';
import { Card, CardBody } from '../common/Card';
import { Calendar, Clock, User } from 'lucide-react';
import { clsx } from 'clsx';

export default function ArticleCard({ 
  article, 
  variant = 'default',
  className
}) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <Card 
      hover 
      className={clsx(
        'news-card overflow-hidden',
        isFeatured && 'lg:col-span-2 lg:row-span-2',
        className
      )}
    >
      <Link href={`/articles/${article.slug}`} className="block">
        <div className={clsx(
          'relative',
          isCompact ? 'h-48' : isFeatured ? 'h-64 lg:h-80' : 'h-56'
        )}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm">
              {article.category}
            </Badge>
          </div>
          {article.featured && (
            <div className="absolute top-4 right-4">
              <Badge variant="accent" size="sm">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        <CardBody className={clsx(isCompact ? 'p-4' : 'p-6')}>
          <h3 className={clsx(
            'font-bold line-clamp-2 hover:text-primary transition-colors',
            isFeatured ? 'text-xl lg:text-2xl mb-3' : 'text-lg mb-2'
          )}>
            {article.title}
          </h3>
          
          <p className={clsx(
            'text-secondary line-clamp-2 mb-4',
            isFeatured ? 'text-base' : 'text-sm'
          )}>
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-secondary">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          
          {!isCompact && (
            <div className="flex flex-wrap gap-1 mt-3">
              {article.tags.slice(0, 5).map((tag) => (
                <Badge key={tag} variant="ghost" size="xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </CardBody>
      </Link>
    </Card>
  );
}
