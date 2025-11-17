'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  CheckCircle2, Circle, Trash2, Plus, Loader2, Search, 
  Filter, Calendar, AlertCircle, Edit2, X, Grid3x3, List,
  Clock, Flag
} from 'lucide-react';
import { toast } from 'sonner';

interface Task {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  category: string;
  priority: string;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

type ViewMode = 'list' | 'grid';
type FilterType = 'all' | 'completed' | 'pending' | 'overdue';

const categories = [
  { value: 'pessoal', label: 'Pessoal', color: 'bg-blue-500' },
  { value: 'trabalho', label: 'Trabalho', color: 'bg-purple-500' },
  { value: 'urgente', label: 'Urgente', color: 'bg-red-500' },
  { value: 'saude', label: 'Saúde', color: 'bg-green-500' },
  { value: 'compras', label: 'Compras', color: 'bg-yellow-500' },
  { value: 'familia', label: 'Família', color: 'bg-pink-500' },
];

const priorities = [
  { value: 'baixa', label: 'Baixa', color: 'text-gray-500', icon: '○' },
  { value: 'media', label: 'Média', color: 'text-yellow-500', icon: '◐' },
  { value: 'alta', label: 'Alta', color: 'text-red-500', icon: '●' },
];

export default function TarefasPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    category: 'pessoal',
    priority: 'media',
    due_date: '',
  });

  // Carregar tarefas do Supabase
  const loadTasks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tasks_enhanced')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
      setFilteredTasks(data || []);
    } catch (error: any) {
      toast.error('Erro ao carregar tarefas: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar tarefas
  useEffect(() => {
    let filtered = [...tasks];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((task) => task.category === selectedCategory);
    }

    // Filtro por status
    if (filterType === 'completed') {
      filtered = filtered.filter((task) => task.completed);
    } else if (filterType === 'pending') {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filterType === 'overdue') {
      const now = new Date();
      filtered = filtered.filter(
        (task) =>
          !task.completed &&
          task.due_date &&
          new Date(task.due_date) < now
      );
    }

    setFilteredTasks(filtered);
  }, [tasks, searchTerm, filterType, selectedCategory]);

  // Adicionar nova tarefa
  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      toast.error('Digite um título para a tarefa');
      return;
    }

    try {
      setSubmitting(true);
      const { data, error } = await supabase
        .from('tasks_enhanced')
        .insert([
          {
            title: newTask.title,
            description: newTask.description || null,
            category: newTask.category,
            priority: newTask.priority,
            due_date: newTask.due_date || null,
            completed: false,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      setTasks([data, ...tasks]);
      setNewTask({
        title: '',
        description: '',
        category: 'pessoal',
        priority: 'media',
        due_date: '',
      });
      toast.success('Tarefa adicionada com sucesso!');
    } catch (error: any) {
      toast.error('Erro ao adicionar tarefa: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Editar tarefa
  const updateTask = async () => {
    if (!editingTask) return;

    try {
      const { error } = await supabase
        .from('tasks_enhanced')
        .update({
          title: editingTask.title,
          description: editingTask.description,
          category: editingTask.category,
          priority: editingTask.priority,
          due_date: editingTask.due_date,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingTask.id);

      if (error) throw error;

      setTasks(
        tasks.map((t) =>
          t.id === editingTask.id ? { ...editingTask } : t
        )
      );
      setEditingTask(null);
      toast.success('Tarefa atualizada!');
    } catch (error: any) {
      toast.error('Erro ao atualizar tarefa: ' + error.message);
    }
  };

  // Marcar tarefa como concluída/não concluída
  const toggleTask = async (task: Task) => {
    try {
      const { error } = await supabase
        .from('tasks_enhanced')
        .update({
          completed: !task.completed,
          updated_at: new Date().toISOString(),
        })
        .eq('id', task.id);

      if (error) throw error;

      setTasks(
        tasks.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        )
      );
      toast.success(
        !task.completed ? 'Tarefa concluída!' : 'Tarefa reaberta!'
      );
    } catch (error: any) {
      toast.error('Erro ao atualizar tarefa: ' + error.message);
    }
  };

  // Deletar tarefa
  const deleteTask = async (id: string) => {
    try {
      const { error } = await supabase
        .from('tasks_enhanced')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTasks(tasks.filter((t) => t.id !== id));
      toast.success('Tarefa deletada!');
    } catch (error: any) {
      toast.error('Erro ao deletar tarefa: ' + error.message);
    }
  };

  // Verificar se tarefa está atrasada
  const isOverdue = (task: Task) => {
    if (!task.due_date || task.completed) return false;
    return new Date(task.due_date) < new Date();
  };

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Componente de tarefa
  const TaskCard = ({ task }: { task: Task }) => {
    const category = categories.find((c) => c.value === task.category);
    const priority = priorities.find((p) => p.value === task.priority);
    const overdue = isOverdue(task);

    return (
      <Card
        className={`p-4 shadow-md hover:shadow-lg transition-all duration-300 ${
          task.completed ? 'bg-gray-50 opacity-75' : 'bg-white'
        } ${overdue ? 'border-l-4 border-red-500' : ''}`}
      >
        <div className="flex items-start gap-3">
          <button
            onClick={() => toggleTask(task)}
            className="flex-shrink-0 mt-1 hover:scale-110 transition-transform"
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 hover:text-pink-500" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3
                className={`text-lg font-semibold ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-900'
                }`}
              >
                {task.title}
              </h3>
              <div className="flex items-center gap-1 flex-shrink-0">
                <span className={`text-xl ${priority?.color}`}>
                  {priority?.icon}
                </span>
                <button
                  onClick={() => setEditingTask(task)}
                  className="text-blue-500 hover:text-blue-700 p-1"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {task.description && (
              <p
                className={`text-sm mb-2 ${
                  task.completed ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {task.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span
                className={`px-2 py-1 ${category?.color} text-white rounded-full`}
              >
                {category?.label}
              </span>
              {task.due_date && (
                <span
                  className={`px-2 py-1 rounded-full flex items-center gap-1 ${
                    overdue
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  {formatDate(task.due_date)}
                </span>
              )}
              {overdue && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Atrasada
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Minhas Tarefas
          </h1>
          <p className="text-xl text-gray-600">
            Organize, priorize e conquiste seus objetivos
          </p>
        </div>

        {/* Formulário para adicionar/editar tarefa */}
        <Card className="p-6 mb-6 shadow-lg">
          <form
            onSubmit={editingTask ? (e) => { e.preventDefault(); updateTask(); } : addTask}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}
              </h2>
              {editingTask && (
                <button
                  type="button"
                  onClick={() => setEditingTask(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da Tarefa *
                </label>
                <Input
                  type="text"
                  placeholder="Ex: Comprar fraldas"
                  value={editingTask ? editingTask.title : newTask.title}
                  onChange={(e) =>
                    editingTask
                      ? setEditingTask({ ...editingTask, title: e.target.value })
                      : setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="w-full"
                  disabled={submitting}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição (opcional)
                </label>
                <Textarea
                  placeholder="Adicione detalhes sobre a tarefa..."
                  value={editingTask ? editingTask.description || '' : newTask.description}
                  onChange={(e) =>
                    editingTask
                      ? setEditingTask({ ...editingTask, description: e.target.value })
                      : setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-full"
                  rows={2}
                  disabled={submitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={editingTask ? editingTask.category : newTask.category}
                  onChange={(e) =>
                    editingTask
                      ? setEditingTask({ ...editingTask, category: e.target.value })
                      : setNewTask({ ...newTask, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={submitting}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prioridade
                </label>
                <select
                  value={editingTask ? editingTask.priority : newTask.priority}
                  onChange={(e) =>
                    editingTask
                      ? setEditingTask({ ...editingTask, priority: e.target.value })
                      : setNewTask({ ...newTask, priority: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={submitting}
                >
                  {priorities.map((pri) => (
                    <option key={pri.value} value={pri.value}>
                      {pri.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Vencimento (opcional)
                </label>
                <Input
                  type="date"
                  value={editingTask ? editingTask.due_date || '' : newTask.due_date}
                  onChange={(e) =>
                    editingTask
                      ? setEditingTask({ ...editingTask, due_date: e.target.value })
                      : setNewTask({ ...newTask, due_date: e.target.value })
                  }
                  className="w-full"
                  disabled={submitting}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {editingTask ? 'Atualizando...' : 'Adicionando...'}
                </>
              ) : (
                <>
                  {editingTask ? (
                    <>
                      <Edit2 className="w-4 h-4 mr-2" />
                      Atualizar Tarefa
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Tarefa
                    </>
                  )}
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* Barra de filtros e busca */}
        <Card className="p-4 mb-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar tarefas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filtro por categoria */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="all">Todas as categorias</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            {/* Filtro por status */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as FilterType)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="all">Todas</option>
              <option value="pending">Pendentes</option>
              <option value="completed">Concluídas</option>
              <option value="overdue">Atrasadas</option>
            </select>

            {/* Modo de visualização */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Card>

        {/* Lista de tarefas */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
          </div>
        ) : filteredTasks.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Circle className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">
                {searchTerm || selectedCategory !== 'all' || filterType !== 'all'
                  ? 'Nenhuma tarefa encontrada com esses filtros'
                  : 'Nenhuma tarefa ainda'}
              </p>
              <p className="text-sm">
                {searchTerm || selectedCategory !== 'all' || filterType !== 'all'
                  ? 'Tente ajustar os filtros'
                  : 'Adicione sua primeira tarefa acima!'}
              </p>
            </div>
          </Card>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
                : 'space-y-4'
            }
          >
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}

        {/* Estatísticas */}
        {tasks.length > 0 && (
          <Card className="mt-8 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">{tasks.length}</div>
                <div className="text-sm text-pink-100">Total</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {tasks.filter((t) => t.completed).length}
                </div>
                <div className="text-sm text-pink-100">Concluídas</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {tasks.filter((t) => !t.completed).length}
                </div>
                <div className="text-sm text-pink-100">Pendentes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {tasks.filter((t) => isOverdue(t)).length}
                </div>
                <div className="text-sm text-pink-100">Atrasadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {tasks.filter((t) => t.priority === 'alta').length}
                </div>
                <div className="text-sm text-pink-100">Alta Prioridade</div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
