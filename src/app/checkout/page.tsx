'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CreditCard, Shield, Check, ArrowLeft, Lock, 
  Star, Zap, Gift, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function CheckoutPage() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);
  const [orderBump, setOrderBump] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'pix'>('credit');

  const premiumPrice = language === 'pt' ? 9.90 : 4.90;
  const currency = language === 'pt' ? 'R$' : '$';
  const bumpPrice = language === 'pt' ? 27 : 9.90;

  const total = orderBump ? premiumPrice + bumpPrice : premiumPrice;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{t.checkout.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Plan */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold">{t.checkout.plan}</h2>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div>
                  <div className="text-2xl font-bold text-purple-600">Premium</div>
                  <div className="text-sm text-gray-600">Acesso completo a todos os 13 módulos</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">
                    {currency} {premiumPrice.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">/mês</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  'Todos os 13 módulos',
                  'IA ilimitada',
                  'Planejamento financeiro',
                  'Upload de documentos',
                  'Consultoria premium',
                  'Loja com cashback',
                  'Suporte prioritário',
                  'Sem anúncios'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Bump */}
            <div 
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                orderBump ? 'border-green-500 bg-green-50' : 'border-orange-200 hover:border-orange-400'
              }`}
              onClick={() => setOrderBump(!orderBump)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  orderBump ? 'border-green-500 bg-green-500' : 'border-gray-300'
                }`}>
                  {orderBump && <Check className="w-4 h-4 text-white" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-semibold text-orange-600 uppercase">
                      {t.checkout.orderBump}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{t.checkout.bumpTitle}</h3>
                  <p className="text-gray-600 mb-3">{t.checkout.bumpDescription}</p>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl font-bold text-green-600">
                      {currency} {bumpPrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      {currency} {(bumpPrice * 2).toFixed(2)}
                    </div>
                    <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      50% OFF
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Planilha Financeira PRO',
                      'Checklist Completo',
                      'Templates Editáveis',
                      'Guias em PDF'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">{t.checkout.payment}</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'credit'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <CreditCard className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <div className="font-semibold">{t.checkout.creditCard}</div>
                </button>

                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Zap className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <div className="font-semibold">{t.checkout.pix}</div>
                </button>
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Nome completo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'pix' && (
                <div className="text-center p-8 bg-purple-50 rounded-xl">
                  <Zap className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                  <p className="text-gray-700 mb-2">
                    Após confirmar, você receberá o QR Code do PIX
                  </p>
                  <p className="text-sm text-gray-600">
                    Pagamento instantâneo e seguro
                  </p>
                </div>
              )}
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    {t.checkout.guarantee}
                  </h3>
                  <p className="text-green-800">
                    {t.checkout.guaranteeText}
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Lock className="w-5 h-5 mr-2" />
              {t.checkout.subscribe}
            </Button>

            <div className="text-center text-sm text-gray-500">
              🔒 Pagamento 100% seguro e criptografado
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plano Premium</span>
                  <span className="font-semibold">{currency} {premiumPrice.toFixed(2)}</span>
                </div>

                {orderBump && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Planilha PRO + Checklists</span>
                    <span className="font-semibold">{currency} {bumpPrice.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">{t.checkout.total}</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {currency} {total.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 text-right">por mês</div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Atualizações gratuitas</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold mb-4">Por que escolher o Mãe360?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 flex-shrink-0 fill-yellow-300 text-yellow-300" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">100.000+ mães ativas</div>
                    <div className="text-purple-100">Comunidade engajada e ativa</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Avaliação 4.9/5</div>
                    <div className="text-purple-100">Mais de 50.000 avaliações</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">100% Seguro</div>
                    <div className="text-purple-100">Dados criptografados</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "O Mãe360 mudou minha vida! Consegui organizar tudo e ainda economizar muito dinheiro."
              </p>
              <div className="font-semibold">Maria Silva</div>
              <div className="text-sm text-gray-600">Mãe de 2 filhos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
