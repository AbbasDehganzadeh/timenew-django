import ArticleGrid from '../components/articles/ArticleGrid';
import Sidebar from '../components/layout/Sidebar';
import { articles } from '../../data/articles';
import { Badge } from '../components/common/Badge';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Articles',
  description: 'In-depth articles covering technology, sports, entertainment, and lifestyle topics.',
};

export default function ArticlesPage() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <FileText className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral">Featured Articles</h1>
              <p className="text-secondary">In-depth coverage and analysis</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" size="sm">Technology</Badge>
            <Badge variant="secondary" size="sm">Sports</Badge>
            <Badge variant="accent" size="sm">Entertainment</Badge>
            <Badge variant="neutral" size="sm">Lifestyle</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleGrid articles={articles} showFeatured={false} />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
