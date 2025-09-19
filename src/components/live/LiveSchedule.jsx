import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LiveSchedule = ({ onPlayPause }) => {
  const schedule = [
    { time: '06:00', program: 'Bom Dia Região', host: 'Equipe Jotta Araújo' },
    { time: '09:00', program: 'Música e Informação', host: 'Jotta Araújo' },
    { time: '12:00', program: 'Almoço Musical', host: 'Programação Especial' },
    { time: '15:00', program: 'Tarde Animada', host: 'Equipe Jotta Araújo' },
    { time: '18:00', program: 'Fim de Tarde', host: 'Jotta Araújo' },
    { time: '21:00', program: 'Noite Musical', host: 'Programação Automática' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programação <span className="gradient-text">Diária</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira nossa grade de programação e não perca seus programas favoritos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-[#1f7135]">
                        {item.time}
                      </div>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{item.program}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">com {item.host}</p>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Button
                        size="sm"
                        variant="primary_filled"
                        className="w-full"
                        onClick={onPlayPause}
                      >
                        Ouvir Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSchedule;
