'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Baby, Heart, TrendingUp, FileText, Syringe, Users, 
  ShoppingBag, Sparkles, Calendar, BookOpen, Shield, 
  CheckCircle2, Star, ArrowRight, Zap, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('pt');
  const t = useTranslation(language);

  const modules = [
    {
      id: 'pregnancy',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      link: '/gravidez'
    },
    {
      id: 'baby',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      link: '/bebe'
    },
    {
      id: 'childhood',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      link: '/infancia'
    },
    {
      id: 'teen',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      link: '/adolescencia'
    },
    {
      id: 'college',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-500',
      link: '/faculdade'
    },
    {
      id: 'financial',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      link: '/financeiro'
    },
    {
      id: 'documents',
      icon: FileText,
      color: 'from-orange-500 to-amber-500',
      link: '/exames'
    },
    {
      id: 'vaccinesBaby',
      icon: Syringe,
      color: 'from-red-500 to-pink-500',
      link: '/vacinas-bebe'
    },
    {
      id: 'vaccinesMom',
      icon: Syringe,
      color: 'from-pink-500 to-purple-500',
      link: '/vacinas-mae'
    },
    {
      id: 'community',
      icon: Users,
      color: 'from-violet-500 to-purple-500',
      link: '/comunidade'
    },
    {
      id: 'premium',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      link: '/consultoria'
    },
    {
      id: 'shop',
      icon: ShoppingBag,
      color: 'from-cyan-500 to-blue-500',
      link: '/loja'
    },
    {
      id: 'ai',
      icon: Sparkles,
      color: 'from-fuchsia-500 to-pink-500',
      link: '/ia-assistente'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-8">
            <Star className="w-4 h-4 text-pink-600 fill-pink-600" />
            <span className="text-sm font-medium text-pink-700">{t.hero.trustBadge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.hero.headline}
            </span>
            <br />
            <span className="text-gray-900">{t.hero.subheadline}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/checkout">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-2xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-2xl border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">100k+</div>
              <div className="text-gray-600">Mães Ativas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">13</div>
              <div className="text-gray-600">Módulos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.modules.title}
            </h2>
            <p className="text-xl text-gray-600">{t.modules.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              const moduleData = t.modules[module.id as keyof typeof t.modules] as any;
              
              // Verificação de segurança para evitar erro de undefined
              if (!moduleData || typeof moduleData !== 'object') {
                return null;
              }
              
              return (
                <Link key={module.id} href={module.link}>
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{moduleData.title || 'Módulo'}</h3>
                    <p className="text-gray-600 mb-4">{moduleData.description || ''}</p>
                    <div className="flex flex-wrap gap-2">
                      {moduleData.features?.map((feature: string, idx: number) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-pink-50 text-pink-700 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.free.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.pricing.free.price}</span>
                <span className="text-gray-600">{t.pricing.free.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.free.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                {t.pricing.free.cta}
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                {t.pricing.premium.popular}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{t.pricing.premium.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{language === 'pt' ? t.pricing.premium.price : t.pricing.premium.priceUSD}</span>
                <span className="text-pink-100">{t.pricing.premium.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.premium.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/checkout">
                <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
                  {t.pricing.premium.cta}
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.enterprise.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.pricing.enterprise.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.enterprise.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                {t.pricing.enterprise.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O que as mães dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Mãe de primeira viagem',
                text: 'O Mãe360 me salvou! Consegui organizar tudo da gravidez até o primeiro ano do meu bebê. A IA me ajuda com todas as dúvidas.',
                rating: 5
              },
              {
                name: 'Ana Costa',
                role: 'Mãe de 2 filhos',
                text: 'O planejamento financeiro é incrível. Consegui economizar muito e me preparar para o futuro dos meus filhos.',
                rating: 5
              },
              {
                name: 'Juliana Santos',
                role: 'Gestante de 28 semanas',
                text: 'Acompanhar semana a semana com os modelos 3D é emocionante. E o diário emocional me ajuda muito!',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece sua jornada hoje
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Junte-se a mais de 100.000 mães que confiam no Mãe360
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-pink-50 text-lg px-8 py-6 rounded-2xl shadow-xl"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm text-pink-100">Garantia de 7 dias • Cancele quando quiser</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Baby className="w-8 h-8 text-pink-500" />
                <span className="text-2xl font-bold">Mãe360</span>
              </div>
              <p className="text-gray-400">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#modules" className="hover:text-pink-500">Módulos</Link></li>
                <li><Link href="#pricing" className="hover:text-pink-500">Preços</Link></li>
                <li><Link href="/membros" className="hover:text-pink-500">Área de Membros</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-pink-500">Sobre</Link></li>
                <li><Link href="#" className="hover:text-pink-500">Blog</Link></li>
                <li><Link href="#" className="hover:text-pink-500">Carreiras</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-pink-500">Central de Ajuda</Link></li>
                <li><Link href="#" className="hover:text-pink-500">Contato</Link></li>
                <li><Link href="#" className="hover:text-pink-500">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Mãe360. {t.footer.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
