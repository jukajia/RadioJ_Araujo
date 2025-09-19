import React from 'react';
import { motion } from 'framer-motion';
import { Users, Radio, Heart, Clock } from 'lucide-react';

const LiveStats = () => {
  const stats = [
    { icon: Users, number: '5.2K', label: 'Ouvintes Online (Simulado)' },
    { icon: Radio, number: '24h', label: 'Transmissão Ininterrupta' },
    { icon: Heart, number: '98%', label: 'Satisfação dos Ouvintes' },
    { icon: Clock, number: '5+', label: 'Anos no Ar com Qualidade' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1f7135] to-[#2d8f47] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1f7135] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
