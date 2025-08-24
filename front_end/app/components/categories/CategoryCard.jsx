import Link from 'next/link';
import { Card, CardBody, CardTitle } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export default function CategoryCard({ category, className }) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card hover className={clsx('group cursor-pointer', className)}>
        <CardBody>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
              <div className="w-6 h-6 bg-white rounded-full opacity-80" />
            </div>
            <Badge variant="neutral" size="sm">
              {category.articleCount} articles
            </Badge>
          </div>

          <CardTitle className="group-hover:text-primary transition-colors mb-2">
            {category.name}
          </CardTitle>

          <p className="text-sm text-secondary mb-4 line-clamp-2">
            {category.description}
          </p>

          <div className="flex justify-around items-center text-primary text-sm font-medium gap-4 transition-all">
            <Button variant="secondary" size="md" className="gap-2">
              Follow
            </Button>
            <div className="flex flex-inline group-hover:gap-2">
              <span>Explore</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
