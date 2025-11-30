import { motion } from 'framer-motion';

const TechStack = () => {
  const frontendTechs = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Framer Motion', icon: '🎬' },
  ];

  const backendTechs = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Go', icon: '🐹' },
    { name: 'Ruby', icon: '💎' },
  ];

  const mobileTechs = [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Kotlin', icon: '🎯' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Android', icon: '🤖' },
    { name: 'iOS', icon: '📲' },
  ];

  const databaseTechs = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Supabase', icon: '⚡' },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  const allCategories = [
    { title: 'Frontend', techs: frontendTechs },
    { title: 'Backend', techs: backendTechs },
    { title: 'Mobile', techs: mobileTechs },
    { title: 'Database', techs: databaseTechs },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
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
              Technology
            </span>
          </h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            We use the latest and most reliable technologies to ensure optimal
            results
            <span className="font-semibold">
              {' '}
              website development services
            </span>{' '}
            and
            <span className="font-semibold">
              {' '}
              android app development services.
            </span>{' '}
            We use the latest and most reliable technologies to ensure results
            that are high-quality, scalable, and maintainable.
          </p>
        </motion.div>

        {/* Tech Stack Categories */}
        <div className="space-y-16">
          {allCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00b3f5] to-[#005fd1] rounded-full mx-auto" />
              </div>

              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                <div className="flex space-x-8">
                  {/* First Marquee */}
                  <motion.div
                    className="flex space-x-8"
                    variants={marqueeVariants}
                    animate="animate"
                  >
                    {[...category.techs, ...category.techs].map(
                      (tech, index) => (
                        <div
                          key={`${tech.name}-${index}`}
                          className="flex flex-col items-center justify-center w-32 h-32 transition-all duration-300 border cursor-pointer bg-gradient-to-br from-primary/5 to-secondary/20 border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg group"
                        >
                          <div className="mb-2 text-3xl transition-transform duration-300 group-hover:scale-110">
                            {tech.icon}
                          </div>
                          <span className="text-sm font-medium text-center transition-colors text-foreground group-hover:text-primary">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#02629c] to-[#022247] rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Technology That’s Always Up-to-date
          </h3>
          <p className="max-w-3xl mx-auto mb-8 leading-relaxed text-white/90">
            We continuously keep up with the latest technological developments
            to deliver modern, efficient solutions that meet current industry
            standards. Our team is always ready to adopt new technologies that
            can provide added value to your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Modern Stack',
              'Best Practices',
              'Security First',
              'Performance Optimized',
              'Scalable Architecture',
            ].map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
