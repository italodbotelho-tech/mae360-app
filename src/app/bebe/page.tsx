'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Moon, Milk, Baby, TrendingUp, Star, Calendar, 
  Heart, Plus, Clock, ArrowLeft, Activity, DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function BabyModule() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);

  const sleepData = [
    { time: '22:00', duration: '3h 20min', quality: 'Ótimo' },
    { time: '01:30', duration: '2h 45min', quality: 'Bom' },
    { time: '04:45', duration: '3h 15min', quality: 'Ótimo' }
  ];

  const feedingData = [
    { time: '06:00', type: 'Peito Esquerdo', duration: '15min' },
    { time: '09:30', type: 'Peito Direito', duration: '12min' },
    { time: '12:45', type: 'Mamadeira', amount: '120ml' }
  ];

  const milestones = [
    { age: '2 meses', milestone: 'Sorri socialmente', completed: true },
    { age: '3 meses', milestone: 'Sustenta a cabeça', completed: true },
    { age: '4 meses', milestone: 'Rola de barriga', completed: false },
    { age: '6 meses', milestone: 'Senta com apoio', completed: false }
  ];

  const growthData = {
    weight: { current: 6.2, percentile: 65, unit: 'kg' },
    height: { current: 62, percentile: 70, unit: 'cm' },
    headCircumference: { current: 41, percentile: 60, unit: 'cm' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Baby className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{t.baby.title}</h1>
              <p className="text-purple-100">{t.baby.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-500">{t.baby.lastSleep}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">3h 15min</div>
            <div className="text-sm text-gray-600">Qualidade: Ótimo</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <Milk className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-500">{t.baby.lastFeeding}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12:45</div>
            <div className="text-sm text-gray-600">Mamadeira - 120ml</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-500">{t.baby.todayDiapers}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">6</div>
            <div className="text-sm text-gray-600">4 xixi • 2 cocô</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sleep Tracker */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Moon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t.baby.sleep}</h2>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Plus className="w-4 h-4 mr-2" />
                  {t.baby.addRecord}
                </Button>
              </div>

              <div className="space-y-4">
                {sleepData.map((sleep, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-semibold">{sleep.time}</div>
                        <div className="text-sm text-gray-600">{sleep.duration}</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {sleep.quality}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">Análise do Sono</span>
                </div>
                <p className="text-sm text-purple-800">
                  Seu bebê dormiu 9h 20min nas últimas 24h. Isso está dentro do esperado para a idade!
                </p>
              </div>
            </div>

            {/* Feeding Tracker */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Milk className="w-5 h-5 text-pink-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t.baby.feeding}</h2>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500">
                  <Plus className="w-4 h-4 mr-2" />
                  {t.baby.addRecord}
                </Button>
              </div>

              <div className="space-y-4">
                {feedingData.map((feed, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Milk className="w-5 h-5 text-pink-600" />
                      <div>
                        <div className="font-semibold">{feed.time}</div>
                        <div className="text-sm text-gray-600">{feed.type}</div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feed.duration || feed.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">{t.baby.growth}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Peso</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {growthData.weight.current} {growthData.weight.unit}
                  </div>
                  <div className="text-xs text-gray-500">Percentil {growthData.weight.percentile}</div>
                </div>

                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Altura</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {growthData.height.current} {growthData.height.unit}
                  </div>
                  <div className="text-xs text-gray-500">Percentil {growthData.height.percentile}</div>
                </div>

                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Perímetro Cefálico</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {growthData.headCircumference.current} {growthData.headCircumference.unit}
                  </div>
                  <div className="text-xs text-gray-500">Percentil {growthData.headCircumference.percentile}</div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
                <p className="text-sm text-gray-800">
                  📊 Crescimento saudável! Seu bebê está seguindo a curva da OMS perfeitamente.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Milestones */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold">{t.baby.milestones}</h2>
              </div>

              <div className="space-y-3">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {milestone.completed && <Star className="w-4 h-4 text-white fill-white" />}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{milestone.age}</div>
                      <div className="text-sm text-gray-600">{milestone.milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Appointment */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-bold">Próxima Consulta</h3>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold mb-1">15 de Março</div>
                <div className="text-pink-100">Dr. João Silva - Pediatra</div>
              </div>
              <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
                Ver Detalhes
              </Button>
            </div>

            {/* Monthly Costs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold">{t.baby.costs}</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fraldas</span>
                  <span className="font-semibold">R$ 180</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fórmula</span>
                  <span className="font-semibold">R$ 250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Consultas</span>
                  <span className="font-semibold">R$ 300</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total Mensal</span>
                    <span className="text-2xl font-bold text-green-600">R$ 730</span>
                  </div>
                </div>
              </div>

              <Link href="/financeiro">
                <Button className="w-full mt-4" variant="outline">
                  Ver Planejamento Completo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
