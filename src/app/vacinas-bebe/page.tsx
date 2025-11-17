'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Syringe, Plus, Calendar, CheckCircle2, AlertCircle,
  ArrowLeft, Upload, Bell, TrendingUp, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function BabyVaccinesModule() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);

  const vaccines = [
    {
      name: 'BCG',
      age: 'Ao nascer',
      applied: true,
      date: '15/01/2024',
      lot: 'BCG2024A',
      location: 'Hospital Maternidade',
      professional: 'Enf. Maria Silva',
      nextDose: null
    },
    {
      name: 'Hepatite B',
      age: 'Ao nascer',
      applied: true,
      date: '15/01/2024',
      lot: 'HEPB2024B',
      location: 'Hospital Maternidade',
      professional: 'Enf. Maria Silva',
      nextDose: null
    },
    {
      name: 'Pentavalente (DTP+Hib+HepB)',
      age: '2 meses',
      applied: true,
      date: '15/03/2024',
      lot: 'PENTA2024C',
      location: 'UBS Centro',
      professional: 'Enf. João Santos',
      nextDose: '15/05/2024'
    },
    {
      name: 'VIP (Poliomielite)',
      age: '2 meses',
      applied: true,
      date: '15/03/2024',
      lot: 'VIP2024D',
      location: 'UBS Centro',
      professional: 'Enf. João Santos',
      nextDose: '15/05/2024'
    },
    {
      name: 'Rotavírus',
      age: '2 meses',
      applied: true,
      date: '15/03/2024',
      lot: 'ROTA2024E',
      location: 'UBS Centro',
      professional: 'Enf. João Santos',
      nextDose: '15/05/2024'
    },
    {
      name: 'Pneumocócica 10',
      age: '2 meses',
      applied: true,
      date: '15/03/2024',
      lot: 'PNEU2024F',
      location: 'UBS Centro',
      professional: 'Enf. João Santos',
      nextDose: '15/05/2024'
    },
    {
      name: 'Meningocócica C',
      age: '3 meses',
      applied: false,
      date: null,
      lot: null,
      location: null,
      professional: null,
      nextDose: '15/04/2024'
    },
    {
      name: 'Pentavalente (2ª dose)',
      age: '4 meses',
      applied: false,
      date: null,
      lot: null,
      location: null,
      professional: null,
      nextDose: '15/05/2024'
    },
    {
      name: 'VIP (2ª dose)',
      age: '4 meses',
      applied: false,
      date: null,
      lot: null,
      location: null,
      professional: null,
      nextDose: '15/05/2024'
    },
    {
      name: 'Rotavírus (2ª dose)',
      age: '4 meses',
      applied: false,
      date: null,
      lot: null,
      location: null,
      professional: null,
      nextDose: '15/05/2024'
    }
  ];

  const upToDate = vaccines.filter(v => v.applied).length;
  const pending = vaccines.filter(v => !v.applied).length;
  const percentage = Math.round((upToDate / vaccines.length) * 100);

  const upcomingVaccines = vaccines.filter(v => !v.applied && v.nextDose).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-pink-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Syringe className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{t.vaccines.title}</h1>
              <p className="text-red-100">{t.vaccines.subtitle} - {t.vaccines.baby}</p>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">{t.vaccines.upToDate}</span>
              </div>
              <div className="text-3xl font-bold">{upToDate}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{t.vaccines.pending}</span>
              </div>
              <div className="text-3xl font-bold">{pending}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Progresso</span>
              </div>
              <div className="text-3xl font-bold">{percentage}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Vaccine List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500">
                <Plus className="w-4 h-4 mr-2" />
                {t.vaccines.addVaccine}
              </Button>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Carteirinha
              </Button>
              <Button variant="outline">
                <Bell className="w-4 h-4 mr-2" />
                Configurar Alertas
              </Button>
            </div>

            {/* Vaccines List */}
            <div className="space-y-4">
              {vaccines.map((vaccine, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                    vaccine.applied
                      ? 'border-green-200'
                      : 'border-orange-200 hover:border-orange-400'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      vaccine.applied
                        ? 'bg-green-100'
                        : 'bg-orange-100'
                    }`}>
                      {vaccine.applied ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{vaccine.name}</h3>
                          <p className="text-sm text-gray-600">{vaccine.age}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          vaccine.applied
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {vaccine.applied ? 'Aplicada' : 'Pendente'}
                        </span>
                      </div>

                      {vaccine.applied ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">{t.vaccines.date}</div>
                            <div className="font-semibold">{vaccine.date}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">{t.vaccines.lot}</div>
                            <div className="font-semibold">{vaccine.lot}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">{t.vaccines.location}</div>
                            <div className="font-semibold">{vaccine.location}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">{t.vaccines.professional}</div>
                            <div className="font-semibold">{vaccine.professional}</div>
                          </div>
                          {vaccine.nextDose && (
                            <div className="md:col-span-2">
                              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-blue-800">
                                  Próxima dose: {vaccine.nextDose}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-4 bg-orange-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-semibold text-orange-800">
                              Agendar para: {vaccine.nextDose}
                            </span>
                          </div>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            Registrar Aplicação
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Progresso da Vacinação</h3>
              <div className="relative h-40 flex items-center justify-center mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#f3f4f6"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold text-gray-900">{percentage}%</div>
                  <div className="text-sm text-gray-600">Completo</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Aplicadas</span>
                  <span className="font-semibold">{upToDate}/{vaccines.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pendentes</span>
                  <span className="font-semibold text-orange-600">{pending}</span>
                </div>
              </div>
            </div>

            {/* Next Vaccines */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-6 h-6" />
                <h3 className="text-xl font-bold">Próximas Vacinas</h3>
              </div>
              <div className="space-y-3">
                {upcomingVaccines.map((vaccine, idx) => (
                  <div key={idx} className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <div className="font-semibold mb-1">{vaccine.name}</div>
                    <div className="flex items-center gap-2 text-sm text-orange-100">
                      <Calendar className="w-4 h-4" />
                      <span>{vaccine.nextDose}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold">Informações Importantes</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  📅 Mantenha a carteirinha sempre atualizada
                </p>
                <p>
                  🔔 Configure alertas para não perder nenhuma dose
                </p>
                <p>
                  📱 Leve sempre a carteirinha digital nas consultas
                </p>
                <p>
                  💉 Vacinas protegem seu bebê de doenças graves
                </p>
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Carteirinha Digital</h3>
              <p className="text-sm text-blue-100 mb-4">
                Baixe a carteirinha completa em PDF para apresentar nas consultas
              </p>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Upload className="w-4 h-4 mr-2" />
                Baixar PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
