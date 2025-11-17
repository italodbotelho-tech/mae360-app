'use client';

import { useState } from 'react';
import { Heart, AlertCircle, CheckCircle2, Clock, TrendingUp, Activity, Baby, Scissors, Shield, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PartoPage() {
  const [selectedType, setSelectedType] = useState<'normal' | 'cesariana' | null>(null);

  const partoNormal = {
    title: 'Parto Normal',
    subtitle: 'Via vaginal - processo natural',
    icon: Heart,
    color: 'from-green-400 to-emerald-600',
    vantagens: [
      'Recuperação mais rápida (2-3 dias de internação)',
      'Menor risco de infecção hospitalar',
      'Bebê passa pelo canal vaginal, recebendo bactérias benéficas',
      'Estimula a produção de leite materno mais rapidamente',
      'Menor risco de problemas respiratórios no bebê',
      'Não deixa cicatriz visível',
      'Menor custo para o sistema de saúde',
      'Permite contato pele a pele imediato',
      'Recuperação do útero mais rápida',
      'Menor risco de trombose'
    ],
    desvantagens: [
      'Dor durante o trabalho de parto',
      'Duração imprevisível (pode levar horas)',
      'Possibilidade de laceração perineal',
      'Risco de incontinência urinária temporária',
      'Possível necessidade de episiotomia',
      'Hemorroidas podem surgir ou piorar',
      'Cansaço físico intenso'
    ],
    indicacoes: [
      'Gravidez de baixo risco',
      'Bebê em posição cefálica (cabeça para baixo)',
      'Dilatação adequada do colo do útero',
      'Ausência de complicações maternas ou fetais',
      'Desejo da mãe (quando possível)'
    ],
    processo: [
      {
        fase: 'Fase 1 - Dilatação',
        duracao: '8-12 horas (primeira gestação)',
        descricao: 'Contrações regulares, colo do útero dilata até 10cm'
      },
      {
        fase: 'Fase 2 - Expulsão',
        duracao: '30 minutos a 2 horas',
        descricao: 'Momento de fazer força, bebê desce pelo canal vaginal'
      },
      {
        fase: 'Fase 3 - Dequitação',
        duracao: '5-30 minutos',
        descricao: 'Expulsão da placenta'
      }
    ],
    recuperacao: [
      'Alta hospitalar em 24-48 horas',
      'Retorno às atividades leves em 1-2 semanas',
      'Exercícios físicos após 4-6 semanas',
      'Relações sexuais após 4-6 semanas (com liberação médica)'
    ]
  };

  const cesariana = {
    title: 'Cesárea',
    subtitle: 'Cirurgia abdominal',
    icon: Scissors,
    color: 'from-blue-400 to-indigo-600',
    vantagens: [
      'Data e horário programados (quando eletiva)',
      'Evita dor do trabalho de parto',
      'Menor risco de incontinência urinária',
      'Preserva o assoalho pélvico',
      'Pode ser necessária por indicação médica',
      'Permite laqueadura simultânea (se desejado)',
      'Menor risco de prolapso de órgãos pélvicos'
    ],
    desvantagens: [
      'Recuperação mais lenta e dolorosa (3-4 dias de internação)',
      'Cicatriz permanente no abdômen',
      'Maior risco de infecção hospitalar',
      'Maior risco de trombose',
      'Maior risco de problemas respiratórios no bebê',
      'Dificuldade para amamentar nos primeiros dias',
      'Maior risco em gestações futuras',
      'Aderências abdominais podem ocorrer',
      'Maior tempo para retorno às atividades',
      'Risco cirúrgico (anestesia, hemorragia)'
    ],
    indicacoes: [
      'Desproporção entre cabeça do bebê e bacia materna',
      'Bebê em posição transversa ou pélvica',
      'Placenta prévia (bloqueando o canal)',
      'Descolamento prematuro de placenta',
      'Sofrimento fetal',
      'Herpes genital ativo',
      'HIV com carga viral alta',
      'Cesáreas anteriores (em alguns casos)',
      'Gemelaridade (em alguns casos)',
      'Problemas de saúde materna graves'
    ],
    processo: [
      {
        fase: 'Preparação',
        duracao: '30-60 minutos',
        descricao: 'Anestesia (raqui ou peridural), assepsia, preparação cirúrgica'
      },
      {
        fase: 'Cirurgia',
        duracao: '45-60 minutos',
        descricao: 'Incisão, retirada do bebê (5-10 min), sutura do útero e abdômen'
      },
      {
        fase: 'Recuperação',
        duracao: '2-4 horas',
        descricao: 'Observação na sala de recuperação, retorno dos movimentos'
      }
    ],
    recuperacao: [
      'Alta hospitalar em 3-4 dias',
      'Dor controlada com medicamentos',
      'Retorno às atividades leves em 3-4 semanas',
      'Exercícios físicos após 6-8 semanas',
      'Relações sexuais após 6-8 semanas (com liberação médica)',
      'Cuidados com a cicatriz por 6 meses'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Baby className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Guia Completo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Parto Normal vs Cesárea
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda as diferenças, vantagens e desvantagens de cada tipo de parto para tomar a melhor decisão
          </p>
        </div>

        {/* Informação Importante */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="flex items-start gap-4">
            <Info className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">ℹ️ Informação Importante</h2>
              <p className="mb-4">
                A OMS (Organização Mundial da Saúde) recomenda que apenas 10-15% dos partos sejam cesáreas. 
                No Brasil, a taxa chega a 55%, sendo 85% na rede privada. A cesárea deve ser realizada apenas quando há indicação médica real.
              </p>
              <p className="font-bold">
                O parto normal é mais seguro para mãe e bebê quando não há complicações. Converse sempre com seu obstetra sobre a melhor opção para seu caso.
              </p>
            </div>
          </div>
        </Card>

        {/* Seletor de Tipo */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              selectedType === 'normal' ? 'ring-4 ring-green-500 shadow-2xl' : ''
            }`}
            onClick={() => setSelectedType(selectedType === 'normal' ? null : 'normal')}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partoNormal.color} flex items-center justify-center mb-4`}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{partoNormal.title}</h2>
            <p className="text-gray-600 mb-4">{partoNormal.subtitle}</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              {selectedType === 'normal' ? 'Ver Menos' : 'Ver Detalhes'}
            </Button>
          </Card>

          <Card
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              selectedType === 'cesariana' ? 'ring-4 ring-blue-500 shadow-2xl' : ''
            }`}
            onClick={() => setSelectedType(selectedType === 'cesariana' ? null : 'cesariana')}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cesariana.color} flex items-center justify-center mb-4`}>
              <Scissors className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{cesariana.title}</h2>
            <p className="text-gray-600 mb-4">{cesariana.subtitle}</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {selectedType === 'cesariana' ? 'Ver Menos' : 'Ver Detalhes'}
            </Button>
          </Card>
        </div>

        {/* Detalhes Parto Normal */}
        {selectedType === 'normal' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-700">
                <CheckCircle2 className="w-6 h-6" />
                Vantagens do Parto Normal
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {partoNormal.vantagens.map((vantagem, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{vantagem}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-700">
                <AlertCircle className="w-6 h-6" />
                Desvantagens do Parto Normal
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {partoNormal.desvantagens.map((desvantagem, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{desvantagem}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-700">
                <Shield className="w-6 h-6" />
                Indicações para Parto Normal
              </h3>
              <div className="space-y-2">
                {partoNormal.indicacoes.map((indicacao, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{indicacao}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700">
                <Clock className="w-6 h-6" />
                Fases do Parto Normal
              </h3>
              <div className="space-y-4">
                {partoNormal.processo.map((fase, idx) => (
                  <div key={idx} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-purple-900">{fase.fase}</h4>
                      <Badge className="bg-purple-600">{fase.duracao}</Badge>
                    </div>
                    <p className="text-sm text-gray-700">{fase.descricao}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-700">
                <Activity className="w-6 h-6" />
                Recuperação Pós-Parto Normal
              </h3>
              <div className="space-y-2">
                {partoNormal.recuperacao.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Detalhes Cesárea */}
        {selectedType === 'cesariana' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-700">
                <CheckCircle2 className="w-6 h-6" />
                Vantagens da Cesárea
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {cesariana.vantagens.map((vantagem, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{vantagem}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-700">
                <AlertCircle className="w-6 h-6" />
                Desvantagens da Cesárea
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {cesariana.desvantagens.map((desvantagem, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{desvantagem}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-700">
                <Shield className="w-6 h-6" />
                Indicações Médicas para Cesárea
              </h3>
              <div className="space-y-2">
                {cesariana.indicacoes.map((indicacao, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{indicacao}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700">
                <Clock className="w-6 h-6" />
                Etapas da Cesárea
              </h3>
              <div className="space-y-4">
                {cesariana.processo.map((fase, idx) => (
                  <div key={idx} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-purple-900">{fase.fase}</h4>
                      <Badge className="bg-purple-600">{fase.duracao}</Badge>
                    </div>
                    <p className="text-sm text-gray-700">{fase.descricao}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-700">
                <Activity className="w-6 h-6" />
                Recuperação Pós-Cesárea
              </h3>
              <div className="space-y-2">
                {cesariana.recuperacao.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Comparação Rápida */}
        <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Comparação Rápida</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-3 font-bold">Aspecto</th>
                  <th className="text-center p-3 font-bold text-green-700">Parto Normal</th>
                  <th className="text-center p-3 font-bold text-blue-700">Cesárea</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Recuperação</td>
                  <td className="p-3 text-center text-green-600">2-3 dias</td>
                  <td className="p-3 text-center text-blue-600">3-4 dias</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Dor pós-parto</td>
                  <td className="p-3 text-center text-green-600">Moderada</td>
                  <td className="p-3 text-center text-blue-600">Intensa (controlada)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Retorno atividades</td>
                  <td className="p-3 text-center text-green-600">1-2 semanas</td>
                  <td className="p-3 text-center text-blue-600">3-4 semanas</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Amamentação</td>
                  <td className="p-3 text-center text-green-600">Imediata</td>
                  <td className="p-3 text-center text-blue-600">Pode ter dificuldade inicial</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Risco infecção</td>
                  <td className="p-3 text-center text-green-600">Baixo</td>
                  <td className="p-3 text-center text-blue-600">Moderado</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Cicatriz</td>
                  <td className="p-3 text-center text-green-600">Não visível</td>
                  <td className="p-3 text-center text-blue-600">Permanente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Mensagem Final */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Decisão Informada
          </h2>
          <p className="mb-4">
            A escolha entre parto normal e cesárea deve ser feita em conjunto com seu obstetra, considerando:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Condições de saúde da mãe e do bebê</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Histórico obstétrico anterior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Evolução da gestação atual</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300">•</span>
              <span>Preferências pessoais (quando possível)</span>
            </li>
          </ul>
          <p className="font-bold text-lg">
            Lembre-se: o mais importante é a segurança da mãe e do bebê. Confie em seu médico e tire todas as suas dúvidas durante o pré-natal!
          </p>
        </Card>
      </div>
    </div>
  );
}
