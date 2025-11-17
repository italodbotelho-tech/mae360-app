'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Send, Heart, Baby, Moon, Utensils, 
  DollarSign, Calendar, ArrowLeft, MessageCircle, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function AIAssistant() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);
  const [message, setMessage] = useState('');

  const categories = [
    { id: 'health', label: t.ai.health, icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'symptoms', label: t.ai.symptoms, icon: Baby, color: 'from-orange-500 to-amber-500' },
    { id: 'sleep', label: t.ai.sleep, icon: Moon, color: 'from-purple-500 to-pink-500' },
    { id: 'feeding', label: t.ai.feeding, icon: Utensils, color: 'from-green-500 to-emerald-500' },
    { id: 'financial', label: t.ai.financial, icon: DollarSign, color: 'from-blue-500 to-cyan-500' },
    { id: 'routine', label: t.ai.routine, icon: Clock, color: 'from-indigo-500 to-purple-500' }
  ];

  const conversation = [
    {
      type: 'user',
      message: 'Meu bebê está com dificuldade para dormir à noite. O que posso fazer?',
      time: '14:30'
    },
    {
      type: 'ai',
      message: 'Entendo sua preocupação! Aqui estão algumas dicas para melhorar o sono do bebê:\n\n1. **Rotina consistente**: Estabeleça horários fixos para dormir\n2. **Ambiente adequado**: Quarto escuro, temperatura entre 20-22°C\n3. **Banho morno**: Antes de dormir ajuda a relaxar\n4. **Evite estímulos**: Desligue TV e celular 1h antes\n5. **Alimentação adequada**: Certifique-se que está bem alimentado\n\nSe persistir por mais de 2 semanas, consulte o pediatra. Posso ajudar com mais alguma coisa?',
      time: '14:31'
    },
    {
      type: 'user',
      message: 'Qual a temperatura ideal do quarto?',
      time: '14:32'
    },
    {
      type: 'ai',
      message: 'A temperatura ideal do quarto do bebê é entre **20°C e 22°C**. Temperaturas muito altas ou baixas podem atrapalhar o sono e até ser perigosas.\n\n**Dicas importantes:**\n- Use termômetro de ambiente\n- Vista o bebê com roupas leves\n- Evite cobertores pesados\n- Mantenha boa ventilação\n\nGostaria de saber mais sobre rotina de sono?',
      time: '14:32'
    }
  ];

  const quickQuestions = [
    'Como introduzir alimentos sólidos?',
    'Meu bebê está com febre, o que fazer?',
    'Quanto custa criar um filho até os 18 anos?',
    'Como organizar a rotina do bebê?',
    'Quando devo vacinar meu bebê?',
    'Como economizar nas compras do bebê?'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 via-white to-purple-50 pt-20">
      <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{t.ai.title}</h1>
              <p className="text-fuchsia-100">{t.ai.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">{t.ai.categories}</h3>
              <div className="space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-700">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <Sparkles className="w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold mb-2">IA Premium</h3>
              <p className="text-sm text-fuchsia-100 mb-4">
                Respostas ilimitadas e personalizadas para você
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Disponível 24/7</span>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: '700px' }}>
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Assistente Mãe360</h3>
                    <div className="flex items-center gap-2 text-sm text-fuchsia-100">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {/* Welcome Message */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
                      <p className="text-gray-700 mb-2">
                        Olá! 👋 Sou sua assistente inteligente do Mãe360. Estou aqui para ajudar com:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Dúvidas sobre saúde e desenvolvimento</li>
                        <li>• Planejamento financeiro</li>
                        <li>• Rotinas e organização</li>
                        <li>• Alimentação e sono</li>
                        <li>• E muito mais!</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Como posso ajudar você hoje?</p>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">Agora</span>
                  </div>
                </div>

                {/* Conversation */}
                {conversation.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    {msg.type === 'ai' && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {msg.type === 'user' && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0" />
                    )}
                    <div className="flex-1 max-w-2xl">
                      <div className={`rounded-2xl p-4 shadow-md ${
                        msg.type === 'user'
                          ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-tr-none'
                          : 'bg-white text-gray-700 rounded-tl-none'
                      }`}>
                        <p className="whitespace-pre-line">{msg.message}</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="px-6 py-3 bg-white border-t">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {quickQuestions.slice(0, 3).map((question, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 bg-fuchsia-50 text-fuchsia-700 rounded-full text-sm font-medium hover:bg-fuchsia-100 transition-colors whitespace-nowrap"
                      onClick={() => setMessage(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 bg-white border-t">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.ai.askQuestion}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        // Handle send
                        setMessage('');
                      }
                    }}
                  />
                  <Button 
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 px-6"
                    onClick={() => setMessage('')}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  💡 A IA pode cometer erros. Sempre consulte um profissional para decisões importantes.
                </p>
              </div>
            </div>

            {/* Quick Questions Grid */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    className="text-left p-4 bg-gray-50 rounded-xl hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-colors group"
                    onClick={() => setMessage(question)}
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600" />
                      <span className="text-sm font-medium">{question}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
