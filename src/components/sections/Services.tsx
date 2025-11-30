import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Jasa Pembuatan Website',
      description:
        'Website profesional dan modern dengan teknologi terkini. Responsive design dan SEO optimized.',
      features: [
        'Responsive Design',
        'SEO Friendly',
        'Performance Optimized',
        'Modern Framework',
      ],
      gradient: 'from-blue-500 to-blue-600',
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: 'Jasa Pembuatan Android',
      description:
        'Aplikasi Android native yang powerful dan user-friendly untuk iOS dan Android.',
      features: [
        'Native Performance',
        'Cross-Platform',
        'Offline Support',
        'Push Notifications',
      ],
      gradient: 'from-purple-500 to-purple-600',
      delay: 0.2,
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Desain interface yang menarik dan user experience yang optimal untuk produk digital Anda.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design System',
      ],
      gradient: 'from-pink-500 to-pink-600',
      delay: 0.3,
    },
    // {
    //   icon: Cpu,
    //   title: 'Custom Software',
    //   description: 'Solusi software yang dikustomisasi sesuai kebutuhan bisnis Anda.',
    //   features: ['Bespoke Solutions', 'API Integration', 'Automation', 'Scalable Architecture'],
    //   gradient: 'from-green-500 to-green-600',
    //   delay: 0.4
    // },
    // {
    //   icon: Database,
    //   title: 'Database Management',
    //   description: 'Manajemen database yang aman, cepat, dan terstruktur untuk data perusahaan.',
    //   features: ['Data Migration', 'Performance Tuning', 'Security', 'Backup & Recovery'],
    //   gradient: 'from-orange-500 to-orange-600',
    //   delay: 0.5
    // },
    // {
    //   icon: Cloud,
    //   title: 'Cloud Solutions',
    //   description: 'Implementasi dan management cloud infrastructure untuk skalabilitas maksimal.',
    //   features: ['Cloud Migration', 'DevOps', 'Monitoring', 'Auto-scaling'],
    //   gradient: 'from-cyan-500 to-cyan-600',
    //   delay: 0.6
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container px-6 mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
            Our
            <span className="bg-gradient-to-r from-[#00b3f5] to-[#005fd1] bg-clip-text text-transparent">
              {' '}
              Services
            </span>
          </h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            As a trusted software house, we provide various
            <span className="font-semibold">
              {' '}
              website development services
            </span>{' '}
            and
            <span className="font-semibold">
              {' '}
              Android development services
            </span>{' '}
            with the best quality to support your business digital
            transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full transition-all duration-300 group hover:shadow-xl border-border/50 hover:border-primary/50 bg-background/80 backdrop-blur-sm">
                <CardHeader className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-xl font-bold transition-colors text-foreground group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  {/* Features */}
                  <ul className="flex-1 mb-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#02629c] to-[#022247] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to Start Your Project?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Consult your digital needs with our expert team. Get the best
              solutions for
              <span className="font-semibold">
                {' '}
                website development services
              </span>{' '}
              and
              <span className="font-semibold">
                {' '}
                Android development services
              </span>{' '}
              with quality.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
