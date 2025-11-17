'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Baby, Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CadastroPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validações
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      toast.success('Conta criada com sucesso! Verifique seu email.');
      router.push('/auth/login');
    } catch (error: any) {
      setError(error.message || 'Erro ao criar conta');
      toast.error('Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Baby className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Mãe360
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Crie sua conta</h1>
          <p className="text-gray-600">Comece sua jornada conosco</p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSignUp} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-700">Nome completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Maria Silva"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
              <p className="text-xs text-gray-500">Mínimo de 6 caracteres</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">Confirmar senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl"
            >
              {loading ? 'Criando conta...' : 'Criar conta'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Já tem conta?</span>
              </div>
            </div>

            <Link href="/auth/login" className="mt-4 block">
              <Button variant="outline" className="w-full h-12 border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50">
                Fazer login
              </Button>
            </Link>
          </div>

          {/* Benefícios */}
          <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-700">Ao criar sua conta, você terá:</p>
            <div className="space-y-2">
              {[
                'Acesso à comunidade de mães',
                'Acompanhamento personalizado',
                'Conteúdo exclusivo e dicas',
                'Suporte 24/7 com IA'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Ao criar uma conta, você concorda com nossos{' '}
          <Link href="#" className="text-pink-600 hover:text-pink-700">
            Termos de Uso
          </Link>{' '}
          e{' '}
          <Link href="#" className="text-pink-600 hover:text-pink-700">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </div>
  );
}
