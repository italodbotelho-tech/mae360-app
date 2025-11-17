// Tipos TypeScript para Mãe360

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  available: boolean;
}

export interface PregnancyWeek {
  week: number;
  babySize: string;
  babySizeComparison: string;
  symptoms: string[];
  checklist: string[];
  development: string;
}

export interface Appointment {
  id: string;
  date: Date;
  type: string;
  doctor: string;
  notes?: string;
}

export interface DiaryEntry {
  id: string;
  date: Date;
  mood: 'happy' | 'neutral' | 'sad' | 'anxious' | 'excited';
  content: string;
  week: number;
}

export interface Contraction {
  id: string;
  startTime: Date;
  duration: number; // em segundos
}

export interface KickCount {
  id: string;
  date: Date;
  count: number;
  timeToTenKicks?: number; // em minutos
}

export interface User {
  id: string;
  name: string;
  email: string;
  language: 'pt' | 'en' | 'es';
  currency: 'BRL' | 'USD';
  dueDate?: Date;
  children?: Child[];
}

export interface Child {
  id: string;
  name: string;
  birthDate: Date;
  gender?: 'male' | 'female' | 'other';
  currentStage: 'pregnancy' | 'baby' | 'childhood' | 'teen' | 'college';
}
