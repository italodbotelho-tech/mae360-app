'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, MessageCircle, Heart, Send, Search, 
  Plus, ArrowLeft, TrendingUp, Award, Image as ImageIcon, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface Post {
  id: string;
  user_id: string;
  content: string;
  image_url: string | null;
  likes_count: number;
  comments_count: number;
  created_at: string;
  profiles: {
    full_name: string;
    avatar_url: string | null;
  };
}

export default function CommunityModule() {
  const router = useRouter();
  const [language] = useState<Language>('pt');
  const t = useTranslation(language);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
    fetchPosts();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      toast.error('Erro ao carregar posts');
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Faça login para postar');
      router.push('/auth/login');
      return;
    }

    if (!newPostContent.trim()) return;

    setPosting(true);

    try {
      const { data, error } = await supabase
        .from('posts')
        .insert({
          user_id: user.id,
          content: newPostContent,
          likes_count: 0,
          comments_count: 0,
        })
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .single();

      if (error) throw error;

      // Adicionar novo post ao topo da lista
      setPosts([data, ...posts]);
      setNewPostContent('');
      toast.success('Post criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar post:', error);
      toast.error('Erro ao criar post. Tente novamente.');
    } finally {
      setPosting(false);
    }
  };

  const handleLike = async (postId: string, currentLikes: number) => {
    if (!user) {
      toast.error('Faça login para curtir');
      router.push('/auth/login');
      return;
    }

    try {
      // Verificar se já deu like
      const { data: existingLike } = await supabase
        .from('likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', user.id)
        .single();

      if (existingLike) {
        // Remover like
        await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);

        await supabase
          .from('posts')
          .update({ likes_count: currentLikes - 1 })
          .eq('id', postId);

        setPosts(posts.map(post => 
          post.id === postId ? { ...post, likes_count: currentLikes - 1 } : post
        ));
      } else {
        // Adicionar like
        await supabase
          .from('likes')
          .insert({ post_id: postId, user_id: user.id });

        await supabase
          .from('posts')
          .update({ likes_count: currentLikes + 1 })
          .eq('id', postId);

        setPosts(posts.map(post => 
          post.id === postId ? { ...post, likes_count: currentLikes + 1 } : post
        ));
      }
    } catch (error) {
      console.error('Erro ao curtir post:', error);
      toast.error('Erro ao curtir post');
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

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-pink-500 to-rose-500',
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-amber-500',
    ];
    return colors[index % colors.length];
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
                    placeholder={user ? "Compartilhe algo com a comunidade..." : "Faça login para postar"}
                    className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    disabled={!user || posting}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <Button type="button" variant="ghost" size="sm" disabled={!user}>
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Foto
                    </Button>
                    <Button 
                      type="submit"
                      disabled={!user || posting || !newPostContent.trim()}
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
                {!user && (
                  <Link href="/auth/cadastro">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                      Criar conta grátis
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post, idx) => (
                  <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(idx)} flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="font-bold">{post.profiles?.full_name || 'Usuário'}</div>
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
                        className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
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
            {/* User Status */}
            {!user && (
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">Junte-se à comunidade!</h3>
                <p className="text-pink-100 mb-4">Crie sua conta e comece a compartilhar sua jornada</p>
                <Link href="/auth/cadastro">
                  <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
                    Criar conta grátis
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="ghost" className="w-full mt-2 text-white hover:bg-white/20">
                    Já tenho conta
                  </Button>
                </Link>
              </div>
            )}

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
