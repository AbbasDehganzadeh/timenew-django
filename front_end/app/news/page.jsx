import ArticleGrid from '../components/articles/ArticleGrid';
import Sidebar from '../components/layout/Sidebar';
import { news } from '../../data/news';
import { Badge } from '../components/common/Badge';
import { Newspaper } from 'lucide-react';

export const metadata = {
  title: 'News',
  description: 'Breaking news, political updates, business insights, and health coverage from trusted sources.',
};

export default function NewsPage() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral">Breaking News</h1>
              <p className="text-secondary">Stay updated with the latest developments</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" size="sm">Politics</Badge>
            <Badge variant="secondary" size="sm">Business</Badge>
            <Badge variant="accent" size="sm">Health</Badge>
            <Badge variant="neutral" size="sm">Breaking</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleGrid news={news} showFeatured={false} />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
