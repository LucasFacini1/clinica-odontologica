import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  User,
  Calendar,
  Award
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  treatment: string;
  rating: number;
  text: string;
  image: string;
  date: string;
  verified: boolean;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Maria Silva',
      age: 35,
      treatment: 'Implante Dentário',
      rating: 5,
      text: 'Excelente atendimento! O Dr. Carlos foi muito atencioso e explicou todo o processo. O resultado ficou perfeito, muito natural. Recomendo a clínica para todos!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      name: 'João Santos',
      age: 42,
      treatment: 'Ortodontia',
      rating: 5,
      text: 'Fiz o tratamento ortodôntico com a Dra. Ana e o resultado superou minhas expectativas. Profissionalismo e qualidade excepcionais. Minha autoestima melhorou muito!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-02-20',
      verified: true
    },
    {
      id: '3',
      name: 'Ana Costa',
      age: 28,
      treatment: 'Clareamento Dental',
      rating: 5,
      text: 'O clareamento dental foi incrível! Processo rápido e indolor. A equipe é muito profissional e o ambiente da clínica é acolhedor. Voltarei sempre!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '4',
      name: 'Carlos Oliveira',
      age: 55,
      treatment: 'Prótese Dentária',
      rating: 5,
      text: 'Após anos com problemas dentários, finalmente encontrei uma clínica que me deu confiança. A prótese ficou perfeita e me devolveu a qualidade de vida.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-01-30',
      verified: true
    },
    {
      id: '5',
      name: 'Fernanda Lima',
      age: 31,
      treatment: 'Tratamento de Canal',
      rating: 5,
      text: 'O Dr. Roberto fez meu tratamento de canal sem dor alguma. Equipamentos modernos e técnica perfeita. Recomendo de olhos fechados!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: '2024-02-15',
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
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
            O que nossos <span className="text-primary-600">pacientes</span> dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja alguns depoimentos reais de quem confia no nosso trabalho.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600">Avaliação média</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-gray-600">Pacientes satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <p className="text-gray-600">Taxa de recomendação</p>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Quote className="text-primary-600" size={32} />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Patient Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h4>
                        {testimonials[currentIndex].verified && (
                          <Award size={16} className="text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].age} anos • {testimonials[currentIndex].treatment}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span>{new Date(testimonials[currentIndex].date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="text-gray-600" size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Seja nosso próximo caso de sucesso!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se aos centenas de pacientes que já transformaram seus sorrisos conosco.
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Agendar Consulta
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
