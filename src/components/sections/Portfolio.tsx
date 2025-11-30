import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch as Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import finusaiImage from '@/assets/finusai.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Finus AI',
      description:
        'Providing practical solutions to address low financial literacy and impulsive spending behavior through a simple record-keeping application and personalized AI recommendations.',
      category: 'android',
      tech: ['Flutter', 'Python', 'SQL', 'Stripe'],
      image: finusaiImage,
      link: '#',
      github: '#',
      featured: true,
    },
    // {
    //   id: 2,
    //   title: 'Food Delivery App',
    //   description:
    //     'Aplikasi food delivery dengan real-time tracking, payment, dan rating system untuk pengalaman user yang optimal.',
    //   category: 'android',
    //   tech: ['React Native', 'Firebase', 'Google Maps API'],
    //   image: '/api/placeholder/600/400',
    //   link: '#',
    //   github: '#',
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   title: 'SaaS Dashboard',
    //   description:
    //     'Comprehensive dashboard untuk monitoring business metrics dengan data visualization yang interaktif.',
    //   category: 'website',
    //   tech: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
    //   image: '/api/placeholder/600/400',
    //   link: '#',
    //   github: '#',
    //   featured: false,
    // },
    // {
    //   id: 4,
    //   title: 'Banking Mobile App',
    //   description:
    //     'Aplikasi mobile banking dengan security tinggi, transfer, dan fitur financial planning.',
    //   category: 'android',
    //   tech: ['Flutter', 'Java', 'AWS', 'Biometric'],
    //   image: '/api/placeholder/600/400',
    //   link: '#',
    //   github: '#',
    //   featured: true,
    // },
    // {
    //   id: 5,
    //   title: 'Healthcare UI Design',
    //   description:
    //     'Desain UI/UX untuk aplikasi healthcare dengan fokus pada accessibility dan user experience.',
    //   category: 'ui-ux',
    //   tech: ['Figma', 'Adobe XD', 'Prototyping'],
    //   image: '/api/placeholder/600/400',
    //   link: '#',
    //   github: '#',
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: 'Real Estate Website',
    //   description:
    //     'Website properti dengan advanced search, virtual tour, dan integrated CRM untuk agen properti.',
    //   category: 'website',
    //   tech: ['Next.js', 'Prisma', 'MySQL', 'Mapbox'],
    //   image: '/api/placeholder/600/400',
    //   link: '#',
    //   github: '#',
    //   featured: false,
    // },
  ];

  const categories = ['all', 'website', 'android', 'ui-ux'];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'website':
        return 'Website Development';
      case 'android':
        return 'Mobile App';
      case 'ui-ux':
        return 'UI/UX Design';
      default:
        return category;
    }
  };

  return (
    <section
      id="portfolio"
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
              Portfolio
            </span>
          </h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            See our best work in various projects
            <span className="font-semibold">
              {' '}
              website creation services
            </span>{' '}
            and
            <span className="font-semibold">
              {' '}
              Android creation services
            </span>{' '}
            for clients from various industries.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-2"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category === 'all' ? 'Semua' : getCategoryLabel(category)}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`projects-grid-${activeFilter}`}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${activeFilter}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full overflow-hidden group bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20">
                  {project.featured && (
                    <div className="absolute z-10 top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00b3f5] to-[#005fd1] rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded text-primary bg-primary/10">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors text-foreground group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex mt-auto space-x-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Lihat Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground">
              There are no projects in this category.
            </p>
          </motion.div>
        )}

        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-[#02629c] to-[#022247] rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-white">
            Want to see our custom projects?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            We are ready to work on projects tailored to your business’s
            specific needs. Discuss your digital requirements with our expert
            team.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Let’s Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
