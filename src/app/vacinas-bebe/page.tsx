'use client';

import { useState } from 'react';
import { Syringe, AlertTriangle, CheckCircle2, Calendar, Shield, Info, Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function VacinasPage() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const vaccineSchedule = [
    {
      month: 0,
      age: 'Ao nascer',
      vaccines: [
        {
          name: 'BCG',
          doses: 'Dose única',
          importance: 'Protege contra formas graves de tuberculose, especialmente meningite tuberculosa',
          diseases: ['Tuberculose'],
          sideEffects: 'Pequena ferida no local que cicatriza em até 3 meses',
          color: 'from-red-400 to-red-600'
        },
        {
          name: 'Hepatite B',
          doses: '1ª dose',
          importance: 'Previne hepatite B, que pode causar cirrose e câncer de fígado',
          diseases: ['Hepatite B'],
          sideEffects: 'Dor local leve, raramente febre baixa',
          color: 'from-orange-400 to-orange-600'
        }
      ]
    },
    {
      month: 2,
      age: '2 meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '1ª dose',
          importance: 'Protege contra 5 doenças graves de uma só vez',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae tipo b', 'Hepatite B'],
          sideEffects: 'Febre, irritabilidade, dor local',
          color: 'from-purple-400 to-purple-600'
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '1ª dose',
          importance: 'Previne paralisia infantil',
          diseases: ['Poliomielite'],
          sideEffects: 'Muito raros, geralmente bem tolerada',
          color: 'from-blue-400 to-blue-600'
        },
        {
          name: 'Pneumocócica 10',
          doses: '1ª dose',
          importance: 'Protege contra pneumonia, meningite e otite',
          diseases: ['Pneumonia', 'Meningite', 'Otite'],
          sideEffects: 'Febre, irritabilidade, vermelhidão local',
          color: 'from-cyan-400 to-cyan-600'
        },
        {
          name: 'Rotavírus',
          doses: '1ª dose',
          importance: 'Previne diarreia grave por rotavírus',
          diseases: ['Diarreia por rotavírus'],
          sideEffects: 'Raramente irritabilidade leve',
          color: 'from-green-400 to-green-600'
        }
      ]
    },
    {
      month: 3,
      age: '3 meses',
      vaccines: [
        {
          name: 'Meningocócica C',
          doses: '1ª dose',
          importance: 'Protege contra meningite meningocócica tipo C',
          diseases: ['Meningite meningocócica C'],
          sideEffects: 'Febre, irritabilidade, dor local',
          color: 'from-pink-400 to-pink-600'
        }
      ]
    },
    {
      month: 4,
      age: '4 meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '2ª dose',
          importance: 'Reforço da proteção contra as 5 doenças',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae tipo b', 'Hepatite B'],
          sideEffects: 'Febre, irritabilidade, dor local',
          color: 'from-purple-400 to-purple-600'
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '2ª dose',
          importance: 'Reforço contra paralisia infantil',
          diseases: ['Poliomielite'],
          sideEffects: 'Muito raros',
          color: 'from-blue-400 to-blue-600'
        },
        {
          name: 'Pneumocócica 10',
          doses: '2ª dose',
          importance: 'Reforço contra pneumonia e meningite',
          diseases: ['Pneumonia', 'Meningite', 'Otite'],
          sideEffects: 'Febre, irritabilidade',
          color: 'from-cyan-400 to-cyan-600'
        },
        {
          name: 'Rotavírus',
          doses: '2ª dose',
          importance: 'Completa proteção contra diarreia grave',
          diseases: ['Diarreia por rotavírus'],
          sideEffects: 'Raramente irritabilidade',
          color: 'from-green-400 to-green-600'
        }
      ]
    },
    {
      month: 5,
      age: '5 meses',
      vaccines: [
        {
          name: 'Meningocócica C',
          doses: '2ª dose',
          importance: 'Reforço contra meningite meningocócica',
          diseases: ['Meningite meningocócica C'],
          sideEffects: 'Febre, irritabilidade',
          color: 'from-pink-400 to-pink-600'
        }
      ]
    },
    {
      month: 6,
      age: '6 meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '3ª dose',
          importance: 'Completa esquema básico de proteção',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae tipo b', 'Hepatite B'],
          sideEffects: 'Febre, irritabilidade',
          color: 'from-purple-400 to-purple-600'
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '3ª dose',
          importance: 'Completa proteção contra pólio',
          diseases: ['Poliomielite'],
          sideEffects: 'Muito raros',
          color: 'from-blue-400 to-blue-600'
        }
      ]
    },
    {
      month: 9,
      age: '9 meses',
      vaccines: [
        {
          name: 'Febre Amarela',
          doses: 'Dose inicial',
          importance: 'Protege contra febre amarela, doença grave transmitida por mosquitos',
          diseases: ['Febre Amarela'],
          sideEffects: 'Febre, dor local, raramente reações alérgicas',
          color: 'from-yellow-400 to-yellow-600'
        }
      ]
    },
    {
      month: 12,
      age: '12 meses (1 ano)',
      vaccines: [
        {
          name: 'Tríplice Viral',
          doses: '1ª dose',
          importance: 'Protege contra sarampo, caxumba e rubéola',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola'],
          sideEffects: 'Febre após 5-12 dias, manchas vermelhas leves',
          color: 'from-red-400 to-red-600'
        },
        {
          name: 'Pneumocócica 10',
          doses: 'Reforço',
          importance: 'Reforço da proteção contra pneumonia',
          diseases: ['Pneumonia', 'Meningite', 'Otite'],
          sideEffects: 'Febre, irritabilidade',
          color: 'from-cyan-400 to-cyan-600'
        },
        {
          name: 'Meningocócica C',
          doses: 'Reforço',
          importance: 'Reforço contra meningite',
          diseases: ['Meningite meningocócica C'],
          sideEffects: 'Febre, irritabilidade',
          color: 'from-pink-400 to-pink-600'
        }
      ]
    },
    {
      month: 15,
      age: '15 meses',
      vaccines: [
        {
          name: 'DTP',
          doses: '1º reforço',
          importance: 'Reforço contra difteria, tétano e coqueluche',
          diseases: ['Difteria', 'Tétano', 'Coqueluche'],
          sideEffects: 'Febre, dor local, irritabilidade',
          color: 'from-indigo-400 to-indigo-600'
        },
        {
          name: 'VOP (Poliomielite oral)',
          doses: '1º reforço',
          importance: 'Reforço contra pólio (gotinha)',
          diseases: ['Poliomielite'],
          sideEffects: 'Muito raros',
          color: 'from-blue-400 to-blue-600'
        },
        {
          name: 'Hepatite A',
          doses: 'Dose única',
          importance: 'Protege contra hepatite A',
          diseases: ['Hepatite A'],
          sideEffects: 'Dor local leve',
          color: 'from-orange-400 to-orange-600'
        },
        {
          name: 'Tetra Viral',
          doses: 'Dose única',
          importance: 'Protege contra sarampo, caxumba, rubéola e varicela',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola', 'Varicela (catapora)'],
          sideEffects: 'Febre, manchas leves',
          color: 'from-purple-400 to-purple-600'
        }
      ]
    },
    {
      month: 48,
      age: '4 anos',
      vaccines: [
        {
          name: 'DTP',
          doses: '2º reforço',
          importance: 'Último reforço do esquema infantil',
          diseases: ['Difteria', 'Tétano', 'Coqueluche'],
          sideEffects: 'Febre, dor local',
          color: 'from-indigo-400 to-indigo-600'
        },
        {
          name: 'VOP (Poliomielite oral)',
          doses: '2º reforço',
          importance: 'Último reforço contra pólio',
          diseases: ['Poliomielite'],
          sideEffects: 'Muito raros',
          color: 'from-blue-400 to-blue-600'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Calendário Nacional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vacinas do Bebê
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calendário completo de vacinação infantil com alertas e informações detalhadas
          </p>
        </div>

        {/* Alerta de Importância */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">⚠️ Vacinas Atrasadas?</h2>
              <p className="mb-4">
                Manter o calendário de vacinação em dia é ESSENCIAL para proteger seu bebê contra doenças graves e potencialmente fatais. 
                Vacinas atrasadas deixam a criança vulnerável e podem comprometer a imunidade de toda a comunidade.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Procure o posto de saúde IMEDIATAMENTE se houver atraso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Leve sempre a caderneta de vacinação nas consultas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Configure lembretes para não esquecer as datas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Todas as vacinas do calendário básico são GRATUITAS no SUS</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Por que vacinar */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            Por que vacinar é tão importante?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-900">Proteção Individual</h3>
              <p className="text-sm text-gray-700">Protege seu bebê contra doenças graves que podem causar sequelas permanentes ou morte</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold mb-2 text-purple-900">Imunidade Coletiva</h3>
              <p className="text-sm text-gray-700">Quando muitos se vacinam, protegem também quem não pode se vacinar (bebês muito pequenos, imunodeprimidos)</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h3 className="font-bold mb-2 text-pink-900">Erradicação de Doenças</h3>
              <p className="text-sm text-gray-700">Vacinas já erradicaram a varíola e quase eliminaram a poliomielite no mundo</p>
            </div>
          </div>
        </Card>

        {/* Calendário */}
        <div className="space-y-6">
          {vaccineSchedule.map((schedule) => (
            <Card key={schedule.month} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{schedule.age}</h3>
                    <p className="text-gray-600">{schedule.vaccines.length} vacina(s)</p>
                  </div>
                </div>
                <Button
                  variant={selectedMonth === schedule.month ? 'default' : 'outline'}
                  onClick={() => setSelectedMonth(selectedMonth === schedule.month ? null : schedule.month)}
                  className="gap-2"
                >
                  {selectedMonth === schedule.month ? 'Ocultar' : 'Ver'} Detalhes
                </Button>
              </div>

              {selectedMonth === schedule.month && (
                <div className="mt-6 space-y-4">
                  {schedule.vaccines.map((vaccine, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{vaccine.name}</h4>
                          <Badge className="mt-1">{vaccine.doses}</Badge>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vaccine.color} flex items-center justify-center`}>
                          <Syringe className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="font-bold text-sm text-gray-700 mb-1 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            Importância:
                          </h5>
                          <p className="text-sm text-gray-700 pl-6">{vaccine.importance}</p>
                        </div>

                        <div>
                          <h5 className="font-bold text-sm text-gray-700 mb-1 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            Protege contra:
                          </h5>
                          <div className="flex flex-wrap gap-2 pl-6">
                            {vaccine.diseases.map((disease, i) => (
                              <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                {disease}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-bold text-sm text-gray-700 mb-1 flex items-center gap-2">
                            <Info className="w-4 h-4 text-blue-600" />
                            Possíveis reações:
                          </h5>
                          <p className="text-sm text-gray-600 pl-6">{vaccine.sideEffects}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Dicas Finais */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Dicas Importantes
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Leve a caderneta de vacinação em TODAS as consultas médicas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Informe o médico sobre qualquer reação anterior a vacinas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Não há problema em tomar várias vacinas no mesmo dia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Febre leve após vacina é normal - use antitérmico se necessário</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Configure lembretes no celular para não esquecer as datas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Em caso de dúvidas, procure sempre um profissional de saúde</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
