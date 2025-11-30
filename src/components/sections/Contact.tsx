import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Check if environment variables are set
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
      }

      // Email template parameters
      const templateParams = {
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
        to_name: 'Kodenox Team',
        reply_to: data.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setIsSubmitted(true);
        toast.success('Message sent successfully!');
        reset();

        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(`Email service returned status: ${result.status}`);
      }
    } catch (error: any) {
      console.error('Contact form error:', error);

      // Handle Gmail OAuth scopes error specifically
      if (
        error.text &&
        error.text.includes(
          'Gmail_API: Request had insufficient authentication scopes'
        )
      ) {
        toast.error(
          'Gmail service requires additional permissions. Please contact administrator.'
        );
        return;
      }

      // More specific error handling
      if (error.status === 412) {
        toast.error('Precondition Failed. Check EmailJS configuration.');
      } else if (error.status === 400) {
        toast.error('Bad Request. Please check all form fields.');
      } else if (error.status === 401) {
        toast.error('Unauthorized. Check your EmailJS public key.');
      } else if (error.status === 403) {
        toast.error('Forbidden. Email service limit reached.');
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Website development services',
    'Android app development services',
    'UI/UX Design',
    'Custom Software Development',
    'Other',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kodenox2025@gmail.com',
      href: 'mailto:kodenox2025@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0882-1188-7538',
      href: 'tel:+6288211887538',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <Toaster position="top-right" />

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
            Contact
            <span className="bg-gradient-to-r from-[#00b3f5] to-[#005fd1] bg-clip-text text-transparent">
              {' '}
              Us
            </span>
          </h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            Ready to start your digital project? Consult your needs with us.
            <span className="font-semibold">
              {' '}
              website development services
            </span>{' '}
            or
            <span className="font-semibold">
              {' '}
              android app development services{' '}
            </span>{' '}
            We are ready to help turn your ideas into powerful digital
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 mx-auto lg:grid-cols-3 max-w-7xl">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Get in Touch
              </h3>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                We are ready to assist you with the best digital solutions.
                Contact us for a free consultation and to discuss your project
                needs.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-border/50 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00b3f5] to-[#005fd1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.label}
                      </h4>
                      <a
                        href={info.href}
                        className="transition-colors text-muted-foreground hover:text-primary"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="mb-4 font-semibold text-foreground">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-background/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-900/20">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Message Sent Successfully!
                    </h3>
                    <p className="mb-8 text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-foreground"
                        >
                          Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-foreground"
                        >
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="youremail@gmail.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block mb-2 text-sm font-medium text-foreground"
                      >
                        Service Type *
                      </label>
                      <select
                        {...register('service')}
                        id="service"
                        className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-foreground"
                      >
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 transition-all duration-200 border rounded-lg resize-none border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-3 border-2 border-white rounded-full border-t-transparent animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
