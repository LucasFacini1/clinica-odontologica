import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'general', name: 'Geral' },
    { id: 'treatments', name: 'Tratamentos' },
    { id: 'appointment', name: 'Agendamento' },
    { id: 'payment', name: 'Pagamento' }
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar sua consulta de várias formas: pelo WhatsApp (11) 99999-9999, pelo telefone (11) 99999-9999, ou através do nosso formulário de contato no site. Nossa equipe está disponível de segunda a sexta, das 8h às 18h.',
      category: 'appointment'
    },
    {
      id: 2,
      question: 'Quais são os horários de funcionamento?',
      answer: 'Funcionamos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Para emergências, temos um plantão 24h que pode ser acessado pelo WhatsApp.',
      category: 'general'
    },
    {
      id: 3,
      question: 'Vocês aceitam convênios?',
      answer: 'Sim, aceitamos os principais convênios odontológicos. Entre em contato conosco para verificar se seu convênio está em nossa rede credenciada. Também oferecemos planos de pagamento facilitado para tratamentos particulares.',
      category: 'payment'
    },
    {
      id: 4,
      question: 'Quanto tempo dura um tratamento de implante?',
      answer: 'O tempo de tratamento varia de acordo com cada caso, mas geralmente um implante dentário leva de 3 a 6 meses para ser concluído. Isso inclui a cicatrização óssea e a confecção da prótese final.',
      category: 'treatments'
    },
    {
      id: 5,
      question: 'O tratamento ortodôntico dói?',
      answer: 'Pode haver um desconforto leve nos primeiros dias após a colocação ou ajuste do aparelho, mas isso é normal e temporário. Nossa equipe orienta sobre como aliviar esse desconforto e fornece analgésicos quando necessário.',
      category: 'treatments'
    },
    {
      id: 6,
      question: 'Posso fazer clareamento dental em casa?',
      answer: 'Oferecemos tanto clareamento em consultório quanto caseiro. O clareamento em consultório é mais rápido e eficaz, enquanto o caseiro é mais gradual. Nossa equipe avalia qual método é mais adequado para seu caso.',
      category: 'treatments'
    },
    {
      id: 7,
      question: 'Qual é a idade mínima para tratamento ortodôntico?',
      answer: 'Não há uma idade mínima fixa, pois cada caso é único. Geralmente, a primeira avaliação ortodôntica é recomendada aos 7 anos, mas o tratamento pode começar em qualquer idade, inclusive em adultos.',
      category: 'treatments'
    },
    {
      id: 8,
      question: 'Como funciona o pagamento?',
      answer: 'Aceitamos dinheiro, cartões de débito e crédito, PIX e parcelamos tratamentos em até 12x sem juros no cartão. Para tratamentos mais complexos, oferecemos planos de pagamento personalizados.',
      category: 'payment'
    },
    {
      id: 9,
      question: 'Preciso de encaminhamento médico?',
      answer: 'Não é necessário encaminhamento médico para consultas odontológicas. Você pode agendar diretamente conosco. No entanto, se você tem alguma condição médica específica, é importante nos informar durante o agendamento.',
      category: 'general'
    },
    {
      id: 10,
      question: 'Vocês fazem atendimento de emergência?',
      answer: 'Sim, temos plantão 24h para emergências odontológicas. Em casos de dor intensa, trauma ou urgências, entre em contato pelo WhatsApp (11) 99999-9999. Nossa equipe está sempre disponível para ajudar.',
      category: 'general'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
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
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços, 
            tratamentos e procedimentos. Se não encontrar sua pergunta, entre em contato conosco!
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
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <Minus className="text-primary-600" size={24} />
                  ) : (
                    <Plus className="text-primary-600" size={24} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não encontrou sua pergunta?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas. 
                Entre em contato conosco pelos canais abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-sm text-gray-600">Resposta rápida</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+5511999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-sm text-gray-600">(11) 99999-9999</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contato@dentalcare.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">contato@dentalcare.com</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
