"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, MessageSquare, Activity, TrendingUp, Calendar } from "lucide-react";
import { toast } from "sonner";

interface Stats {
  totalUsers: number;
  totalPosts: number;
  totalAppointments: number;
  totalDiaryEntries: number;
  recentActivity: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalPosts: 0,
    totalAppointments: 0,
    totalDiaryEntries: 0,
    recentActivity: 0,
  });
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Acesso negado. Faça login primeiro.");
        window.location.href = "/login";
        return;
      }

      // Verificar se o usuário é admin
      const { data: userData, error } = await supabase
        .from("users")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (error || !userData?.is_admin) {
        toast.error("Acesso negado. Você não tem permissões de administrador.");
        window.location.href = "/";
        return;
      }

      setIsAdmin(true);
      loadStats();
    } catch (error) {
      console.error("Erro ao verificar acesso:", error);
      toast.error("Erro ao verificar permissões");
    }
  };

  const loadStats = async () => {
    try {
      setLoading(true);

      // Buscar estatísticas
      const [usersRes, postsRes, appointmentsRes, diaryRes] = await Promise.all([
        supabase.from("users").select("id", { count: "exact", head: true }),
        supabase.from("community_posts").select("id", { count: "exact", head: true }),
        supabase.from("appointments").select("id", { count: "exact", head: true }),
        supabase.from("diary_entries").select("id", { count: "exact", head: true }),
      ]);

      // Atividade recente (últimas 24h)
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      const { count: recentCount } = await supabase
        .from("community_posts")
        .select("id", { count: "exact", head: true })
        .gte("created_at", yesterday.toISOString());

      setStats({
        totalUsers: usersRes.count || 0,
        totalPosts: postsRes.count || 0,
        totalAppointments: appointmentsRes.count || 0,
        totalDiaryEntries: diaryRes.count || 0,
        recentActivity: recentCount || 0,
      });
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error);
      toast.error("Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Gerencie usuários, conteúdo e monitore a plataforma Mãe360
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total de Usuários</p>
                <p className="text-3xl font-bold text-gray-900">
                  {loading ? "..." : stats.totalUsers}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Posts na Comunidade</p>
                <p className="text-3xl font-bold text-gray-900">
                  {loading ? "..." : stats.totalPosts}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Consultas Agendadas</p>
                <p className="text-3xl font-bold text-gray-900">
                  {loading ? "..." : stats.totalAppointments}
                </p>
              </div>
              <div className="p-3 bg-pink-100 rounded-full">
                <Calendar className="w-8 h-8 text-pink-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Entradas no Diário</p>
                <p className="text-3xl font-bold text-gray-900">
                  {loading ? "..." : stats.totalDiaryEntries}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Atividade (24h)</p>
                <p className="text-3xl font-bold text-gray-900">
                  {loading ? "..." : stats.recentActivity}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Taxa de Crescimento</p>
                <p className="text-3xl font-bold text-green-600">+12%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Button
            onClick={() => window.location.href = "/admin/usuarios"}
            className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
          >
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Gerenciar Usuários</span>
            </div>
          </Button>

          <Button
            onClick={() => window.location.href = "/admin/posts"}
            className="h-24 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
          >
            <div className="text-center">
              <MessageSquare className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Moderar Posts</span>
            </div>
          </Button>

          <Button
            onClick={() => window.location.href = "/admin/relatorios"}
            className="h-24 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
          >
            <div className="text-center">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Relatórios</span>
            </div>
          </Button>

          <Button
            onClick={() => window.location.href = "/admin/configuracoes"}
            className="h-24 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
          >
            <div className="text-center">
              <Activity className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Configurações</span>
            </div>
          </Button>
        </div>

        {/* Info Card */}
        <Card className="p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <h3 className="text-xl font-bold mb-2">Bem-vindo ao Painel Admin!</h3>
          <p className="text-pink-50 mb-4">
            Aqui você pode gerenciar todos os aspectos da plataforma Mãe360. 
            Use as ferramentas acima para moderar conteúdo, gerenciar usuários e acompanhar métricas importantes.
          </p>
          <Button
            onClick={loadStats}
            variant="outline"
            className="bg-white text-purple-600 hover:bg-pink-50"
          >
            Atualizar Dados
          </Button>
        </Card>
      </div>
    </div>
  );
}
