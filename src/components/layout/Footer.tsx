import { Link } from 'react-router-dom';
import { Heart, Activity, MessageCircle, ExternalLink } from 'lucide-react';

const ECOSYSTEM_LINKS = [
  { label: 'Calvia.app', url: '#' },
  { label: 'Calvia.marketing', url: '#' },
  { label: 'Calvia.realestate', url: '#' },
  { label: 'Calvia.blog', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-subtle-grey/30">
      <div className="container-narrow section-padding !py-12 lg:!py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Heart className="w-6 h-6 text-dark-teal" />
                <Activity className="w-3 h-3 text-sky-blue absolute -top-1 -right-1" />
              </div>
              <span className="font-heading font-bold text-lg text-dark-teal">
                Calvia Health
              </span>
            </Link>
            <p className="text-sm text-text-grey leading-relaxed mb-3">
              Your trusted intermediary for health services in Calvia, Mallorca. Part of the Calvia Group ecosystem.
            </p>
            <Link to="/about" className="text-sm text-dark-teal hover:text-dark-teal-light transition-colors font-medium">
              Learn more about us
            </Link>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark-teal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-text-grey hover:text-dark-teal transition-colors">Services</Link></li>
              <li><Link to="/get-matched" className="text-sm text-text-grey hover:text-dark-teal transition-colors">Get Matched</Link></li>
              <li><Link to="/about" className="text-sm text-text-grey hover:text-dark-teal transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-text-grey hover:text-dark-teal transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-sm text-text-grey hover:text-dark-teal transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark-teal mb-4">Calvia Group</h4>
            <ul className="space-y-2">
              {ECOSYSTEM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm text-text-grey hover:text-dark-teal transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark-teal mb-4">Contact</h4>
            <p className="text-sm text-text-grey mb-3">Calvia, Mallorca, Spain</p>
            <a
              href="https://wa.me/?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Calvia%20Health%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-dark-teal hover:text-dark-teal-light transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-subtle-grey/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-text-grey leading-relaxed text-center max-w-4xl mx-auto">
            This site provides informational content only for users to conduct their own research. We are not doctors or medical professionals -- consult qualified experts for health advice. No guarantees on outcomes. The information provided is for general guidance purposes and should not replace professional medical consultation.
          </p>
          <p className="text-xs text-text-grey text-center mt-3">
            &copy; {new Date().getFullYear()} Calvia Health. Part of Calvia Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
