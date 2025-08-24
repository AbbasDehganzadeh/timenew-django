import HeroSection from '../components/home/HeroSection';
import NewsGrid from '../components/news/NewsGrid';
import Sidebar from '../components/layout/Sidebar';
import { news } from '../../data/news';

export const metadata = {
  title: 'Home',
  description: 'Stay informed with the latest breaking news, in-depth analysis, and comprehensive coverage from around the world.',
};

export default function HomePage() {
  const latestNews = news.sort((a,b) => a.publishedAt > b.publishedAt).slice(0, 12);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <NewsGrid news={latestNews} />
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
