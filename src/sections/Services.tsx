import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Implantes Dentários',
      description: 'Solução definitiva para substituir dentes perdidos com tecnologia de ponta e materiais de alta qualidade.',
      image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'A partir de R$ 1.500'
    },
    {
      id: '2',
      title: 'Ortodontia',
      description: 'Tratamentos ortodônticos modernos incluindo aparelhos estéticos e alinhadores transparentes.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'A partir de R$ 800'
    },
    {
      id: '3',
      title: 'Clareamento Dental',
      description: 'Clareamento profissional com resultados visíveis e duradouros para um sorriso mais branco.',
      image: 'https://images.unsplash.com/photo-1670250492416-570b5b7343b1?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'A partir de R$ 400'
    },
    {
      id: '4',
      title: 'Endodontia',
      description: 'Tratamento de canal com técnicas modernas e equipamentos de precisão para salvar seu dente.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'A partir de R$ 300'
    },
    {
      id: '5',
      title: 'Periodontia',
      description: 'Cuidados especializados para gengivas saudáveis e prevenção de doenças periodontais.',
      image: 'https://plus.unsplash.com/premium_photo-1661436618225-f9c72316215e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'A partir de R$ 200'
    },
    {
      id: '6',
      title: 'Próteses Dentárias',
      description: 'Próteses personalizadas e confortáveis para restaurar sua função mastigatória e estética.',
      image: 'https://images.unsplash.com/photo-1647524703912-9a956c08344c?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'A partir de R$ 600'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta 
            e profissionais especializados para cuidar de toda sua família.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Star size={16} className="text-yellow-400" />
                      <span>Tratamento especializado</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={16} className="text-blue-400" />
                      <span>Agendamento flexível</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <DollarSign size={16} className="text-green-400" />
                      <span>Pagamento facilitado</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de tratamentos odontológicos. 
              Entre em contato conosco para uma avaliação personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Consulta Personalizada
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Entre em Contato
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
