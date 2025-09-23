import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Zap 
} from 'lucide-react';
import { Highlight } from '../types';

const Highlights: React.FC = () => {
  const highlights: Highlight[] = [
    {
      id: '1',
      icon: 'Shield',
      title: 'Segurança Total',
      description: 'Protocolos rigorosos de biossegurança e equipamentos esterilizados para sua proteção.'
    },
    {
      id: '2',
      icon: 'Clock',
      title: 'Agendamento Flexível',
      description: 'Horários flexíveis incluindo sábados e emergências 24h para sua conveniência.'
    },
    {
      id: '3',
      icon: 'Users',
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e especialistas em diferentes áreas da odontologia.'
    },
    {
      id: '4',
      icon: 'Award',
      title: 'Tecnologia Avançada',
      description: 'Equipamentos de última geração e técnicas modernas para tratamentos mais eficazes.'
    },
    {
      id: '5',
      icon: 'Heart',
      title: 'Cuidado Humanizado',
      description: 'Atendimento personalizado e acolhedor, priorizando seu conforto e bem-estar.'
    },
    {
      id: '6',
      icon: 'Zap',
      title: 'Resultados Rápidos',
      description: 'Tratamentos eficientes com resultados visíveis em menos tempo e maior durabilidade.'
    }
  ];

  const iconMap = {
    Shield,
    Clock,
    Users,
    Award,
    Heart,
    Zap
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a <span className="text-primary-600">DentalCare</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma experiência odontológica completa, combinando tecnologia de ponta, 
            profissionais especializados e um atendimento humanizado para cuidar do seu sorriso.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={highlight.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <IconComponent 
                      size={32} 
                      className="text-primary-600 group-hover:text-white transition-colors duration-300" 
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para cuidar do seu sorriso?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Agende sua consulta hoje mesmo e descubra como podemos transformar 
              sua saúde bucal com excelência e cuidado.
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <span>Agendar Consulta</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
