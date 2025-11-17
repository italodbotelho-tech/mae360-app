'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Globe, Baby, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('pt');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslation(language);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      toast.success('Logout realizado com sucesso!');
      router.push('/');
      router.refresh();
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  const toggleLanguage = () => {
    const langs: Language[] = ['pt', 'en', 'es'];
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Mãe360
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              {t.nav.home}
            </Link>
            <Link href="/#modules" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              {t.nav.modules}
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              {t.nav.pricing}
            </Link>
            <Link href="/comunidade" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Comunidade
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
            
            {!loading && (
              <>
                {user ? (
                  <>
                    <Link href="/membros">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <User className="w-4 h-4" />
                        Perfil
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleLogout}
                      className="gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login">
                      <Button variant="ghost" size="sm">
                        {t.nav.login}
                      </Button>
                    </Link>
                    <Link href="/auth/cadastro">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {t.nav.signup}
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/#modules" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.modules}
              </Link>
              <Link 
                href="/#pricing" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.pricing}
              </Link>
              <Link 
                href="/comunidade" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Comunidade
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="gap-2 justify-start"
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </Button>
                
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Link href="/membros">
                          <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                            <User className="w-4 h-4" />
                            Perfil
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={handleLogout}
                          className="justify-start gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          Sair
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link href="/auth/login">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            {t.nav.login}
                          </Button>
                        </Link>
                        <Link href="/auth/cadastro">
                          <Button 
                            size="sm"
                            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white w-full"
                          >
                            {t.nav.signup}
                          </Button>
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
