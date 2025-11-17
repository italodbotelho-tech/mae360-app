import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // Se não houver configuração do Supabase, permitir acesso
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next();
  }

  // Rotas protegidas que exigem autenticação
  const protectedRoutes = [
    '/membros',
    '/gravidez',
    '/bebe',
    '/infancia',
    '/adolescencia',
    '/faculdade',
    '/financeiro',
    '/exames',
    '/vacinas-bebe',
    '/vacinas-mae',
    '/ia-assistente',
  ];

  // Rotas de administrador
  const adminRoutes = [
    '/admin',
  ];

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = [
    '/',
    '/login',
    '/cadastro',
    '/comunidade',
  ];

  const pathname = request.nextUrl.pathname;

  // Verificar se é uma rota pública
  const isPublicRoute = publicRoutes.some(route => pathname === route);
  
  // Verificar se é uma rota protegida
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Verificar se é uma rota de admin
  const isAdminRoute = adminRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Se for rota pública, permitir acesso
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Se for rota protegida ou admin, verificar autenticação
  if (isProtectedRoute || isAdminRoute) {
    const token = request.cookies.get('sb-access-token')?.value;

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      
      // Verificar token com timeout de 2 segundos
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 2000)
      );
      
      const authPromise = supabase.auth.getUser(token);
      
      const { data: { user }, error } = await Promise.race([
        authPromise,
        timeoutPromise
      ]) as any;

      if (error || !user) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Se for rota de admin, verificar se o usuário é admin
      if (isAdminRoute) {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('is_admin')
          .eq('id', user.id)
          .single();

        if (userError || !userData?.is_admin) {
          // Redirecionar para home se não for admin
          return NextResponse.redirect(new URL('/', request.url));
        }
      }
    } catch (error) {
      // Em caso de erro ou timeout, redirecionar para login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apenas rotas específicas que precisam de verificação
    '/membros/:path*',
    '/gravidez/:path*',
    '/bebe/:path*',
    '/infancia/:path*',
    '/adolescencia/:path*',
    '/faculdade/:path*',
    '/financeiro/:path*',
    '/exames/:path*',
    '/vacinas-bebe/:path*',
    '/vacinas-mae/:path*',
    '/ia-assistente/:path*',
    '/admin/:path*',
  ],
};
