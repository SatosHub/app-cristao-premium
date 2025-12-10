'use client'

import { useState, useEffect } from 'react'
import { 
  Heart, 
  Book, 
  Calendar, 
  Users, 
  Target, 
  Music, 
  MapPin, 
  DollarSign, 
  PenTool, 
  MessageCircle, 
  User, 
  Bell, 
  Settings, 
  Home,
  BookOpen,
  HandHeart,
  Clock,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Plus,
  ArrowRight,
  Flame,
  Trophy,
  Gift,
  Share2,
  ChevronRight,
  Play,
  Headphones,
  Search,
  Filter,
  MoreHorizontal,
  Edit3,
  Send,
  ThumbsUp,
  MessageSquare,
  BarChart3,
  Calendar as CalendarIcon,
  Clock3,
  Zap,
  Sparkles,
  Crown,
  Shield,
  Compass
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

// Dados mock
const mockVerses = [
  {
    text: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
    reference: "Jeremias 29:11",
    theme: "Esperança"
  },
  {
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    theme: "Força"
  },
  {
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
    theme: "Confiança"
  }
]

const mockPrayerRequests = [
  { id: 1, user: "Maria Silva", request: "Oração pela saúde da minha mãe", prayers: 23, time: "2h" },
  { id: 2, user: "João Santos", request: "Sabedoria para decisões importantes no trabalho", prayers: 15, time: "4h" },
  { id: 3, user: "Ana Costa", request: "Paz familiar e reconciliação", prayers: 31, time: "1d" }
]

const mockReadingPlans = [
  { id: 1, title: "Bíblia em 1 Ano", progress: 65, days: 365, current: "Salmos 45" },
  { id: 2, title: "Novo Testamento", progress: 23, days: 90, current: "Mateus 12" },
  { id: 3, title: "Provérbios", progress: 87, days: 31, current: "Provérbios 27" }
]

const mockHabits = [
  { name: "Oração Matinal", streak: 12, completed: true, icon: HandHeart },
  { name: "Leitura Bíblica", streak: 8, completed: true, icon: BookOpen },
  { name: "Gratidão", streak: 15, completed: false, icon: Heart },
  { name: "Jejum", streak: 3, completed: false, icon: Clock }
]

const mockSermons = [
  { title: "A Fé que Move Montanhas", pastor: "Pr. Carlos Lima", duration: "45 min", views: "2.3k" },
  { title: "Caminhando em Santidade", pastor: "Pra. Ana Ferreira", duration: "38 min", views: "1.8k" },
  { title: "O Poder da Oração", pastor: "Pr. José Silva", duration: "52 min", views: "3.1k" }
]

const mockChallenges = [
  { title: "7 Dias de Gratidão", participants: 1247, reward: "Badge Coração Grato", progress: 4 },
  { title: "Jejum de Daniel", participants: 892, reward: "Badge Disciplina", progress: 0 },
  { title: "30 Dias de Oração", participants: 2156, reward: "Badge Guerreiro", progress: 12 }
]

export default function ChristianApp() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')
  const [currentStep, setCurrentStep] = useState(0)
  const [userName, setUserName] = useState('')
  const [dailyVerse, setDailyVerse] = useState(mockVerses[0])
  const [prayerText, setPrayerText] = useState('')
  const [diaryEntry, setDiaryEntry] = useState('')

  // Onboarding steps
  const onboardingSteps = [
    {
      title: "Bem-vindo à sua jornada espiritual",
      subtitle: "Conecte-se com Deus de forma mais profunda",
      icon: Heart,
      color: "#6366F1"
    },
    {
      title: "Cresça na Palavra",
      subtitle: "Planos de leitura personalizados para você",
      icon: BookOpen,
      color: "#10B981"
    },
    {
      title: "Ore sem cessar",
      subtitle: "Compartilhe pedidos e ore pela comunidade",
      icon: HandHeart,
      color: "#F59E0B"
    },
    {
      title: "Vamos começar?",
      subtitle: "Como podemos te chamar?",
      icon: User,
      color: "#6366F1"
    }
  ]

  const handleOnboardingNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (userName.trim()) {
      setCurrentScreen('home')
    }
  }

  const renderOnboarding = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div 
            className="w-28 h-28 mx-auto mb-8 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
            style={{ 
              background: `linear-gradient(135deg, ${onboardingSteps[currentStep].color}20, ${onboardingSteps[currentStep].color}10)`,
              border: `2px solid ${onboardingSteps[currentStep].color}30`
            }}
          >
            {(() => {
              const IconComponent = onboardingSteps[currentStep].icon;
              return <IconComponent 
                size={48} 
                style={{ color: onboardingSteps[currentStep].color }}
              />;
            })()}
          </div>
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {onboardingSteps[currentStep].title}
          </h1>
          <p className="font-inter text-gray-600 text-xl leading-relaxed">
            {onboardingSteps[currentStep].subtitle}
          </p>
        </div>

        {currentStep === onboardingSteps.length - 1 && (
          <div className="mb-8">
            <Input
              placeholder="Seu nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="text-center text-xl py-8 font-inter border-2 border-gray-200 rounded-2xl shadow-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
            />
          </div>
        )}

        <div className="flex justify-center mb-10">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full mx-1 transition-all duration-500 ${
                index === currentStep 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 w-12 shadow-lg' 
                  : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleOnboardingNext}
          className="w-full py-8 text-xl font-inter bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transform"
          disabled={currentStep === onboardingSteps.length - 1 && !userName.trim()}
        >
          {currentStep === onboardingSteps.length - 1 ? 'Começar Jornada' : 'Continuar'}
          <ArrowRight className="ml-3" size={24} />
        </Button>
      </div>
    </div>
  )

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header Premium */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Olá, {userName || 'Amigo'}! 
            </h1>
            <p className="font-inter text-gray-600 text-lg mt-1">Que Deus abençoe seu dia</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCurrentScreen('notifications')}
              className="relative hover:bg-indigo-50 rounded-2xl transition-all duration-300"
            >
              <Bell size={22} className="text-gray-700" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
            </Button>
            <Avatar onClick={() => setCurrentScreen('profile')} className="cursor-pointer w-12 h-12 ring-4 ring-indigo-100 hover:ring-indigo-200 transition-all duration-300">
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-inter text-lg font-bold">
                {userName.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8 pb-32">
        {/* Versículo do Dia Premium */}
        <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white border-0 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-[1.02] transform">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={24} className="text-yellow-300" />
                </div>
                <span className="font-inter font-semibold text-xl">Versículo do Dia</span>
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-2xl">
                <Share2 size={20} />
              </Button>
            </div>
            <blockquote className="font-serif text-2xl mb-6 leading-relaxed text-white/95">
              "{dailyVerse.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <p className="font-inter text-indigo-100 text-lg">
                {dailyVerse.reference}
              </p>
              <Badge className="bg-white/20 text-white border-0 font-inter px-4 py-2 text-sm backdrop-blur-sm">
                {dailyVerse.theme}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Premium */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Flame className="text-white" size={32} />
              </div>
              <p className="font-inter text-3xl font-bold text-gray-900 mb-2">12</p>
              <p className="font-inter text-gray-600 font-medium">Dias seguidos</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Trophy className="text-white" size={32} />
              </div>
              <p className="font-inter text-3xl font-bold text-gray-900 mb-2">8</p>
              <p className="font-inter text-gray-600 font-medium">Conquistas</p>
            </CardContent>
          </Card>
        </div>

        {/* Ações Rápidas Premium */}
        <div className="grid grid-cols-2 gap-6">
          <Button 
            onClick={() => setCurrentScreen('bible')}
            className="h-24 bg-white/80 backdrop-blur-xl hover:bg-white border-2 border-gray-200/50 hover:border-indigo-300 text-gray-900 flex-col space-y-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform rounded-3xl"
            variant="outline"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <BookOpen size={28} className="text-white" />
            </div>
            <span className="font-inter font-semibold text-lg">Bíblia</span>
          </Button>
          <Button 
            onClick={() => setCurrentScreen('prayer')}
            className="h-24 bg-white/80 backdrop-blur-xl hover:bg-white border-2 border-gray-200/50 hover:border-emerald-300 text-gray-900 flex-col space-y-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform rounded-3xl"
            variant="outline"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <HandHeart size={28} className="text-white" />
            </div>
            <span className="font-inter font-semibold text-lg">Oração</span>
          </Button>
        </div>

        {/* Progresso de Leitura Premium */}
        <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl flex items-center justify-between">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Seu Progresso</span>
              <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('reading-plans')} className="text-indigo-600 hover:bg-indigo-50 rounded-2xl">
                Ver todos <ChevronRight size={18} />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockReadingPlans.slice(0, 2).map((plan) => (
              <div key={plan.id} className="space-y-3 p-4 bg-gray-50/50 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="font-inter font-semibold text-gray-900 text-lg">{plan.title}</span>
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 font-inter px-3 py-1">
                    {plan.progress}%
                  </Badge>
                </div>
                <Progress value={plan.progress} className="h-3 bg-gray-200" />
                <p className="font-inter text-gray-600 font-medium">Lendo: {plan.current}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Eventos Próximos Premium */}
        <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                <Calendar className="text-white" size={24} />
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Próximos Eventos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <p className="font-inter font-bold text-gray-900 text-lg">Culto de Domingo</p>
                <p className="font-inter text-gray-600 font-medium">Hoje às 19h</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <p className="font-inter font-bold text-gray-900 text-lg">Grupo de Oração</p>
                <p className="font-inter text-gray-600 font-medium">Quarta às 20h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation Premium - CORRIGIDO PARA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200/50 px-2 sm:px-6 py-3 sm:py-4 shadow-2xl">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {[
            { icon: Home, label: 'Início', screen: 'home' },
            { icon: BookOpen, label: 'Bíblia', screen: 'bible' },
            { icon: HandHeart, label: 'Oração', screen: 'prayer' },
            { icon: Users, label: 'Comunidade', screen: 'community' },
            { icon: User, label: 'Perfil', screen: 'profile' }
          ].map((item) => (
            <Button
              key={item.screen}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentScreen(item.screen)}
              className={`flex-col space-y-1 h-auto py-2 px-2 sm:px-4 rounded-2xl transition-all duration-300 min-w-0 ${
                currentScreen === item.screen 
                  ? 'text-indigo-600 bg-indigo-50 shadow-lg' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <item.icon size={20} className="flex-shrink-0" />
              <span className="font-inter text-xs font-medium truncate">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderBible = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pb-24">
      {/* Header Premium */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="hover:bg-gray-100 rounded-2xl">
            <ArrowRight className="rotate-180" size={24} />
          </Button>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Bíblia Sagrada</h1>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-2xl">
            <Search size={24} />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Leitura Atual Premium */}
        <Card className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white border-0 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-[1.02] transform">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <Badge className="bg-white/20 text-white border-0 font-inter px-4 py-2 backdrop-blur-sm">Leitura Atual</Badge>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-2xl">
                <Play size={20} />
              </Button>
            </div>
            <h2 className="font-serif text-4xl font-bold mb-3">Salmos 23</h2>
            <p className="font-inter text-emerald-100 mb-6 text-xl">O Senhor é o meu pastor</p>
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 font-inter font-semibold px-8 py-3 rounded-2xl shadow-lg">
              Continuar Leitura
            </Button>
          </CardContent>
        </Card>

        {/* Livros da Bíblia Premium */}
        <div>
          <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Livros da Bíblia</h3>
          <Tabs defaultValue="old" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-lg">
              <TabsTrigger value="old" className="font-inter font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Antigo Testamento</TabsTrigger>
              <TabsTrigger value="new" className="font-inter font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Novo Testamento</TabsTrigger>
            </TabsList>
            <TabsContent value="old" className="space-y-3">
              {['Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Josué'].map((book) => (
                <Card key={book} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                  <CardContent className="p-5 flex items-center justify-between">
                    <span className="font-inter font-semibold text-gray-900 text-lg">{book}</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="new" className="space-y-3">
              {['Mateus', 'Marcos', 'Lucas', 'João', 'Atos', 'Romanos'].map((book) => (
                <Card key={book} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                  <CardContent className="p-5 flex items-center justify-between">
                    <span className="font-inter font-semibold text-gray-900 text-lg">{book}</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Planos de Leitura Premium */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Planos de Leitura</h3>
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('reading-plans')} className="text-indigo-600 hover:bg-indigo-50 rounded-2xl">
              Ver todos
            </Button>
          </div>
          <div className="space-y-4">
            {mockReadingPlans.map((plan) => (
              <Card key={plan.id} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-inter font-bold text-gray-900 text-lg">{plan.title}</span>
                    <Badge variant="outline" className="font-inter border-2 border-indigo-200 text-indigo-600 px-3 py-1">{plan.days} dias</Badge>
                  </div>
                  <Progress value={plan.progress} className="h-3 mb-3 bg-gray-200" />
                  <p className="font-inter text-gray-600 font-medium">{plan.progress}% completo</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderPrayer = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 pb-24">
      {/* Header Premium */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="hover:bg-gray-100 rounded-2xl">
            <ArrowRight className="rotate-180" size={24} />
          </Button>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Sala de Oração</h1>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-2xl">
            <Plus size={24} />
          </Button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Minha Oração Premium */}
        <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl sm:text-2xl flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-3">
                <Heart className="text-white" size={20} />
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Compartilhar Pedido</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <Textarea
              placeholder="Compartilhe seu pedido de oração com a comunidade..."
              value={prayerText}
              onChange={(e) => setPrayerText(e.target.value)}
              className="min-h-[100px] sm:min-h-[120px] font-inter text-base sm:text-lg border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300"
            />
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-inter font-semibold py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300">
              <Send className="mr-2 sm:mr-3" size={18} />
              Compartilhar Pedido
            </Button>
          </CardContent>
        </Card>

        {/* Pedidos da Comunidade Premium - CORRIGIDO PARA MOBILE */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6">Pedidos da Comunidade</h3>
          <div className="space-y-4 sm:space-y-6">
            {mockPrayerRequests.map((request) => (
              <Card key={request.id} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 ring-4 ring-gray-100 self-start">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-inter font-bold text-sm sm:text-lg">
                        {request.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 space-y-1 sm:space-y-0">
                        <span className="font-inter font-bold text-gray-900 text-base sm:text-lg truncate">{request.user}</span>
                        <span className="font-inter text-gray-500 font-medium text-sm">{request.time}</span>
                      </div>
                      <p className="font-inter text-gray-700 mb-3 sm:mb-4 text-sm sm:text-lg leading-relaxed break-words">{request.request}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                          <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-inter font-semibold px-3 sm:px-4 py-2 rounded-xl shadow-lg text-xs sm:text-sm">
                            <HandHeart className="mr-1 sm:mr-2" size={14} />
                            Orei por você
                          </Button>
                          <span className="font-inter text-gray-600 font-medium text-sm">{request.prayers} orações</span>
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 rounded-xl self-start sm:self-auto">
                          <MessageSquare size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Meus Pedidos Premium */}
        <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="font-serif text-xl sm:text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Meus Pedidos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
                <HandHeart className="text-white" size={32} />
              </div>
              <p className="font-inter text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">Você ainda não tem pedidos ativos</p>
              <Button variant="outline" className="font-inter font-semibold border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl transition-all duration-300">
                <Plus className="mr-2" size={18} />
                Adicionar Pedido
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCommunity = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pb-24">
      {/* Header Premium */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="hover:bg-gray-100 rounded-2xl">
            <ArrowRight className="rotate-180" size={24} />
          </Button>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Comunidade</h1>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-2xl">
            <Search size={24} />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Grupos Ativos Premium */}
        <div>
          <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Meus Grupos</h3>
          <div className="space-y-4">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-inter font-bold text-gray-900 text-xl">Jovens Unidos</h4>
                    <p className="font-inter text-gray-600 font-medium">127 membros • Ativo há 2h</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 font-inter px-3 py-2 text-lg font-bold">3</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-inter font-bold text-gray-900 text-xl">Mulheres de Fé</h4>
                    <p className="font-inter text-gray-600 font-medium">89 membros • Ativo há 1h</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 font-inter px-3 py-2 text-lg font-bold">1</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Descobrir Grupos Premium */}
        <div>
          <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Descobrir Grupos</h3>
          <div className="space-y-4">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <BookOpen className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-inter font-bold text-gray-900 text-xl">Estudo Bíblico</h4>
                      <p className="font-inter text-gray-600 font-medium">234 membros</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="font-inter font-semibold border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all duration-300">
                    Participar
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Music className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-inter font-bold text-gray-900 text-xl">Ministério de Louvor</h4>
                      <p className="font-inter text-gray-600 font-medium">156 membros</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="font-inter font-semibold border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all duration-300">
                    Participar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Atividade Recente Premium */}
        <div>
          <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Atividade Recente</h3>
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-14 h-14 ring-4 ring-gray-100">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-inter font-bold text-lg">
                      MS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-inter text-gray-900 text-lg leading-relaxed">
                      <span className="font-bold">Maria Silva</span> compartilhou uma reflexão em <span className="font-bold">Jovens Unidos</span>
                    </p>
                    <p className="font-inter text-gray-600 mt-2 font-medium">há 2 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-14 h-14 ring-4 ring-gray-100">
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-inter font-bold text-lg">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-inter text-gray-900 text-lg leading-relaxed">
                      <span className="font-bold">João Santos</span> iniciou um novo tópico de discussão
                    </p>
                    <p className="font-inter text-gray-600 mt-2 font-medium">há 4 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 pb-24">
      {/* Header Premium */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="hover:bg-gray-100 rounded-2xl">
            <ArrowRight className="rotate-180" size={24} />
          </Button>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Perfil</h1>
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('settings')} className="hover:bg-gray-100 rounded-2xl">
            <Settings size={24} />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Profile Header Premium */}
        <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white border-0 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500">
          <CardContent className="p-8 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-6 ring-8 ring-white/20">
              <AvatarFallback className="bg-white text-indigo-600 text-3xl font-inter font-bold">
                {userName.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <h2 className="font-serif text-3xl font-bold mb-3">{userName || 'Usuário'}</h2>
            <p className="font-inter text-indigo-100 mb-8 text-lg">Membro há 3 meses</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="font-inter text-3xl font-bold mb-1">12</p>
                <p className="font-inter text-indigo-100 font-medium">Dias seguidos</p>
              </div>
              <div className="text-center">
                <p className="font-inter text-3xl font-bold mb-1">8</p>
                <p className="font-inter text-indigo-100 font-medium">Conquistas</p>
              </div>
              <div className="text-center">
                <p className="font-inter text-3xl font-bold mb-1">156</p>
                <p className="font-inter text-indigo-100 font-medium">Orações</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas Premium */}
        <div>
          <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Conquistas Recentes</h3>
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <Crown className="text-white" size={32} />
                </div>
                <p className="font-inter font-bold text-gray-900 text-lg">Guerreiro da Oração</p>
                <p className="font-inter text-gray-600 font-medium">7 dias seguidos</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <Shield className="text-white" size={32} />
                </div>
                <p className="font-inter font-bold text-gray-900 text-lg">Leitor Dedicado</p>
                <p className="font-inter text-gray-600 font-medium">50 capítulos</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hábitos Premium */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Hábitos Espirituais</h3>
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('habits')} className="text-indigo-600 hover:bg-indigo-50 rounded-2xl">
              Ver todos
            </Button>
          </div>
          <div className="space-y-4">
            {mockHabits.slice(0, 3).map((habit, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                        habit.completed 
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                          : 'bg-gray-200'
                      }`}>
                        <habit.icon 
                          size={24} 
                          className={habit.completed ? 'text-white' : 'text-gray-400'} 
                        />
                      </div>
                      <div>
                        <p className="font-inter font-bold text-gray-900 text-lg">{habit.name}</p>
                        <p className="font-inter text-gray-600 font-medium">{habit.streak} dias seguidos</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Flame className="text-white" size={20} />
                      </div>
                      <span className="font-inter font-bold text-amber-600 text-xl">{habit.streak}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Menu de Opções Premium */}
        <div className="space-y-3">
          {[
            { icon: PenTool, label: 'Diário Espiritual', screen: 'diary' },
            { icon: Target, label: 'Desafios', screen: 'challenges' },
            { icon: Music, label: 'Sermões & Louvor', screen: 'sermons' },
            { icon: Calendar, label: 'Agenda', screen: 'calendar' },
            { icon: DollarSign, label: 'Doações', screen: 'donations' },
            { icon: MessageCircle, label: 'Mentoria', screen: 'mentorship' }
          ].map((item) => (
            <Card key={item.screen} className="bg-white/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardContent className="p-5">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-auto p-0 font-inter text-lg"
                  onClick={() => setCurrentScreen(item.screen)}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span className="font-semibold text-gray-900">{item.label}</span>
                  <ChevronRight className="ml-auto text-gray-400" size={20} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // Render adicional para outras telas
  const renderOtherScreens = () => {
    const screens = {
      devotional: { title: 'Devocional', icon: Heart },
      'reading-plans': { title: 'Planos de Leitura', icon: BookOpen },
      habits: { title: 'Hábitos Espirituais', icon: Clock },
      challenges: { title: 'Desafios', icon: Target },
      sermons: { title: 'Sermões & Louvor', icon: Music },
      calendar: { title: 'Agenda', icon: Calendar },
      donations: { title: 'Doações', icon: DollarSign },
      diary: { title: 'Diário Espiritual', icon: PenTool },
      mentorship: { title: 'Mentoria', icon: MessageCircle },
      notifications: { title: 'Notificações', icon: Bell },
      settings: { title: 'Configurações', icon: Settings }
    }

    const screen = screens[currentScreen]
    if (!screen) return null

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 pb-24">
        {/* Header Premium */}
        <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 p-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => setCurrentScreen('home')} className="hover:bg-gray-100 rounded-2xl">
              <ArrowRight className="rotate-180" size={24} />
            </Button>
            <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{screen.title}</h1>
            <div className="w-10" />
          </div>
        </div>

        <div className="p-6">
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <screen.icon className="text-white" size={48} />
              </div>
              <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">{screen.title}</h2>
              <p className="font-inter text-gray-600 mb-8 text-xl leading-relaxed">
                Esta funcionalidade está sendo desenvolvida com muito carinho para você.
              </p>
              <Button 
                onClick={() => setCurrentScreen('home')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-inter font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 transform"
              >
                Voltar ao Início
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Main render
  if (currentScreen === 'onboarding') return renderOnboarding()
  if (currentScreen === 'home') return renderHome()
  if (currentScreen === 'bible') return renderBible()
  if (currentScreen === 'prayer') return renderPrayer()
  if (currentScreen === 'community') return renderCommunity()
  if (currentScreen === 'profile') return renderProfile()
  
  return renderOtherScreens()
}