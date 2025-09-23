import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  MapPin,
  Calendar,
  Heart
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
  location: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'clinic', name: 'Clínica' },
    { id: 'treatments', name: 'Tratamentos' },
    { id: 'before-after', name: 'Antes e Depois' },
    { id: 'team', name: 'Equipe' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Recepção Moderna',
      category: 'clinic',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nossa recepção acolhedora e moderna, projetada para o conforto dos pacientes.',
      date: '2024-01-15',
      location: 'Recepção Principal'
    },
    {
      id: '2',
      title: 'Consultório 1',
      category: 'clinic',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Consultório equipado com tecnologia de ponta para procedimentos odontológicos.',
      date: '2024-01-20',
      location: 'Consultório 1'
    },
    {
      id: '3',
      title: 'Implante Dentário - Caso 1',
      category: 'before-after',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Resultado de implante dentário realizado com sucesso. Transformação completa do sorriso.',
      date: '2024-02-10',
      location: 'Consultório 2'
    },
    {
      id: '4',
      title: 'Ortodontia - Caso 2',
      category: 'before-after',
      image: 'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Tratamento ortodôntico completo com resultados excepcionais.',
      date: '2024-02-15',
      location: 'Consultório 3'
    },
    {
      id: '5',
      title: 'Equipamentos Modernos',
      category: 'treatments',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes.',
      date: '2024-01-25',
      location: 'Laboratório'
    },
    {
      id: '6',
      title: 'Equipe em Ação',
      category: 'team',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Nossa equipe trabalhando em conjunto para proporcionar o melhor atendimento.',
      date: '2024-03-01',
      location: 'Clínica'
    },
    {
      id: '7',
      title: 'Sala de Espera',
      category: 'clinic',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ambiente confortável e relaxante para nossos pacientes.',
      date: '2024-01-30',
      location: 'Sala de Espera'
    },
    {
      id: '8',
      title: 'Clareamento Dental',
      category: 'treatments',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Procedimento de clareamento dental com resultados imediatos.',
      date: '2024-02-20',
      location: 'Consultório 1'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentImageIndex(filteredItems.findIndex(img => img.id === item.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
    setSelectedImage(filteredItems[(currentImageIndex + 1) % filteredItems.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setSelectedImage(filteredItems[(currentImageIndex - 1 + filteredItems.length) % filteredItems.length]);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
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
            Nossa <span className="text-primary-600">Galeria</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa clínica, equipamentos e alguns dos resultados dos nossos tratamentos. 
            Um ambiente moderno e acolhedor para cuidar do seu sorriso.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">Ver detalhes</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
              </div>

              {/* Item Info */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />

                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{new Date(selectedImage.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <MapPin size={16} />
                    <span>{selectedImage.location}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer fazer parte da nossa galeria de sucessos?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Agende sua consulta e transforme seu sorriso. Seu antes e depois pode ser nosso próximo caso de sucesso!
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Heart size={18} />
              <span>Agendar Consulta</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
