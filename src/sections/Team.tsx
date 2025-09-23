import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Heart, 
  Star,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  education: string;
  image: string;
  description: string;
  achievements: string[];
  social: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Carlos Silva',
      role: 'Diretor Clínico',
      specialty: 'Implantodontia',
      experience: '15 anos',
      education: 'USP - Especialização em Implantodontia',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Especialista em implantes dentários com mais de 1000 procedimentos realizados com sucesso.',
      achievements: [
        'Certificação Internacional em Implantodontia',
        'Membro da Associação Brasileira de Odontologia',
        'Palestrante em Congressos Internacionais'
      ],
      social: {
        instagram: '#',
        linkedin: '#',
        email: 'carlos@dentalcare.com'
      }
    },
    {
      id: '2',
      name: 'Dra. Ana Santos',
      role: 'Ortodontista',
      specialty: 'Ortodontia',
      experience: '12 anos',
      education: 'UNICAMP - Especialização em Ortodontia',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Especialista em tratamentos ortodônticos modernos, incluindo alinhadores transparentes.',
      achievements: [
        'Certificação em Invisalign',
        'Especialista em Ortodontia Lingual',
        'Membro da Associação Brasileira de Ortodontia'
      ],
      social: {
        instagram: '#',
        linkedin: '#',
        email: 'ana@dentalcare.com'
      }
    },
    {
      id: '3',
      name: 'Dr. Roberto Lima',
      role: 'Endodontista',
      specialty: 'Endodontia',
      experience: '10 anos',
      education: 'UNIFESP - Especialização em Endodontia',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Especialista em tratamento de canal com técnicas modernas e equipamentos de precisão.',
      achievements: [
        'Certificação em Microscopia Endodôntica',
        'Especialista em Retratamento Endodôntico',
        'Membro da Associação Brasileira de Endodontia'
      ],
      social: {
        instagram: '#',
        linkedin: '#',
        email: 'roberto@dentalcare.com'
      }
    },
    {
      id: '4',
      name: 'Dra. Maria Oliveira',
      role: 'Periodontista',
      specialty: 'Periodontia',
      experience: '8 anos',
      education: 'USP - Especialização em Periodontia',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Especialista em tratamentos gengivais e implantes com foco em estética e funcionalidade.',
      achievements: [
        'Certificação em Cirurgia Plástica Periodontal',
        'Especialista em Regeneração Óssea',
        'Membro da Associação Brasileira de Periodontia'
      ],
      social: {
        instagram: '#',
        linkedin: '#',
        email: 'maria@dentalcare.com'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="team" className="section-padding bg-white">
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
            Nossa <span className="text-primary-600">Equipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossos profissionais altamente qualificados e especializados, 
            dedicados a proporcionar o melhor cuidado para sua saúde bucal.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.specialty}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Education */}
                  <div className="flex items-start space-x-2 mb-4">
                    <GraduationCap size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-500">
                      {member.education}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {member.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award size={14} className="text-yellow-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {member.social.instagram && (
                      <motion.a
                        href={member.social.instagram}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Instagram size={14} className="text-pink-600" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Linkedin size={14} className="text-blue-600" />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Mail size={14} className="text-gray-600" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              Agende sua consulta com nossos especialistas
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para cuidar do seu sorriso com a mais alta qualidade e tecnologia.
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

export default Team;
