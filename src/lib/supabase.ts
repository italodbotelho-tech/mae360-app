import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente do Supabase com fallbacks para evitar erro de build
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder";

// Verificar se as variáveis estão configuradas
const isConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!isConfigured) {
  console.warn("⚠️ Variáveis de ambiente do Supabase não configuradas. Configure em: Configurações do Projeto -> Integrações -> Supabase");
}

// Cliente Supabase para uso no lado do cliente
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

// Exportar flag para verificar se está configurado
export const isSupabaseConfigured = isConfigured;
