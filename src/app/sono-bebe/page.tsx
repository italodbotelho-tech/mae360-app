'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Clock, Baby, Moon, Wind, Waves, Droplets, Heart, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export default function SonoBebesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sounds = [
    {
      id: 'white-noise',
      name: 'Ruído Branco',
      icon: Wind,
      description: 'Som constante que mascara outros ruídos',
      color: 'from-gray-400 to-gray-600',
      frequency: 'white-noise'
    },
    {
      id: 'pink-noise',
      name: 'Ruído Rosa',
      icon: Music,
      description: 'Mais suave que o branco, como chuva leve',
      color: 'from-pink-400 to-pink-600',
      frequency: 'pink-noise'
    },
    {
      id: 'brown-noise',
      name: 'Ruído Marrom',
      icon: Waves,
      description: 'Som profundo e relaxante',
      color: 'from-amber-600 to-amber-800',
      frequency: 'brown-noise'
    },
    {
      id: 'rain',
      name: 'Chuva',
      icon: Droplets,
      description: 'Som de chuva caindo suavemente',
      color: 'from-blue-400 to-blue-600',
      frequency: 'rain'
    },
    {
      id: 'ocean',
      name: 'Ondas do Mar',
      icon: Waves,
      description: 'Ondas quebrando na praia',
      color: 'from-cyan-400 to-cyan-600',
      frequency: 'ocean'
    },
    {
      id: 'heartbeat',
      name: 'Batimento Cardíaco',
      icon: Heart,
      description: 'Simula o som do útero materno',
      color: 'from-red-400 to-red-600',
      frequency: 'heartbeat'
    }
  ];

  const timerOptions = [
    { label: '15 min', value: 15 },
    { label: '30 min', value: 30 },
    { label: '45 min', value: 45 },
    { label: '1 hora', value: 60 },
    { label: '2 horas', value: 120 },
    { label: 'Contínuo', value: null }
  ];

  useEffect(() => {
    // Criar contexto de áudio
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (timer && isPlaying) {
      setTimeRemaining(timer * 60);
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            stopSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timer, isPlaying]);

  const generateSound = (type: string) => {
    if (typeof window === 'undefined') return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const bufferSize = audioContext.sampleRate * 2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = buffer.getChannelData(0);

    switch (type) {
      case 'white-noise':
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        break;
      case 'pink-noise':
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11;
          b6 = white * 0.115926;
        }
        break;
      case 'brown-noise':
        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }
        break;
      case 'rain':
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.sin(i / 100);
        }
        break;
      case 'ocean':
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.sin(i / 50) * (Math.random() * 0.5 + 0.5);
        }
        break;
      case 'heartbeat':
        const bpm = 60;
        const beatInterval = audioContext.sampleRate * (60 / bpm);
        for (let i = 0; i < bufferSize; i++) {
          const position = i % beatInterval;
          if (position < beatInterval * 0.1) {
            output[i] = Math.sin((position / (beatInterval * 0.1)) * Math.PI);
          } else if (position < beatInterval * 0.2) {
            output[i] = Math.sin(((position - beatInterval * 0.1) / (beatInterval * 0.1)) * Math.PI) * 0.5;
          } else {
            output[i] = 0;
          }
        }
        break;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(0);

    return { source, audioContext, gainNode };
  };

  const playSound = (soundId: string) => {
    if (currentSound === soundId && isPlaying) {
      stopSound();
      return;
    }

    stopSound();
    setCurrentSound(soundId);
    setIsPlaying(true);

    const sound = sounds.find(s => s.id === soundId);
    if (sound) {
      generateSound(sound.frequency);
    }
  };

  const stopSound = () => {
    setIsPlaying(false);
    setCurrentSound(null);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Moon className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Sono Tranquilo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ruídos Brancos para Bebês
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sons relaxantes que ajudam seu bebê a dormir melhor e mais profundamente
          </p>
        </div>

        {/* Benefícios */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Baby className="w-6 h-6 text-purple-600" />
            Por que funcionam?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold mb-2 text-purple-900">Mascara Ruídos</h3>
              <p className="text-sm text-gray-700">Bloqueia sons externos que podem acordar o bebê</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h3 className="font-bold mb-2 text-pink-900">Lembra o Útero</h3>
              <p className="text-sm text-gray-700">Sons similares ao ambiente intrauterino acalmam o bebê</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-bold mb-2 text-indigo-900">Relaxamento</h3>
              <p className="text-sm text-gray-700">Ajuda o bebê a entrar em sono profundo mais rápido</p>
            </div>
          </div>
        </Card>

        {/* Player Controls */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() => currentSound && playSound(currentSound)}
                className={`rounded-full w-16 h-16 ${
                  isPlaying
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-gray-400 to-gray-600'
                }`}
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </Button>
              <div>
                <div className="font-bold text-lg">
                  {currentSound ? sounds.find(s => s.id === currentSound)?.name : 'Selecione um som'}
                </div>
                {timer && isPlaying && (
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {formatTime(timeRemaining)}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <VolumeX className="w-5 h-5 text-gray-400" />
              <Slider
                value={[volume * 100]}
                onValueChange={(value) => setVolume(value[0] / 100)}
                max={100}
                step={1}
                className="w-32"
              />
              <Volume2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Timer Options */}
          <div className="flex flex-wrap gap-2">
            {timerOptions.map((option) => (
              <Button
                key={option.label}
                variant={timer === option.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimer(option.value)}
                className={timer === option.value ? 'bg-purple-600' : ''}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* Sound Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sounds.map((sound) => {
            const Icon = sound.icon;
            const isActive = currentSound === sound.id;
            
            return (
              <Card
                key={sound.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  isActive ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
                onClick={() => playSound(sound.id)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sound.color} flex items-center justify-center mb-4 ${
                  isActive && isPlaying ? 'animate-pulse' : ''
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{sound.name}</h3>
                <p className="text-sm text-gray-600">{sound.description}</p>
                {isActive && isPlaying && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-purple-600 font-medium">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                    Tocando agora
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Dicas */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <h2 className="text-2xl font-bold mb-4">💡 Dicas de Uso</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Use volume moderado - não precisa ser alto para funcionar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Coloque o dispositivo a uma distância segura do berço</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Teste diferentes sons - cada bebê tem suas preferências</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Use durante sonecas e à noite para criar rotina</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>O ruído branco clássico é o mais eficaz para recém-nascidos</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
