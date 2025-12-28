'use client';

import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'siranjeevi@example.com',
    href: 'mailto:siranjeevi@example.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/siranjeevi',
    href: 'https://github.com/siranjeevi',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/siranjeevi',
    href: 'https://linkedin.com/in/siranjeevi',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          Get In Touch
        </h2>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
          <p className="text-center text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div
                  className="bg-teal-50 hover:bg-teal-100 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-4 group-hover:animate-bounce">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-teal-600 font-medium break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Made with passion by{' '}
            <span className="text-teal-600 font-bold">Siranjeevi</span>
          </p>
          <p className="text-gray-500 mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
