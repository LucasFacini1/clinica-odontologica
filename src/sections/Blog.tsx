import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  ExternalLink
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Como Escovar os Dentes Corretamente: Guia Completo',
      excerpt: 'Aprenda as técnicas corretas de escovação dental para manter sua saúde bucal em dia e prevenir problemas futuros.',
      content: 'A escovação correta dos dentes é fundamental para manter uma boa saúde bucal...',
      author: 'Dr. Carlos Silva',
      date: '2024-03-15',
      readTime: '5 min',
      category: 'Higiene Bucal',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: '2',
      title: 'Implantes Dentários: Tudo que Você Precisa Saber',
      excerpt: 'Descubra como os implantes dentários podem restaurar seu sorriso e melhorar sua qualidade de vida.',
      content: 'Os implantes dentários são uma das melhores opções para substituir dentes perdidos...',
      author: 'Dr. Carlos Silva',
      date: '2024-03-10',
      readTime: '8 min',
      category: 'Implantes',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: '3',
      title: 'Ortodontia: Quando Começar o Tratamento?',
      excerpt: 'Saiba qual é a melhor idade para iniciar o tratamento ortodôntico e os benefícios de cada fase.',
      content: 'O tratamento ortodôntico pode ser iniciado em diferentes idades, cada uma com suas vantagens...',
      author: 'Dra. Ana Santos',
      date: '2024-03-05',
      readTime: '6 min',
      category: 'Ortodontia',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: '4',
      title: 'Clareamento Dental: Mitos e Verdades',
      excerpt: 'Desmistifique as principais dúvidas sobre clareamento dental e conheça os métodos mais eficazes.',
      content: 'O clareamento dental é um dos procedimentos estéticos mais procurados...',
      author: 'Dr. Roberto Lima',
      date: '2024-02-28',
      readTime: '7 min',
      category: 'Estética',
      image: 'https://plus.unsplash.com/premium_photo-1681997100679-254b3a528516?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      id: '5',
      title: 'Cuidados com a Saúde Bucal na Terceira Idade',
      excerpt: 'Dicas especiais para manter a saúde bucal em dia durante a terceira idade e prevenir problemas comuns.',
      content: 'Com o avanço da idade, alguns cuidados especiais com a saúde bucal se tornam necessários...',
      author: 'Dra. Maria Oliveira',
      date: '2024-02-20',
      readTime: '6 min',
      category: 'Saúde',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: '6',
      title: 'Alimentação e Saúde Bucal: O que Você Precisa Saber',
      excerpt: 'Descubra como sua alimentação pode impactar diretamente na saúde dos seus dentes e gengivas.',
      content: 'A alimentação tem um papel fundamental na manutenção da saúde bucal...',
      author: 'Dr. Carlos Silva',
      date: '2024-02-15',
      readTime: '5 min',
      category: 'Nutrição',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const handleReadArticle = React.useCallback((postId: string) => {
    // Simular abertura do artigo completo
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      console.log('Abrindo artigo:', post.title);
      alert(`Abrindo artigo: ${post.title}`);
    }
    // Em um projeto real, aqui você redirecionaria para a página do artigo
    // window.location.href = `/blog/${postId}`;
  }, [blogPosts]);

  const handleNewsletterSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter submit:', email);
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Simular cadastro na newsletter
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  }, [email]);

  return (
    <section id="blog" className="section-padding bg-white">
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
            Blog & <span className="text-primary-600">Notícias</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mantenha-se informado sobre saúde bucal, tratamentos e dicas importantes 
            para cuidar do seu sorriso. Artigos escritos pelos nossos especialistas.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
            >
              <Tag size={14} className="inline mr-1" />
              {category}
            </span>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Destaque
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {featuredPost.title}
              </h3>
              
              <p className="text-primary-100 text-lg mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-primary-100 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{featuredPost.readTime} de leitura</span>
                </div>
              </div>
              
              <motion.button
                onClick={() => handleReadArticle(featuredPost.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span>Ler Artigo</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => handleReadArticle(post.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Ler Mais</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Receba nossas novidades
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e receba dicas de saúde bucal, 
              novidades sobre tratamentos e promoções exclusivas.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {isSubscribed ? 'Cadastrado!' : 'Cadastrar'}
                </motion.button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Não enviamos spam. Cancele a qualquer momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
