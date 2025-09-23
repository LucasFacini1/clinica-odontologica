import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const Address: React.FC = () => {
  const locationInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Flores, 123 - Centro',
      description: 'São Paulo, SP - CEP: 01234-567'
    },
    {
      icon: Navigation,
      title: 'Como Chegar',
      content: 'Próximo ao Metrô República',
      description: '5 minutos a pé da estação'
    },
    {
      icon: Car,
      title: 'Estacionamento',
      content: 'Estacionamento próprio',
      description: 'Vagas gratuitas para pacientes'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 8h às 18h',
      description: 'Sábados: 8h às 12h'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
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
            Nossa <span className="text-primary-600">Localização</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos localizados no coração de São Paulo, com fácil acesso por transporte público 
            e estacionamento próprio para sua comodidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Map Image Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-primary-200">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Localização da clínica"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-full p-4 shadow-lg"
                  >
                    <MapPin className="text-primary-600" size={32} />
                  </motion.div>
                </div>

                {/* Location Pin */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-900">
                      DentalCare - Aqui estamos!
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Map Controls */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary-600" size={16} />
                    <span className="text-sm text-gray-600">
                      Rua das Flores, 123 - Centro, SP
                    </span>
                  </div>
                  <motion.a
                    href="https://maps.google.com/?q=Rua+das+Flores,+123,+Centro,+São+Paulo,+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                  >
                    Ver no Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações da Localização
              </h3>
              
              <div className="space-y-6">
                {locationInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transportation Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Opções de Transporte
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Metrô República</span>
                  <span className="text-sm text-gray-500">5 min a pé</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ônibus Centro</span>
                  <span className="text-sm text-gray-500">2 min a pé</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Estacionamento</span>
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Navigation size={18} />
                <span>Agendar Consulta</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Address;
