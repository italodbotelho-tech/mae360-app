'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, MessageCircle, Heart, Send, Search, 
  Plus, ArrowLeft, TrendingUp, Award, Image as ImageIcon, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';
import { toast } from 'sonner';

interface Post {
  id: string;
  user_id: string;
  content: string;
  image_url: string | null;
  likes_count: number;
  comments_count: number;
  created_at: string;
  author_name: string;
  avatar_color: string;
}

// Posts de exemplo
const mockPosts: Post[] = [
  {
    id: '1',
    user_id: '1',
    content: 'Acabei de descobrir que estou grávida! Estou tão feliz e nervosa ao mesmo tempo. Alguém tem dicas para primeira viagem? 💕',
    image_url: null,
    likes_count: 24,
    comments_count: 8,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    author_name: 'Maria Silva',
    avatar_color: 'from-pink-500 to-rose-500'
  },
  {
    id: '2',
    user_id: '2',
    content: 'Meu bebê completou 6 meses hoje! O tempo voa... Compartilhando essa alegria com vocês! 🎉👶',
    image_url: null,
    likes_count: 42,
    comments_count: 15,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    author_name: 'Ana Costa',
    avatar_color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    user_id: '3',
    content: 'Alguém mais está tendo dificuldade com o sono do bebê? Preciso de dicas urgentes! 😴',
    image_url: null,
    likes_count: 18,
    comments_count: 23,
    created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    author_name: 'Juliana Santos',
    avatar_color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '4',
    user_id: '4',
    content: 'Compartilhando minha experiência com amamentação. Foi desafiador no início, mas agora está maravilhoso! Não desistam, mães! 💪',
    image_url: null,
    likes_count: 56,
    comments_count: 12,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    author_name: 'Carla Mendes',
    avatar_color: 'from-green-500 to-emerald-500'
  },
  {
    id: '5',
    user_id: '5',
    content: 'Primeira consulta de pré-natal hoje! Estou nas nuvens! ☁️💕',
    image_url: null,
    likes_count: 31,
    comments_count: 6,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    author_name: 'Beatriz Lima',
    avatar_color: 'from-orange-500 to-amber-500'
  }
];

export default function CommunityModule() {
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  const handleNewPost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPostContent.trim()) return;

    setPosting(true);

    // Simular criação de post
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now().toString(),
        user_id: 'current-user',
        content: newPostContent,
        image_url: null,
        likes_count: 0,
        comments_count: 0,
        created_at: new Date().toISOString(),
        author_name: 'Você',
        avatar_color: 'from-pink-500 to-purple-500'
      };

      setPosts([newPost, ...posts]);
      setNewPostContent('');
      toast.success('Post criado com sucesso!');
      setPosting(false);
    }, 1000);
  };

  const handleLike = (postId: string, currentLikes: number) => {
    const isLiked = likedPosts.has(postId);
    
    if (isLiked) {
      // Remover like
      setLikedPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(postId);
        return newSet;
      });
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes_count: currentLikes - 1 } : post
      ));
    } else {
      // Adicionar like
      setLikedPosts(prev => new Set(prev).add(postId));
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes_count: currentLikes + 1 } : post
      ));
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return 'Agora';
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    if (diffInDays === 1) return '1 dia atrás';
    return `${diffInDays} dias atrás`;
  };

  const groups = [
    { name: t.community.firstTimeMoms, members: 12450, posts: 3420, color: 'from-pink-500 to-rose-500' },
    { name: t.community.soloMoms, members: 8920, posts: 2150, color: 'from-purple-500 to-pink-500' },
    { name: t.community.trying, members: 15680, posts: 5230, color: 'from-blue-500 to-cyan-500' },
    { name: 'Gestantes 2024', members: 9340, posts: 4120, color: 'from-green-500 to-emerald-500' }
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
              <form onSubmit={handleNewPost} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex-shrink-0" />
                <div className="flex-1">
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Compartilhe algo com a comunidade..."
                    className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    disabled={posting}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <Button type="button" variant="ghost" size="sm">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Foto
                    </Button>
                    <Button 
                      type="submit"
                      disabled={posting || !newPostContent.trim()}
                      className="bg-gradient-to-r from-violet-500 to-purple-600"
                    >
                      {posting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Postando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t.community.newPost}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Posts Feed */}
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum post ainda</h3>
                <p className="text-gray-600 mb-4">Seja a primeira a compartilhar algo!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.avatar_color} flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="font-bold">{post.author_name}</div>
                        <div className="text-sm text-gray-500">{getTimeAgo(post.created_at)}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>
                    {post.image_url && (
                      <img 
                        src={post.image_url} 
                        alt="Post" 
                        className="w-full rounded-xl mb-4 max-h-96 object-cover"
                      />
                    )}
                    <div className="flex items-center gap-6 pt-4 border-t">
                      <button 
                        onClick={() => handleLike(post.id, post.likes_count)}
                        className={`flex items-center gap-2 transition-colors ${
                          likedPosts.has(post.id) 
                            ? 'text-pink-600' 
                            : 'text-gray-600 hover:text-pink-600'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-pink-600' : ''}`} />
                        <span className="font-semibold">{post.likes_count}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{post.comments_count}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
