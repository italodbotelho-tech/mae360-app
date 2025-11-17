'use client';

import Link from 'next/link';
import { ArrowLeft, TrendingUp, BookOpen, Heart, Target, Briefcase, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TeenModule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 pt-20">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Módulo Adolescência (13-18 anos)</h1>
              <p className="text-indigo-100">Planejamento de carreira e preparação para o futuro</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'ENEM & Vestibulares', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
            { title: 'Performance Escolar', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
            { title: 'Controle Emocional', icon: Heart, color: 'from-pink-500 to-rose-500' },
            { title: 'Planejamento de Carreira', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
            { title: 'Gastos Pessoais', icon: DollarSign, color: 'from-orange-500 to-amber-500' },
            { title: 'Metas & Objetivos', icon: Target, color: 'from-indigo-500 to-purple-500' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">Acompanhe {item.title.toLowerCase()}</p>
                <Button variant="outline" className="w-full">Acessar</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
