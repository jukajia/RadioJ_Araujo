import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Heart } from 'lucide-react';

const LiveFeatures = () => {
  const features = [
    {
      icon: Radio,
      title: 'Transmissão 24h de Alta Qualidade',
      description: 'Nossa rádio funciona 24 horas por dia, 7 dias por semana, sempre com você, com som cristalino.'
    },
    {
      icon: Users,
      title: 'Conteúdo Local e Relevante',
      description: 'Programação focada na região oeste do Paraná, com informações que importam para a comunidade.'
    },
    {
      icon: Heart,
      title: 'Música Variada e de Qualidade',
      description: 'Seleção musical cuidadosa com os melhores sucessos nacionais, internacionais e talentos locais.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que Ouvir <span className="gradient-text">Nossa Rádio?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Qualidade, variedade e compromisso com nossa comunidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1f7135] to-[#2d8f47] rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveFeatures;
