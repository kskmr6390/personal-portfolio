
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-dark mb-4">
          Let's <span className="text-portfolio-primary">Connect</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-dark">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-portfolio-primary mt-1" />
                <div>
                  <h4 className="font-medium text-portfolio-dark">Location</h4>
                  <p className="text-gray-600 mt-1">Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="mr-3 text-portfolio-primary mt-1" />
                <div>
                  <h4 className="font-medium text-portfolio-dark">Email</h4>
                  <a href="mailto:ksatyam1038@gmail.com" className="text-portfolio-primary hover:underline mt-1">
                    ksatyam1038@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="mr-3 text-portfolio-primary mt-1" />
                <div>
                  <h4 className="font-medium text-portfolio-dark">Phone</h4>
                  <div>
                    <a href="tel:+971509373942" className="text-portfolio-primary hover:underline mt-1 block">
                      +971 509373942 (UAE)
                    </a>
                    <a href="tel:+917397463101" className="text-portfolio-primary hover:underline mt-1 block">
                      +91 7397463101 (India)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-portfolio-dark mb-4">Connect on Social</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/satyam-chourasiya-931674141/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333] text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:ksatyam1038@gmail.com"
                  className="bg-[#EA4335] text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-primary hover:bg-blue-700">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
