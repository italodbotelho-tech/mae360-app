'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, DollarSign, PiggyBank, AlertCircle, 
  Target, Plus, ArrowLeft, Calendar, TrendingDown,
  Sparkles, BarChart3, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function FinancialModule() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);
  const [selectedPhase, setSelectedPhase] = useState('pregnancy');

  const phases = [
    { id: 'pregnancy', label: t.financial.pregnancy, color: 'from-pink-500 to-rose-500' },
    { id: 'firstYear', label: t.financial.firstYear, color: 'from-purple-500 to-pink-500' },
    { id: 'childhood', label: t.financial.childhood, color: 'from-blue-500 to-cyan-500' },
    { id: 'teen', label: t.financial.teen, color: 'from-indigo-500 to-purple-500' },
    { id: 'college', label: t.financial.college, color: 'from-emerald-500 to-teal-500' }
  ];

  const financialData = {
    pregnancy: {
      total: 15420,
      monthly: 1928,
      categories: [
        { name: 'Consultas Pré-Natal', amount: 3600, percentage: 23 },
        { name: 'Exames', amount: 2800, percentage: 18 },
        { name: 'Parto', amount: 5000, percentage: 32 },
        { name: 'Enxoval', amount: 3200, percentage: 21 },
        { name: 'Remédios e Vitaminas', amount: 820, percentage: 6 }
      ]
    },
    firstYear: {
      total: 18960,
      monthly: 1580,
      categories: [
        { name: 'Fraldas', amount: 2160, percentage: 11 },
        { name: 'Fórmula/Alimentação', amount: 3600, percentage: 19 },
        { name: 'Roupas', amount: 1800, percentage: 9 },
        { name: 'Pediatra', amount: 3600, percentage: 19 },
        { name: 'Vacinas Particulares', amount: 2400, percentage: 13 },
        { name: 'Emergências/Imprevistos', amount: 3000, percentage: 16 },
        { name: 'Produtos de Higiene', amount: 2400, percentage: 13 }
      ]
    },
    childhood: {
      total: 156000,
      monthly: 1300,
      categories: [
        { name: 'Escola', amount: 72000, percentage: 46 },
        { name: 'Transporte', amount: 18000, percentage: 12 },
        { name: 'Atividades Extracurriculares', amount: 24000, percentage: 15 },
        { name: 'Alimentação', amount: 30000, percentage: 19 },
        { name: 'Roupas e Calçados', amount: 12000, percentage: 8 }
      ]
    },
    teen: {
      total: 108000,
      monthly: 1500,
      categories: [
        { name: 'Escola/Colégio', amount: 54000, percentage: 50 },
        { name: 'Cursinho ENEM', amount: 18000, percentage: 17 },
        { name: 'Material Didático', amount: 12000, percentage: 11 },
        { name: 'Transporte', amount: 10800, percentage: 10 },
        { name: 'Projetos Pessoais', amount: 7200, percentage: 7 },
        { name: 'Intercâmbio (opcional)', amount: 6000, percentage: 5 }
      ]
    },
    college: {
      total: 240000,
      monthly: 5000,
      categories: [
        { name: 'Mensalidade', amount: 144000, percentage: 60 },
        { name: 'Moradia', amount: 48000, percentage: 20 },
        { name: 'Transporte', amount: 19200, percentage: 8 },
        { name: 'Alimentação', amount: 21600, percentage: 9 },
        { name: 'Material e Livros', amount: 7200, percentage: 3 }
      ]
    }
  };

  const currentPhaseData = financialData[selectedPhase as keyof typeof financialData];
  const totalLifetimeCost = Object.values(financialData).reduce((sum, phase) => sum + phase.total, 0);

  const aiInsights = [
    {
      type: 'warning',
      title: 'Alerta de Orçamento',
      message: 'Seus gastos com fraldas estão 15% acima da média. Considere comprar em atacado.',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      type: 'success',
      title: 'Meta Atingida',
      message: 'Parabéns! Você economizou R$ 500 este mês com o planejamento.',
      icon: Target,
      color: 'green'
    },
    {
      type: 'info',
      title: 'Previsão IA',
      message: 'Baseado no seu perfil, você precisará de R$ 2.300/mês no primeiro ano.',
      icon: Sparkles,
      color: 'purple'
    }
  ];

  const savingsGoals = [
    { name: 'Fundo Emergencial', current: 5000, target: 10000, percentage: 50 },
    { name: 'Faculdade', current: 15000, target: 100000, percentage: 15 },
    { name: 'Intercâmbio', current: 3000, target: 20000, percentage: 15 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{t.financial.title}</h1>
              <p className="text-green-100">{t.financial.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Total Lifetime Cost */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t.financial.totalCost}</h2>
              <p className="text-green-100">Da gestação até a faculdade (0-22 anos)</p>
            </div>
            <DollarSign className="w-12 h-12 opacity-50" />
          </div>
          <div className="text-5xl font-bold mb-4">
            R$ {totalLifetimeCost.toLocaleString('pt-BR')}
          </div>
          <div className="flex items-center gap-2 text-green-100">
            <Calendar className="w-4 h-4" />
            <span>Média mensal: R$ {Math.round(totalLifetimeCost / 264).toLocaleString('pt-BR')}</span>
          </div>
        </div>

        {/* Phase Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPhase === phase.id
                    ? `bg-gradient-to-r ${phase.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Phase Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phase Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {phases.find(p => p.id === selectedPhase)?.label}
                </h2>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600">
                  <Plus className="w-4 h-4 mr-2" />
                  {t.financial.addExpense}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Custo Total</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    R$ {currentPhaseData.total.toLocaleString('pt-BR')}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{t.financial.monthlyAverage}</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    R$ {currentPhaseData.monthly.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>

              {/* Categories Breakdown */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">{t.financial.categories}</h3>
                {currentPhaseData.categories.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="font-bold text-gray-900">
                        R$ {category.amount.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-500">{category.percentage}% do total</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold">{t.financial.forecast}</h2>
              </div>

              <div className="space-y-4">
                {aiInsights.map((insight, idx) => {
                  const Icon = insight.icon;
                  const colorClasses = {
                    orange: 'from-orange-500 to-amber-500',
                    green: 'from-green-500 to-emerald-500',
                    purple: 'from-purple-500 to-pink-500'
                  };

                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[insight.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{insight.title}</h4>
                        <p className="text-sm text-gray-600">{insight.message}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expense Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Histórico de Gastos</h2>
              </div>

              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 82, 70, 88, 75, 92, 85, 79, 86, 90, 88].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-500"
                         style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-gray-500">{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Goals & Alerts */}
          <div className="space-y-8">
            {/* Savings Goals */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold">{t.financial.goals}</h2>
              </div>

              <div className="space-y-6">
                {savingsGoals.map((goal, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">{goal.name}</span>
                      <span className="text-sm text-gray-500">{goal.percentage}%</span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        style={{ width: `${goal.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>R$ {goal.current.toLocaleString('pt-BR')}</span>
                      <span>R$ {goal.target.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500">
                <Plus className="w-4 h-4 mr-2" />
                Nova Meta
              </Button>
            </div>

            {/* Budget Alerts */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold">{t.financial.alerts}</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="font-semibold mb-1">Limite Mensal</div>
                  <div className="text-sm text-orange-100">Você gastou 85% do orçamento deste mês</div>
                </div>
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="font-semibold mb-1">Próximo Pagamento</div>
                  <div className="text-sm text-orange-100">Escola - R$ 1.200 em 5 dias</div>
                </div>
              </div>
            </div>

            {/* Investment Simulator */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <PiggyBank className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold">Simulador de Investimento</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Investindo R$ 500/mês</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">R$ 156.000</div>
                  <div className="text-xs text-gray-500">Em 18 anos (8% a.a.)</div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Previdência Privada</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">R$ 180.000</div>
                  <div className="text-xs text-gray-500">Em 18 anos (9% a.a.)</div>
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                <CreditCard className="w-4 h-4 mr-2" />
                Simular Investimento
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Gasto
                </Button>
                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Exportar Relatório
                </Button>
                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Consultar IA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
