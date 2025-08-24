import Link from 'next/link'
import { Badge } from '../common/Badge';
import { Card, CardBody } from '../common/Card';
import { Calendar, Clock, User } from 'lucide-react';
import { clsx } from 'clsx';


export default function NewsCard({ 
  news,
  variant = 'default',
  className
}) {
  const isCompact = variant === 'compact';

  return (
    <Card 
      hover 
      className={clsx(
        'news-card overflow-hidden',
        className
      )}
    >
      <Link href={`/news/${news.slug}`} className="block">
        <div className={clsx(
          'relative',
        )}>
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm">
              {news.category}
            </Badge>
          </div>
        </div>
        
        <CardBody className={clsx(isCompact ? 'p-4' : 'p-6')}>
          <h3 className={clsx(
            'font-bold line-clamp-2 hover:text-primary transition-colors',
          )}>
            {news.title}
          </h3>
          
          <p className={clsx(
            'text-secondary line-clamp-2 mb-4',
          )}>
            {news.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-secondary">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{news.readTime} min read</span>
            </div>
          </div>
          
          {!isCompact && (
            <div className="flex flex-wrap gap-1 mt-3">
              {news.tags.slice(0, 5).map((tag) => (
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
