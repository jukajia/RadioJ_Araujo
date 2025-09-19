import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Radio,
  ExternalLink,
  Share2,
  Download
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LivePlayer = ({ 
  isPlaying, 
  isMuted, 
  volume, 
  radioUrl,
  onPlayPause, 
  onMuteToggle, 
  onVolumeChange,
  onShare,
  onDownloadApp
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const currentProgram = {
    name: 'Programação Musical',
    host: 'Jotta Araújo',
    description: 'As melhores músicas e informações para você',
  };

  return (
    <section className="relative py-20 gradient-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#facc15] rounded-full opacity-30"
            animate={{
              x: [0, 200, 0],
              y: [0, -150, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-gradient-to-br from-[#facc15] to-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Radio className="w-16 h-16 text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#facc15]">AO VIVO</span> Agora
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
            Transmissão 24 horas com a melhor programação da região
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-lg">AO VIVO</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {currentTime.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentTime.toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{currentProgram.name}</h3>
                  <p className="text-gray-300">com {currentProgram.host}</p>
                  <p className="text-sm text-gray-400 mt-2">{currentProgram.description}</p>
                </div>

                <div className="flex items-center justify-center space-x-6 mb-6">
                  <Button
                    onClick={onPlayPause}
                    size="lg"
                    variant="yellow_filled"
                    className="w-16 h-16 rounded-full shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onMuteToggle}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                      className="w-24 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#facc15]"
                      disabled={isMuted}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={() => window.open(radioUrl, '_blank')}
                    variant="live_button"
                    className="border-white/30 text-[#1f7135] hover:bg-[#1f7135] hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Abrir Player Externo
                  </Button>
                  <Button
                    onClick={onShare}
                    variant="live_button"
                    className="border-white/30 text-[#1f7135] hover:bg-[#1f7135] hover:text-white"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                  <Button
                    onClick={onDownloadApp}
                    variant="live_button"
                    className="border-white/30 text-[#1f7135] hover:bg-[#1f7135] hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar App
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivePlayer;
