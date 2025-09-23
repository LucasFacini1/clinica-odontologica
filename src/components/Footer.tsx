import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Equipe', href: '#team' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ];

  const services = [
    'Implantes Dentários',
    'Ortodontia',
    'Clareamento',
    'Endodontia',
    'Periodontia',
    'Próteses',
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold">DentalCare</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cuidando do seu sorriso com excelência e tecnologia de ponta. 
                Sua saúde bucal é nossa prioridade.
              </p>
            </motion.div>
          </div>

          {/* Links Rápidos */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Links Rápidos
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Serviços */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Nossos Serviços
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contato */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Contato
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300 text-sm">contato@dentalcare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Rua das Flores, 123<br />
                  Centro - São Paulo, SP
                </span>
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} DentalCare. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
