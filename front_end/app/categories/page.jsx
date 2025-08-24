import CategoryCard from '../components/categories/CategoryCard';
import Sidebar from '../components/layout/Sidebar';
import { categories } from '../../data/categories';
import { Badge } from '../components/common/Badge';
import { Grid3X3 } from 'lucide-react';

export const metadata = {
  title: 'Categories',
  description: 'Explore news and articles by category - Politics, Technology, Sports, Business, Entertainment, and Health.',
};

export default function CategoriesPage() {
  const totalArticles = categories.reduce((sum, category) => sum + category.articleCount, 0);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Grid3X3 className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral">Categories</h1>
              <p className="text-secondary">Explore content by topic</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="neutral" size="md">
              {categories.length} Categories
            </Badge>
            <Badge variant="primary" size="md">
              {totalArticles} Total Articles
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.sort((a, b) => a.priority < b.priority).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>

            <div className="mt-12 bg-base-100 rounded-2xl p-8 border border-base-300">
              <h2 className="text-2xl font-bold text-neutral mb-4">About Our Categories</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-secondary mb-4">
                  Our content is carefully organized into six main categories to help you find exactly what you're looking for.
                  Each category is curated by expert editors and journalists who specialize in their respective fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-neutral mb-2">News Categories</h3>
                    <ul className="space-y-1 text-sm text-secondary">
                      <li>• Politics - Government, policy, and political analysis</li>
                      <li>• Business - Markets, economy, and corporate news</li>
                      <li>• Health - Medical breakthroughs and wellness</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral mb-2">Feature Categories</h3>
                    <ul className="space-y-1 text-sm text-secondary">
                      <li>• Technology - Innovation and digital trends</li>
                      <li>• Sports - Athletic achievements and competitions</li>
                      <li>• Entertainment - Culture, media, and lifestyle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
