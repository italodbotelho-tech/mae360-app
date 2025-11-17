'use client';

import Link from 'next/link';
import { ArrowLeft, Syringe, Calendar, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MomVaccinesModule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 pt-20">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Syringe className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Vacinas da Mamãe</h1>
              <p className="text-pink-100">Pré-natal e pós-parto - Mantenha sua saúde em dia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'dTpa (Tríplice Bacteriana)', description: 'Protege contra difteria, tétano e coqueluche', color: 'from-pink-500 to-rose-500' },
            { name: 'Influenza (Gripe)', description: 'Proteção contra gripe sazonal', color: 'from-purple-500 to-pink-500' },
            { name: 'Hepatite B', description: 'Prevenção de hepatite B', color: 'from-blue-500 to-cyan-500' },
            { name: 'Covid-19', description: 'Proteção contra coronavírus', color: 'from-green-500 to-emerald-500' }
          ].map((vaccine, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${vaccine.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2">{vaccine.name}</h3>
              <p className="text-gray-600 mb-4">{vaccine.description}</p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar
                </Button>
                <Button className={`flex-1 bg-gradient-to-r ${vaccine.color}`}>
                  Registrar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <Shield className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Proteção Completa</h3>
            <p className="text-sm text-pink-100">Mantenha suas vacinas em dia para proteger você e seu bebê</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
            <Bell className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Alertas Automáticos</h3>
            <p className="text-sm text-purple-100">Receba lembretes para não perder nenhuma dose</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Calendário Completo</h3>
            <p className="text-sm text-blue-100">Acompanhe todas as datas importantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
