import NewsCard from './NewsCard';
import { clsx } from 'clsx';

export default function NewsGrid({
  news,
  className
}) {

  return (
    <div className={clsx('space-y-8', className)}>

      <section>
          <h2 className="text-2xl font-bold mb-6 text-neutral">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((new_) => (
            <NewsCard
              key={new_.id}
              news={new_}
              variant="default"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
