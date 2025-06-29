import React, { useState } from 'react';
import { Send, MessageCircle, User } from 'lucide-react';
import { 
  Card, 
  Button, 
  Input, 
  Textarea, 
  SectionHeader, 
  AnimatedSection, 
  ContactInfo,
  IconButton 
} from './ui';
import { contactInfo, personalInfo } from '../data/portfolio';
import type { FormData, FormErrors, ContactFormState } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    data: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false
  });

  const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value
      },
      errors: {
        ...prev.errors,
        [name]: undefined // Clear error when user starts typing
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const errors = validateForm(formState.data);
    
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }));
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formState.data);
      
      setFormState({
        data: { name: '', email: '', subject: '', message: '' },
        errors: {},
        isSubmitting: false,
        isSubmitted: true
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        errors: { message: 'Failed to send message. Please try again.' }
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Get In Touch"
            subtitle="Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations."
            icon={MessageCircle}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </span>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <ContactInfo
                      key={`${info.title}-${index}`}
                      icon={info.icon}
                      title={info.title}
                      value={info.value}
                      {...(info.iconColor && { iconColor: info.iconColor })}
                      {...(info.bgColor && { bgColor: info.bgColor })}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <User className="h-3 w-3 text-white" />
                  </span>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {personalInfo.socialLinks.map((social, index) => (
                    <IconButton
                      key={`${social.label}-${index}`}
                      icon={social.icon}
                      variant={social.variant}
                      size="lg"
                      tooltip={social.label}
                      onClick={() => window.open(social.href, '_blank')}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <Card variant="gradient" className="border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Response</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{'< 24h'}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Reply Rate</div>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right" delay={400}>
            <Card variant="glass">
              {formState.isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Name"
                      icon={User}
                      name="name"
                      value={formState.data.name}
                      onChange={handleChange}
                      {...(formState.errors.name && { error: formState.errors.name })}
                      required
                    />
                    <Input
                      label="Email"
                      icon={MessageCircle}
                      type="email"
                      name="email"
                      value={formState.data.email}
                      onChange={handleChange}
                      {...(formState.errors.email && { error: formState.errors.email })}
                      required
                    />
                  </div>
                  
                  <Input
                    label="Subject"
                    name="subject"
                    value={formState.data.subject}
                    onChange={handleChange}
                    {...(formState.errors.subject && { error: formState.errors.subject })}
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    icon={MessageCircle}
                    name="message"
                    rows={6}
                    value={formState.data.message}
                    onChange={handleChange}
                    {...(formState.errors.message && { error: formState.errors.message })}
                    required
                  />
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    loading={formState.isSubmitting}
                    fullWidth
                  >
                    {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;