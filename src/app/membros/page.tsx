'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, FileText, Wrench, Users, HeadphonesIcon,
  TrendingUp, Star, Play, Download, Clock, CheckCircle2,
  ArrowRight, Sparkles, Award, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function MembersArea() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);

  const courses = [
    {
      title: 'Gestação Saudável',
      progress: 75,
      lessons: 12,
      duration: '3h 20min',
      thumbnail: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Introdução Alimentar',
      progress: 45,
      lessons: 8,
      duration: '2h 15min',
      thumbnail: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Planejamento Financeiro',
      progress: 90,
      lessons: 15,
      duration: '4h 30min',
      thumbnail: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Desenvolvimento Infantil',
      progress: 30,
      lessons: 10,
      duration: '3h 00min',
      thumbnail: 'from-blue-500 to-cyan-500'
    }
  ];

  const templates = [
    {
      name: 'Planilha Financeira Completa',
      type: 'Excel',
      downloads: 1250,
      icon: FileText,
      color: 'green'
    },
    {
      name: 'Checklist da Gestante',
      type: 'PDF',
      downloads: 2340,
      icon: CheckCircle2,
      color: 'pink'
    },
    {
      name: 'Plano de Parto',
      type: 'Word',
      downloads: 890,
      icon: FileText,
      color: 'purple'
    },
    {
      name: 'Rotina do Bebê',
      type: 'PDF',
      downloads: 1560,
      icon: Clock,
      color: 'blue'
    }
  ];

  const tools = [
    {
      name: 'Calculadora de Custos',
      description: 'Calcule todos os gastos da gestação ao futuro',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Gerador de Rotina',
      description: 'Crie rotinas personalizadas para seu bebê',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Assistente IA',
      description: 'Tire dúvidas 24/7 com nossa IA especializada',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Comparador de Faculdades',
      description: 'Compare custos e benefícios de universidades',
      icon: Award,
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const recentContent = [
    {
      title: 'Como economizar na gestação',
      type: 'Aula',
      date: '2 dias atrás',
      duration: '25min'
    },
    {
      title: 'Marcos do desenvolvimento 0-12 meses',
      type: 'Guia',
      date: '5 dias atrás',
      duration: '15min'
    },
    {
      title: 'Planejamento financeiro para faculdade',
      type: 'Aula',
      date: '1 semana atrás',
      duration: '45min'
    }
  ];

  const achievements = [
    { name: 'Primeira Semana', unlocked: true },
    { name: '10 Aulas Completas', unlocked: true },
    { name: 'Planejamento Ativo', unlocked: true },
    { name: 'Mestre Financeiro', unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{t.members.welcome}, Maria! 👋</h1>
              <p className="text-purple-100">Você está no Plano Premium</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">75%</div>
              <div className="text-sm text-purple-100">Progresso Geral</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-purple-100">Cursos Ativos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">45</div>
              <div className="text-sm text-purple-100">Aulas Completas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">8</div>
              <div className="text-sm text-purple-100">Templates Baixados</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">156</div>
              <div className="text-sm text-purple-100">Dias de Acesso</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'dashboard', label: t.members.dashboard, icon: TrendingUp },
            { id: 'courses', label: t.members.courses, icon: BookOpen },
            { id: 'templates', label: t.members.templates, icon: FileText },
            { id: 'tools', label: t.members.tools, icon: Wrench },
            { id: 'community', label: t.members.community, icon: Users },
            { id: 'support', label: t.members.support, icon: HeadphonesIcon }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <Icon className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t.members.courses}</h2>
                </div>
                <Button size="sm" variant="outline">
                  Ver Todos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className={`h-32 rounded-xl bg-gradient-to-br ${course.thumbnail} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{course.lessons} aulas</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{course.progress}% completo</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Templates */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t.members.templates}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template, idx) => {
                  const Icon = template.icon;
                  const colorClasses = {
                    green: 'from-green-500 to-emerald-500',
                    pink: 'from-pink-500 to-rose-500',
                    purple: 'from-purple-500 to-pink-500',
                    blue: 'from-blue-500 to-cyan-500'
                  };

                  return (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[template.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{template.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{template.type}</span>
                          <span>•</span>
                          <span>{template.downloads} downloads</span>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-gray-400" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold">{t.members.tools}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{tool.name}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Progress Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6" />
                <h3 className="text-xl font-bold">{t.members.myProgress}</h3>
              </div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <p className="text-purple-100 mb-4">Você está indo muito bem!</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cursos</span>
                  <span>12/16</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Aulas</span>
                  <span>45/60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Templates</span>
                  <span>8/12</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Conquistas</h3>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl ${
                    achievement.unlocked ? 'bg-yellow-50' : 'bg-gray-50'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}>
                      {achievement.unlocked ? (
                        <Award className="w-5 h-5 text-white" />
                      ) : (
                        <Star className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <span className={`font-semibold ${
                      achievement.unlocked ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* New Content */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">{t.members.newContent}</h3>
              </div>

              <div className="space-y-4">
                {recentContent.map((content, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <Play className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{content.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{content.type}</span>
                        <span>•</span>
                        <span>{content.duration}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{content.date}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link href="/comunidade">
                  <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                    <Users className="w-4 h-4 mr-2" />
                    Ir para Comunidade
                  </Button>
                </Link>
                <Link href="/ia-assistente">
                  <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Consultar IA
                  </Button>
                </Link>
                <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                  <HeadphonesIcon className="w-4 h-4 mr-2" />
                  Suporte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
