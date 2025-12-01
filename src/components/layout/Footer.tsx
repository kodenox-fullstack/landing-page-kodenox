import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoKodenox from '@/assets/images/logo-kodenox.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kodenox2025@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'kodenox2025@gmail.com',
      href: 'mailto:kodenox2025@gmail.com',
    },
    { icon: Phone, text: '+62 882-1188-7538', href: 'tel:+6288211887538' },
    { icon: MapPin, text: 'Jakarta, Indonesia', href: '#' },
  ];

  return (
    <footer className="border-t bg-background border-border">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4 space-x-2">
              <img
                src={logoKodenox}
                alt="Kodenox Logo"
                className="object-cover w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-foreground">
                Kodenox
              </span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Leading software house specializing in web and Android
              development. We turn your ideas into powerful digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Website Development Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Android App Development Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="flex-shrink-0 w-4 h-4 text-muted-foreground" />
                  <a
                    href={contact.href}
                    className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-border/50 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kodenox. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a
              href="#"
              className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
