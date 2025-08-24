import Link from 'next/link';
import { categories } from '../../../data/categories';
import { articles } from '../../../data/articles';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Card, CardBody, CardTitle } from '../common/Card';
import { Calendar, TrendingUp, Mail } from 'lucide-react';

export default function Sidebar() {
  const recentPosts = articles.slice(0, 4);
  const trendingCategories = categories.slice(0, 5);

  return (
    <aside className="w-full space-y-6">
      {/* categories section */}
      <Card variant="bordered">
        <CardBody>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp size={20} className="text-primary" />
            Categories
          </CardTitle>
          <div className="space-y-3">
            {trendingCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-base-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  <span className="font-medium">{category.name}</span>
                </div>
                <Badge variant="neutral" size="xs">
                  {category.articleCount}
                </Badge>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/categories">
              <Button variant="outline" size="sm" className="w-full">
                View All Categories
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>

      {/* recent news section */}
      <Card variant="bordered">
        <CardBody>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar size={20} className="text-primary" />
            Recent Posts
          </CardTitle>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/articles/${post.slug}`}
                className="block group"
              >
                <div className="flex gap-3">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-secondary mt-1">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* newsletter section */}
      <Card variant="bordered" className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardBody>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail size={20} className="text-primary" />
            Newsletter
          </CardTitle>
          <p className="text-sm text-secondary mb-4">
            Stay updated with our latest news and exclusive content.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-sm w-full"
            />
            <Button size="sm" className="w-full">
              Subscribe
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* ADs section */}
      <Card variant="bordered" className="bg-gradient-to-br from-accent/5 to-warning/5">
        <CardBody className="text-center">
          <div className="bg-base-200 rounded-lg p-8 mb-4">
            <div className="text-4xl mb-2">📢</div>
            <h3 className="font-bold text-lg mb-2">Advertisement</h3>
            <p className="text-sm text-secondary">
              Your ad could be here. Contact us for advertising opportunities.
            </p>
          </div>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </CardBody>
      </Card>

      {/* social media widget */}
      <Card variant="bordered">
        <CardBody>
          <CardTitle className="text-lg mb-4">Follow Us</CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1">
              Twitter
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              Facebook
            </Button>
          </div>
          <div className="flex gap-2 mt-2">
            <Button variant="ghost" size="sm" className="flex-1">
              Instagram
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              LinkedIn
            </Button>
          </div>
        </CardBody>
      </Card>
    </aside>
  );
}
