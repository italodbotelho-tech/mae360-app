import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente do Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Verificar se as variáveis estão configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Variáveis de ambiente do Supabase não configuradas. Configure em: Configurações do Projeto -> Integrações -> Supabase");
}

// Cliente Supabase para uso no lado do cliente
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
