import { aboutUsContent, siteConfig } from '../../constants/site-config';
import { Card, CardBody, CardTitle } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Users, Target, Eye, Heart, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about our mission, vision, and the dedicated team behind TimeNew.',
};

export default function AboutUsPage() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neutral">About {siteConfig.name}</h1>
              <p className="text-xl text-secondary mt-2">Trusted journalism for the digital age</p>
            </div>
          </div>
          
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card variant="bordered" className="text-center">
            <CardBody>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4">Our Mission</CardTitle>
              <p className="text-secondary">{aboutUsContent.mission}</p>
            </CardBody>
          </Card>

          <Card variant="bordered" className="text-center">
            <CardBody>
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl mb-4">Our Vision</CardTitle>
              <p className="text-secondary">{aboutUsContent.vision}</p>
            </CardBody>
          </Card>

          <Card variant="bordered" className="text-center">
            <CardBody>
              <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl mb-4">Our Values</CardTitle>
              <ul className="text-secondary text-sm space-y-1">
                {aboutUsContent.values.slice(0, 3).map((value, index) => (
                  <li key={index}>• {value}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutUsContent.team.map((member, index) => (
              <Card key={index} variant="bordered" className="text-center">
                <CardBody>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                  <Badge variant="primary" size="sm" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-secondary">{member.bio}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <Card variant="bordered" className="mb-12">
          <CardBody>
            <CardTitle className="text-2xl mb-6 text-center">Our Story</CardTitle>
            <div className="prose prose-neutral max-w-none">
              <p className="text-secondary leading-relaxed text-center">
                {aboutUsContent.history}
              </p>
            </div>
          </CardBody>
        </Card>

        <Card variant="bordered" className="mb-12">
          <CardBody>
            <CardTitle className="text-2xl mb-6 text-center">What We Stand For</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutUsContent.values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-secondary">{value}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Contacts */}
        <Card variant="bordered" className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardBody>
            <CardTitle className="text-2xl mb-6 text-center">Get In Touch</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-secondary">{siteConfig.contact.email}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-sm text-secondary">{siteConfig.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-sm text-secondary">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="primary" size="lg">
                Contact Our Team
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
