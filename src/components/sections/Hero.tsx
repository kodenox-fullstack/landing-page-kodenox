import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-background dark:via-background dark:to-background/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Trusted Software House in Indonesia
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#00acf3] to-[#009beb] bg-clip-text text-transparent">
              Leading Software House
            </span>
            <br />
            for Web & Android Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Kodenox is a professional software house focusing on
            <span className="font-semibold text-foreground"> website development services </span>
            and
            <span className="font-semibold text-foreground"> Android development services </span>
            of high quality. Modern digital solutions for your business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contact">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#portfolio">
                View Portfolio
              </a>
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clean Code</h3>
              <p className="text-muted-foreground text-sm">
                High-quality code that is maintainable and scalable
              </p>
            </motion.div>

            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Fast development with clear timeline and on-time delivery
              </p>
            </motion.div>

            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Support 24/7</h3>
              <p className="text-muted-foreground text-sm">
                Continuous technical support after project completion
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero