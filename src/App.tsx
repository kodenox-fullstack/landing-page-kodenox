import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareHouse',
    name: 'Kodenox',
    description:
      'Professional Software House specializing in Web and Android development. Terpercaya untuk jasa pembuatan website dan aplikasi Android.',
    url: 'https://kodenox.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    priceRange: '$$',
    email: 'kodenox2025@gmail.com',
    telephone: '',
    services: [
      'Jasa Pembuatan Website',
      'Jasa Pembuatan Android',
      'UI/UX Design',
      'Custom Software Development',
      'Konsultasi IT',
    ],
    sameAs: [
      'https://github.com/kodenox',
      'https://linkedin.com/company/kodenox',
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Kodenox | Jasa Pembuatan Website & Software House Android Terpercaya
        </title>
        <meta
          name="title"
          content="Kodenox | Jasa Pembuatan Website & Software House Android Terpercaya"
        />
        <meta
          name="description"
          content="Kodenox adalah Software House terpercaya untuk jasa pembuatan website, aplikasi Android, dan sistem informasi korporat. Solusi digital modern dengan teknologi terkini."
        />
        <meta
          name="keywords"
          content="software house, jasa pembuatan website, jasa pembuatan android, kodenox, web developer indonesia, aplikasi android, UI/UX design, konsultasi IT"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesian" />
        <meta name="author" content="Kodenox" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kodenox.com/" />
        <meta
          property="og:title"
          content="Kodenox | Jasa Pembuatan Website & Software House Android Terpercaya"
        />
        <meta
          property="og:description"
          content="Kodenox adalah Software House terpercaya untuk jasa pembuatan website, aplikasi Android, dan sistem informasi korporat. Solusi digital modern."
        />
        <meta property="og:image" content="https://kodenox.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kodenox.com/" />
        <meta
          property="twitter:title"
          content="Kodenox | Jasa Pembuatan Website & Software House Android"
        />
        <meta
          property="twitter:description"
          content="Software House terpercaya untuk jasa pembuatan website dan aplikasi Android dengan teknologi terkini."
        />
        <meta
          property="twitter:image"
          content="https://kodenox.com/og-image.jpg"
        />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://kodenox.com/" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
