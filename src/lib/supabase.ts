import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos do banco de dados
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          language: 'pt' | 'en' | 'es';
          currency: 'BRL' | 'USD';
          due_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      children: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          birth_date: string;
          gender: 'male' | 'female' | 'other' | null;
          current_stage: 'pregnancy' | 'baby' | 'childhood' | 'teen' | 'college';
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['children']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['children']['Insert']>;
      };
      diary_entries: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          mood: 'happy' | 'neutral' | 'sad' | 'anxious' | 'excited';
          content: string;
          week: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['diary_entries']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['diary_entries']['Insert']>;
      };
      appointments: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          type: string;
          doctor: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['appointments']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['appointments']['Insert']>;
      };
      contractions: {
        Row: {
          id: string;
          user_id: string;
          start_time: string;
          duration: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['contractions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['contractions']['Insert']>;
      };
      kick_counts: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          count: number;
          time_to_ten_kicks: number | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['kick_counts']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['kick_counts']['Insert']>;
      };
      community_posts: {
        Row: {
          id: string;
          user_id: string;
          author_name: string;
          content: string;
          likes: number;
          comments: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['community_posts']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['community_posts']['Insert']>;
      };
    };
  };
}
