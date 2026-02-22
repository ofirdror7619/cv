'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (integrate with your preferred email service)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="rounded-lg shadow-md p-8" style={{backgroundColor: '#1E293B'}}>
      <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#E2E8F0'}}>
        Get In Touch
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#E2E8F0'}}>
              Contact Information
            </h3>
            <p className="mb-6" style={{color: '#E2E8F0'}}>
              I'm always interested in new opportunities and exciting projects in software engineering, 
              cloud architecture, and AI technologies. Feel free to reach out if you'd like to collaborate 
              or discuss potential opportunities!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#0F172A'}}>
              <Mail className="w-8 h-8" style={{color: '#38BDF8'}} />
              <div>
                <p className="font-medium" style={{color: '#E2E8F0'}}>Email</p>
                <a 
                  href="mailto:ofirdror7619@gmail.com" 
                  className="transition-colors hover:opacity-80"
                  style={{color: '#38BDF8'}}
                >
                  ofirdror7619@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#0F172A'}}>
              <Phone className="w-8 h-8" style={{color: '#38BDF8'}} />
              <div>
                <p className="font-medium" style={{color: '#E2E8F0'}}>Phone</p>
                <a 
                  href="tel:+972547550489" 
                  className="transition-colors hover:opacity-80"
                  style={{color: '#38BDF8'}}
                >
                  054-7550489
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#0F172A'}}>
              <MapPin className="w-8 h-8" style={{color: '#38BDF8'}} />
              <div>
                <p className="font-medium" style={{color: '#E2E8F0'}}>Location</p>
                <p style={{color: '#E2E8F0'}}>Eliyahu Ben Hur 14, Petah Tikva, Israel</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3" style={{color: '#E2E8F0'}}>
              Find me online
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ofirdror"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-colors hover:opacity-80"
                style={{backgroundColor: '#0F172A'}}
              >
                <Github className="w-8 h-8" style={{color: '#38BDF8'}} />
              </a>
              <a
                href="https://linkedin.com/in/ofir-dror"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-colors hover:opacity-80"
                style={{backgroundColor: '#0F172A'}}
              >
                <Linkedin className="w-8 h-8" style={{color: '#38BDF8'}} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1" style={{color: '#E2E8F0'}}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                style={{backgroundColor: '#0F172A', color: '#E2E8F0'}}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1" style={{color: '#E2E8F0'}}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                style={{backgroundColor: '#0F172A', color: '#E2E8F0'}}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1" style={{color: '#E2E8F0'}}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                style={{backgroundColor: '#0F172A', color: '#E2E8F0'}}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1" style={{color: '#E2E8F0'}}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                style={{backgroundColor: '#0F172A', color: '#E2E8F0'}}
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 hover:opacity-80"
              style={{backgroundColor: '#38BDF8', color: '#0F172A'}}
            >
              <Send className="w-8 h-8" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;