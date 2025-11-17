'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Baby, Calendar, Heart, CheckCircle2, BookOpen, Activity, Clock, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/custom/navbar';
import { useTranslation, type Language } from '@/lib/i18n';

export default function PregnancyModule() {
  const [language, setLanguage] = useState<Language>('pt');
  const [currentWeek, setCurrentWeek] = useState(12);
  const t = useTranslation(language);

  const pregnancyData = {
    12: {
      babySize: '5.4 cm',
      comparison: '🍋 Limão',
      symptoms: [
        'Náuseas matinais diminuindo',
        'Aumento de energia',
        'Mudanças de humor',
        'Seios sensíveis'
      ],
      checklist: [
        'Agendar ultrassom morfológico',
        'Começar exercícios leves',
        'Pesquisar sobre pré-natal',
        'Conversar sobre licença maternidade'
      ],
      development: 'O bebê já tem todos os órgãos formados e começa a fazer movimentos mais coordenados. Os rins começam a produzir urina e o bebê pode abrir e fechar as mãos.'
    },
    20: {
      babySize: '25 cm',
      comparison: '🍌 Banana',
      symptoms: [
        'Sentindo os primeiros movimentos',
        'Aumento do apetite',
        'Dores nas costas',
        'Pele mais brilhante'
      ],
      checklist: [
        'Ultrassom morfológico',
        'Começar a pensar em nomes',
        'Pesquisar sobre enxoval',
        'Fazer exercícios de respiração'
      ],
      development: 'O bebê está desenvolvendo os sentidos. Pode ouvir sons externos e responder a estímulos. A pele está sendo coberta por uma camada protetora chamada vernix.'
    },
    30: {
      babySize: '39 cm',
      comparison: '🥬 Repolho',
      symptoms: [
        'Falta de ar',
        'Inchaço nos pés',
        'Insônia',
        'Contrações de Braxton Hicks'
      ],
      checklist: [
        'Preparar o quarto do bebê',
        'Fazer curso de gestantes',
        'Preparar a mala da maternidade',
        'Escolher pediatra'
      ],
      development: 'O bebê está ganhando peso rapidamente. Os pulmões estão quase maduros e o bebê pratica respiração. Pode distinguir luz e escuridão.'
    }
  };

  const weekData = pregnancyData[currentWeek as keyof typeof pregnancyData] || pregnancyData[12];
  const progressPercentage = (currentWeek / 40) * 100;

  const appointments = [
    {
      date: '15 Jan 2024',
      type: 'Ultrassom',
      doctor: 'Dra. Maria Silva',
      status: 'upcoming'
    },
    {
      date: '22 Jan 2024',
      type: 'Consulta Pré-natal',
      doctor: 'Dr. João Santos',
      status: 'upcoming'
    }
  ];

  const diaryEntries = [
    {
      date: '10 Jan 2024',
      mood: 'happy',
      preview: 'Hoje senti o bebê se mexer pela primeira vez! Foi uma sensação incrível...'
    },
    {
      date: '08 Jan 2024',
      mood: 'excited',
      preview: 'Fizemos o ultrassom e está tudo bem com o bebê. Estou muito feliz!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {t.pregnancy.title}
                </h1>
                <p className="text-gray-600 text-lg">
                  {t.pregnancy.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Week Progress */}
          <Card className="p-6 mb-8 border-2 border-pink-200 bg-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Progresso da Gestação</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Semana {currentWeek} de 40
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-pink-600">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-gray-600">Completo</div>
              </div>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-4" />
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setCurrentWeek(Math.max(1, currentWeek - 1))}
                disabled={currentWeek <= 1}
              >
                Semana Anterior
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setCurrentWeek(Math.min(40, currentWeek + 1))}
                disabled={currentWeek >= 40}
              >
                Próxima Semana
              </Button>
              <Button 
                size="sm" 
                className="ml-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                Ir para Semana Atual
              </Button>
            </div>
          </Card>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Baby Development */}
            <Card className="lg:col-span-2 p-6 border-2 border-purple-200 bg-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Desenvolvimento do Bebê</h2>
                  <p className="text-gray-600">Semana {currentWeek}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{weekData.comparison.split(' ')[0]}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {weekData.babySize}
                  </div>
                  <div className="text-gray-600">
                    Tamanho aproximado: {weekData.comparison.split(' ')[1]}
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {weekData.development}
                </p>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="p-6 border-2 border-rose-200 bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Próxima Consulta</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gray-900">15 Jan</div>
                  <div className="text-gray-600">Ultrassom Morfológico</div>
                  <div className="text-sm text-gray-500">Dra. Maria Silva</div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    Em 5 dias
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200 bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Atividade Hoje</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Movimentos</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Água (copos)</span>
                    <span className="font-bold text-blue-600">6/8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Exercícios</span>
                    <span className="font-bold text-blue-600">30 min</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="symptoms" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="symptoms">Sintomas</TabsTrigger>
              <TabsTrigger value="checklist">Checklist</TabsTrigger>
              <TabsTrigger value="appointments">Consultas</TabsTrigger>
              <TabsTrigger value="diary">Diário</TabsTrigger>
            </TabsList>

            <TabsContent value="symptoms">
              <Card className="p-6 border-2 border-orange-200 bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Sintomas Comuns</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {weekData.symptoms.map((symptom, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{symptom}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="checklist">
              <Card className="p-6 border-2 border-green-200 bg-white shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Checklist da Semana</h2>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
                <div className="space-y-3">
                  {weekData.checklist.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-6 h-6 rounded-lg border-2 border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1">{item}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="appointments">
              <Card className="p-6 border-2 border-blue-200 bg-white shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Próximas Consultas</h2>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Agendar
                  </Button>
                </div>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <div 
                      key={index}
                      className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-bold text-lg text-gray-900 mb-1">
                            {appointment.type}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {appointment.doctor}
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                          Confirmado
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{appointment.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="diary">
              <Card className="p-6 border-2 border-purple-200 bg-white shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Diário Emocional</h2>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Entrada
                  </Button>
                </div>
                <div className="space-y-4">
                  {diaryEntries.map((entry, index) => (
                    <div 
                      key={index}
                      className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">
                          {entry.mood === 'happy' ? '😊' : '🎉'}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{entry.date}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {entry.preview}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
