'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, MessageCircle, Heart, Send, Search, 
  Plus, ArrowLeft, TrendingUp, Award, Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

export default function CommunityModule() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);

  const groups = [
    { name: t.community.firstTimeMoms, members: 12450, posts: 3420, color: 'from-pink-500 to-rose-500' },
    { name: t.community.soloMoms, members: 8920, posts: 2150, color: 'from-purple-500 to-pink-500' },
    { name: t.community.trying, members: 15680, posts: 5230, color: 'from-blue-500 to-cyan-500' },
    { name: 'Gestantes 2024', members: 9340, posts: 4120, color: 'from-green-500 to-emerald-500' }
  ];

  const posts = [
    {
      author: 'Maria Silva',
      time: '2h atrás',
      content: 'Alguém mais está com enjoo constante? Estou de 8 semanas e não consigo comer quase nada 😔',
      likes: 45,
      comments: 23,
      avatar: 'from-pink-500 to-rose-500'
    },
    {
      author: 'Ana Costa',
      time: '5h atrás',
      content: 'Meu bebê dormiu 6 horas seguidas pela primeira vez! 🎉 Estou tão feliz!',
      likes: 128,
      comments: 67,
      avatar: 'from-purple-500 to-pink-500'
    },
    {
      author: 'Juliana Santos',
      time: '1 dia atrás',
      content: 'Dicas de introdução alimentar? Meu bebê vai fazer 6 meses e estou perdida...',
      likes: 89,
      comments: 156,
      avatar: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-purple-50 pt-20">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{t.community.title}</h1>
              <p className="text-violet-100">{t.community.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* New Post */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex-shrink-0" />
                <div className="flex-1">
                  <textarea
                    placeholder="Compartilhe algo com a comunidade..."
                    className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" size="sm">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Foto
                    </Button>
                    <Button className="bg-gradient-to-r from-violet-500 to-purple-600">
                      <Send className="w-4 h-4 mr-2" />
                      {t.community.newPost}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.avatar} flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="font-bold">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center gap-6 pt-4 border-t">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.community.discover}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* My Groups */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">{t.community.myGroups}</h3>
              <div className="space-y-3">
                {groups.map((group, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${group.color} mb-3`} />
                    <h4 className="font-semibold mb-2">{group.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span suppressHydrationWarning>{group.members.toLocaleString('pt-BR')} membros</span>
                      <span>•</span>
                      <span suppressHydrationWarning>{group.posts.toLocaleString('pt-BR')} posts</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Descobrir Mais Grupos
              </Button>
            </div>

            {/* Top Contributors */}
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-bold">Top Contribuidoras</h3>
              </div>
              <div className="space-y-3">
                {['Maria Silva', 'Ana Costa', 'Juliana Santos'].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="flex-1">{name}</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
