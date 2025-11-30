import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: '1+',
      label: 'Projects Completed',
      description:
        'Successfully completed various projects from Indonesian clients',
    },
    {
      icon: Target,
      value: '0%',
      label: 'Client Satisfaction',
      description: 'High level of client satisfaction with our work results',
    },
    {
      icon: Award,
      value: '1+',
      label: 'Years Experience',
      description: 'Experience in software development industry',
    },
    {
      icon: TrendingUp,
      value: '24/7',
      label: 'Support',
      description: 'Responsive technical support for every client',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-background">
      <div className="container px-6 mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
              About
              <span className="text-transparent bg-gradient-to-r from-[#00b3f5] to-[#005fd1] bg-clip-text">
                {' '}
                Kodenox
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Kodenox is a professional software house based in Jakarta,
                Indonesia. Since our establishment, we have been committed to
                providing the best digital solutions for businesses that want to
                transform into the digital era.
              </p>

              <p>
                We specialize in
                <span className="font-semibold text-foreground">
                  {' '}
                  website development services
                </span>{' '}
                that are modern and responsive, as well as
                <span className="font-semibold text-foreground">
                  {' '}
                  Android application development services
                </span>
                that are powerful and user-friendly. We work on every project
                with an approach that focuses on client needs and business
                targets.
              </p>

              <p>
                With an experienced and passionate team, we are ready to become
                a trusted digital partner to accelerate your business growth
                through technology.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-10">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Our Values
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Innovation',
                    desc: 'Always following latest technology',
                  },
                  { title: 'Quality', desc: 'Guaranteed quality work results' },
                  {
                    title: 'Client Satisfaction',
                    desc: 'Client satisfaction is priority',
                  },
                  { title: 'Transparency', desc: 'Open and clear process' },
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 text-center border bg-gradient-to-br from-primary/5 to-secondary/20 border-border/50 rounded-xl">
                  <div className="flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-r from-[#00b3f5] to-[#005fd1] rounded-xl">
                    <stat.icon className="text-white w-7 h-7" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
