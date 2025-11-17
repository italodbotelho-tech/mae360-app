'use client';

import Link from 'next/link';
import { ArrowLeft, GraduationCap, DollarSign, Home, Bus, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CollegeModule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 pt-20">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Módulo Faculdade (18+)</h1>
              <p className="text-emerald-100">Planejamento completo para a vida universitária</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Comparativo de Faculdades', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
            { title: 'Simulação de Custos', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
            { title: 'Moradia', icon: Home, color: 'from-purple-500 to-pink-500' },
            { title: 'Transporte', icon: Bus, color: 'from-orange-500 to-amber-500' },
            { title: 'Bolsas & Financiamento', icon: Award, color: 'from-pink-500 to-rose-500' },
            { title: 'Material & Livros', icon: BookOpen, color: 'from-indigo-500 to-purple-500' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">Planeje {item.title.toLowerCase()}</p>
                <Button variant="outline" className="w-full">Acessar</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
