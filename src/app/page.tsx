"use client"

import { useState } from "react"
import { Play, Star, Clock, Users, Search, Filter, ChevronRight, Check, MessageCircle, Send, X, Target, Trophy, TrendingUp, Award, BarChart3, Calendar, MapPin, Camera, Heart, Share2, Plus, Settings, User } from "lucide-react"

// Dados dos esportes e vídeo aulas
const sportsCategories = [
  {
    id: "futebol",
    name: "Futebol",
    icon: "⚽",
    color: "from-green-500 to-emerald-600",
    videos: [
      { id: 1, title: "Fundamentos do Drible", duration: "12:30", difficulty: "Iniciante", rating: 4.8, views: "15.2k" },
      { id: 2, title: "Chutes de Precisão", duration: "18:45", difficulty: "Intermediário", rating: 4.9, views: "23.1k" },
      { id: 3, title: "Jogadas de Ataque", duration: "25:10", difficulty: "Avançado", rating: 4.7, views: "8.9k" }
    ]
  },
  {
    id: "basquete",
    name: "Basquete",
    icon: "🏀",
    color: "from-orange-500 to-red-600",
    videos: [
      { id: 4, title: "Arremesso Perfeito", duration: "15:20", difficulty: "Iniciante", rating: 4.9, views: "12.8k" },
      { id: 5, title: "Drible e Controle", duration: "20:15", difficulty: "Intermediário", rating: 4.8, views: "19.3k" },
      { id: 6, title: "Defesa Individual", duration: "22:40", difficulty: "Avançado", rating: 4.6, views: "7.2k" }
    ]
  },
  {
    id: "tenis",
    name: "Tênis",
    icon: "🎾",
    color: "from-yellow-500 to-orange-600",
    videos: [
      { id: 7, title: "Saque Básico", duration: "14:30", difficulty: "Iniciante", rating: 4.7, views: "9.8k" },
      { id: 8, title: "Forehand e Backhand", duration: "28:20", difficulty: "Intermediário", rating: 4.9, views: "16.7k" },
      { id: 9, title: "Estratégias de Jogo", duration: "35:15", difficulty: "Avançado", rating: 4.8, views: "5.4k" }
    ]
  },
  {
    id: "natacao",
    name: "Natação",
    icon: "🏊",
    color: "from-blue-500 to-cyan-600",
    videos: [
      { id: 10, title: "Respiração Correta", duration: "10:45", difficulty: "Iniciante", rating: 4.8, views: "22.1k" },
      { id: 11, title: "Crawl Técnico", duration: "19:30", difficulty: "Intermediário", rating: 4.9, views: "18.5k" },
      { id: 12, title: "Viradas e Saídas", duration: "16:20", difficulty: "Avançado", rating: 4.7, views: "6.8k" }
    ]
  },
  {
    id: "volei",
    name: "Vôlei",
    icon: "🏐",
    color: "from-purple-500 to-pink-600",
    videos: [
      { id: 13, title: "Manchete e Toque", duration: "13:15", difficulty: "Iniciante", rating: 4.8, views: "14.3k" },
      { id: 14, title: "Saque por Baixo", duration: "11:40", difficulty: "Iniciante", rating: 4.6, views: "11.9k" },
      { id: 15, title: "Ataque e Bloqueio", duration: "24:50", difficulty: "Avançado", rating: 4.9, views: "8.1k" }
    ]
  },
  {
    id: "corrida",
    name: "Corrida",
    icon: "🏃",
    color: "from-red-500 to-pink-600",
    videos: [
      { id: 16, title: "Postura Correta", duration: "12:00", difficulty: "Iniciante", rating: 4.7, views: "25.6k" },
      { id: 17, title: "Respiração na Corrida", duration: "15:30", difficulty: "Iniciante", rating: 4.8, views: "20.4k" },
      { id: 18, title: "Treino Intervalado", duration: "30:45", difficulty: "Avançado", rating: 4.9, views: "12.7k" }
    ]
  },
  {
    id: "ciclismo",
    name: "Ciclismo",
    icon: "🚴",
    color: "from-cyan-500 to-blue-600",
    videos: [
      { id: 19, title: "Posicionamento na Bike", duration: "14:20", difficulty: "Iniciante", rating: 4.8, views: "18.3k" },
      { id: 20, title: "Pedalada Eficiente", duration: "22:15", difficulty: "Intermediário", rating: 4.9, views: "14.7k" },
      { id: 21, title: "Subidas e Descidas", duration: "28:30", difficulty: "Avançado", rating: 4.7, views: "9.2k" }
    ]
  }
]

// Planos de assinatura com links de pagamento
const subscriptionPlans = [
  {
    id: "basic",
    name: "Básico",
    price: 97,
    paymentLink: "https://mpago.la/2fKzBD7",
    features: [
      "Acesso a 100+ vídeo aulas",
      "5 modalidades esportivas",
      "Suporte por email",
      "Progresso básico",
      "Qualidade HD"
    ],
    color: "from-blue-500 to-cyan-600",
    popular: false
  },
  {
    id: "premium",
    name: "Premium",
    price: 197,
    paymentLink: "https://mpago.li/2U7gokR",
    features: [
      "Acesso a 500+ vídeo aulas",
      "Todas as modalidades",
      "Suporte 24h prioritário",
      "Análise de progresso avançada",
      "Qualidade 4K",
      "Planos personalizados",
      "Comunidade exclusiva"
    ],
    color: "from-purple-500 to-pink-600",
    popular: true
  },
  {
    id: "pro",
    name: "Profissional",
    price: 297,
    paymentLink: "https://mpago.li/1o5J8ij",
    features: [
      "Acesso completo ilimitado",
      "Todas as modalidades + novas",
      "Suporte 24h VIP",
      "Coach virtual personalizado",
      "Qualidade 4K + downloads",
      "Planos personalizados",
      "Comunidade VIP",
      "Certificados de conclusão",
      "Acesso antecipado"
    ],
    color: "from-orange-500 to-red-600",
    popular: false
  }
]

// Mensagens de auto atendimento
const supportMessages = [
  {
    id: 1,
    question: "Como acessar as aulas?",
    answer: "Após a assinatura, você terá acesso imediato a todas as aulas do seu plano. Basta fazer login e escolher sua modalidade favorita!"
  },
  {
    id: 2,
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. O acesso permanece até o final do período pago."
  },
  {
    id: 3,
    question: "As aulas funcionam offline?",
    answer: "No plano Profissional você pode baixar as aulas para assistir offline. Nos outros planos é necessário conexão com internet."
  },
  {
    id: 4,
    question: "Há limite de dispositivos?",
    answer: "Você pode acessar em até 3 dispositivos simultâneos em todos os planos. Perfeito para toda a família treinar!"
  },
  {
    id: 5,
    question: "Como funciona o suporte 24h?",
    answer: "Nosso suporte está disponível 24/7 via chat. Planos Premium e Pro têm prioridade no atendimento com tempo de resposta de até 5 minutos."
  }
]

// Dados simulados do perfil do usuário
const userProfile = {
  name: "João Silva",
  level: "Intermediário",
  points: 2450,
  streak: 7,
  completedWorkouts: 23,
  totalTime: "45h 30min",
  favoritesSports: ["futebol", "corrida"],
  currentGoals: [
    { id: 1, sport: "futebol", goal: "Melhorar precisão nos chutes", progress: 65, target: "90% de precisão" },
    { id: 2, sport: "corrida", goal: "Correr 5km sem parar", progress: 80, target: "5km em 25min" }
  ]
}

// Dados de desempenho simulados
const performanceData = [
  { date: "2024-01-01", sport: "futebol", duration: 45, intensity: 8, calories: 320 },
  { date: "2024-01-03", sport: "corrida", duration: 30, intensity: 7, calories: 280 },
  { date: "2024-01-05", sport: "futebol", duration: 60, intensity: 9, calories: 420 },
  { date: "2024-01-07", sport: "corrida", duration: 35, intensity: 8, calories: 310 },
  { date: "2024-01-09", sport: "volei", duration: 50, intensity: 7, calories: 350 }
]

// Desafios e rankings
const challenges = [
  {
    id: 1,
    title: "Maratona de Janeiro",
    description: "Complete 20 treinos em janeiro",
    progress: 15,
    target: 20,
    reward: "Medalha de Ouro + 500 pontos",
    participants: 1247,
    timeLeft: "12 dias"
  },
  {
    id: 2,
    title: "Precisão no Futebol",
    description: "Acerte 50 chutes no alvo",
    progress: 32,
    target: 50,
    reward: "Troféu de Precisão + 300 pontos",
    participants: 856,
    timeLeft: "8 dias"
  }
]

// Posts da comunidade
const communityPosts = [
  {
    id: 1,
    user: "Maria Santos",
    sport: "corrida",
    content: "Acabei de completar meus primeiros 5km! 🏃‍♀️ Obrigada pelas dicas do app!",
    likes: 24,
    comments: 8,
    time: "2h atrás",
    image: true
  },
  {
    id: 2,
    user: "Carlos Lima",
    sport: "futebol",
    content: "Treino de dribles hoje foi incrível! Já consigo fazer o movimento que aprendi na aula ⚽",
    likes: 18,
    comments: 5,
    time: "4h atrás",
    image: false
  }
]

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("Todos")
  const [showPlans, setShowPlans] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showPerformance, setShowPerformance] = useState(false)
  const [showChallenges, setShowChallenges] = useState(false)
  const [showCommunity, setShowCommunity] = useState(false)
  const [showWorkoutPlans, setShowWorkoutPlans] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showExtras, setShowExtras] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [supportQuery, setSupportQuery] = useState("")
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', message: string}>>([])

  const selectedSportData = sportsCategories.find(sport => sport.id === selectedSport)
  
  const filteredVideos = selectedSportData?.videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === "Todos" || video.difficulty === difficultyFilter
    return matchesSearch && matchesDifficulty
  }) || []

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-100 text-green-800"
      case "Intermediário": return "bg-yellow-100 text-yellow-800"
      case "Avançado": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const handleSupportQuery = () => {
    if (!supportQuery.trim()) return
    
    setChatMessages(prev => [...prev, { type: 'user', message: supportQuery }])
    
    // Buscar resposta automática
    const matchedMessage = supportMessages.find(msg => 
      msg.question.toLowerCase().includes(supportQuery.toLowerCase()) ||
      supportQuery.toLowerCase().includes(msg.question.toLowerCase().split(' ')[0])
    )
    
    setTimeout(() => {
      if (matchedMessage) {
        setChatMessages(prev => [...prev, { type: 'bot', message: matchedMessage.answer }])
      } else {
        setChatMessages(prev => [...prev, { 
          type: 'bot', 
          message: "Obrigado pela sua mensagem! Nossa equipe responderá em breve. Para dúvidas urgentes, consulte nossas perguntas frequentes acima." 
        }])
      }
    }, 1000)
    
    setSupportQuery("")
  }

  const handlePlanPurchase = (planId: string) => {
    const plan = subscriptionPlans.find(p => p.id === planId)
    if (plan?.paymentLink) {
      window.open(plan.paymentLink, '_blank')
    }
  }

  // Modal Extras que Valorizam o App
  if (showExtras) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowExtras(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Extras que Valorizam o App</h1>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Frase de Impacto */}
            <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                "Você contra você. Todos os dias."
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A frase que define o espírito do MetaSport - sua maior competição é com você mesmo de ontem.
              </p>
            </div>

            {/* Recursos Extras */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Modo Offline */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Modo Offline</h3>
                    <p className="text-purple-300">Treine sem internet</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Baixe aulas para assistir offline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Registre treinos sem conexão</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Sincronização automática quando conectar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Ideal para treinos ao ar livre</span>
                  </li>
                </ul>
              </div>

              {/* Planos por Objetivo */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Planos por Objetivo</h3>
                    <p className="text-purple-300">Treinos específicos</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Emagrecer", icon: "🔥", color: "from-red-500 to-pink-600" },
                    { name: "Força", icon: "💪", color: "from-orange-500 to-red-600" },
                    { name: "Resistência", icon: "🏃", color: "from-blue-500 to-cyan-600" },
                    { name: "Técnica", icon: "🎯", color: "from-purple-500 to-pink-600" }
                  ].map((objective, index) => (
                    <div key={index} className={`bg-gradient-to-r ${objective.color} rounded-xl p-4 text-center text-white`}>
                      <div className="text-2xl mb-2">{objective.icon}</div>
                      <div className="font-semibold">{objective.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conquistas Visuais */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Conquistas Visuais</h3>
                    <p className="text-purple-300">Medalhas, níveis e XP</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl">🏅</div>
                    <div>
                      <h4 className="font-semibold text-white">Sistema de Medalhas</h4>
                      <p className="text-gray-300 text-sm">Bronze, Prata, Ouro e Platina</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-white">Níveis de Progresso</h4>
                      <p className="text-gray-300 text-sm">Do Iniciante ao Mestre</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h4 className="font-semibold text-white">Sistema de XP</h4>
                      <p className="text-gray-300 text-sm">Pontos por cada treino</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publicação na Play Store */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Publicação nas Lojas</h3>
                    <p className="text-purple-300">Play Store e App Store</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Primeiro na Play Store (Android)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Depois na App Store (iOS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Otimização ASO para descoberta</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Screenshots das melhores telas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Checklist Antes de Publicar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">⚙️ Checklist Antes de Publicar</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Testes e Qualidade</h4>
                  <ul className="space-y-3">
                    {[
                      "Teste em celulares diferentes (pra evitar bugs)",
                      "Verifique se as descrições estão curtas e diretas",
                      "Use prints do app mostrando as telas mais legais",
                      "Se tiver vídeo curto (15–30s), poste junto"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Marketing e Apresentação</h4>
                  <ul className="space-y-3">
                    {[
                      "Screenshots das telas de progresso e metas",
                      "Vídeo demonstrativo dos desafios",
                      "Destaque o sistema de conquistas",
                      "Mostre a comunidade ativa"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setShowExtras(false)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                🚀 Implementar Recursos
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal Sobre o App
  if (showAbout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowAbout(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Sobre o MetaSport</h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Apresentação Principal */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  MetaSport
                </h2>
                <p className="text-2xl text-purple-300 font-semibold mb-6">
                  Supere seus limites em qualquer esporte!
                </p>
              </div>

              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  Esqueça mensalidades e treinos caros. O MetaSport é o aplicativo que te ajuda a evoluir em qualquer esporte — do futebol à corrida, do ciclismo ao vôlei — sem precisar de academia ou treinador.
                </p>
                <p>
                  Crie suas metas, acompanhe seu desempenho, participe de desafios e veja sua evolução dia após dia.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-semibold text-white mb-2">Treinos Personalizados</h3>
                  <p className="text-gray-300 text-sm">De acordo com seu nível</p>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-semibold text-white mb-2">Gráficos e Relatórios</h3>
                  <p className="text-gray-300 text-sm">Acompanhe seu desempenho</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-semibold text-white mb-2">Desafios e Conquistas</h3>
                  <p className="text-gray-300 text-sm">Para te motivar sempre</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-xl text-purple-300 font-semibold">
                  MetaSport é o seu novo parceiro de treino — onde estiver, quando quiser.
                </p>
              </div>
            </div>

            {/* Funcionalidades Principais */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🚀 Funcionalidades Principais</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-2">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Criação de Perfil Esportivo</h4>
                      <p className="text-gray-300 text-sm">O usuário escolhe o esporte (futebol, corrida, ciclismo, vôlei, etc.) e define metas (ex: correr 5 km, chutar melhor, aumentar velocidade)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full p-2">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Sistema de Desempenho</h4>
                      <p className="text-gray-300 text-sm">Registra treinos manuais ou via sensores do celular. Mostra gráficos de progresso: tempo, velocidade, força, frequência, etc.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full p-2">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Desafios e Rankings</h4>
                      <p className="text-gray-300 text-sm">Usuários competem com amigos ou comunidade. Pontos e medalhas por metas atingidas (isso motiva muito).</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Planos Automáticos</h4>
                      <p className="text-gray-300 text-sm">O app gera treinos básicos e dicas com base nas metas. Exemplo: "Quer melhorar resistência no futebol? Treine 3x por semana assim…"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-full p-2">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Comunidade</h4>
                      <p className="text-gray-300 text-sm">Espaço para compartilhar resultados, postar fotos e interagir com outros esportistas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plano de Evolução */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">📋 Plano de Evolução do App</h3>
              <p className="text-gray-300 text-center mb-8">Etapas para desenvolver e lançar</p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">🔹 Fase 1: Conceito e planejamento (1 semana)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Definir o nome final e o logotipo.</li>
                    <li>• Criar uma identidade visual (cores, ícone, tipografia).</li>
                    <li>• Decidir as funções iniciais (ex: metas, desempenho, desafios).</li>
                    <li>• Montar uma breve pesquisa com amigos sobre o que eles gostariam no app.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">🔹 Fase 2: Protótipo e design (2 a 3 semanas)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Criar o design das telas (no Figma, por exemplo).</li>
                    <li>• Fazer o fluxo básico: login → escolher esporte → definir meta → acompanhar desempenho.</li>
                    <li>• Testar com amigos e ajustar a interface.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">🔹 Fase 3: Desenvolvimento (4 a 6 semanas)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Escolher o tipo de app:</li>
                    <li className="ml-4">• No-code (ex: Glide, FlutterFlow, AppGyver, Adalo) – mais rápido.</li>
                    <li className="ml-4">• Código próprio (React Native, Flutter) – mais flexível.</li>
                    <li>• Desenvolver as funções principais:</li>
                    <li className="ml-4">• Cadastro de usuário</li>
                    <li className="ml-4">• Sistema de metas e progresso</li>
                    <li className="ml-4">• Tela de desafios e ranking</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">🔹 Fase 4: Testes e feedback (1 semana)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Liberar versão beta para amigos testarem.</li>
                    <li>• Coletar erros e sugestões.</li>
                    <li>• Ajustar o que for necessário.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setShowAbout(false)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                🚀 Começar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Comunidade
  if (showCommunity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCommunity(false)}
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Voltar
              </button>
              <h1 className="text-4xl font-bold text-white">Comunidade MetaSport</h1>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
              <Plus className="w-5 h-5 inline mr-2" />
              Nova Publicação
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feed Principal */}
            <div className="lg:col-span-2 space-y-6">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{post.user}</h3>
                      <p className="text-gray-400 text-sm">{post.time} • {sportsCategories.find(s => s.id === post.sport)?.name}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  
                  {post.image && (
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl h-48 mb-4 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-6 text-gray-400">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                      Compartilhar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Ranking Semanal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏆 Ranking Semanal</h3>
                <div className="space-y-3">
                  {[
                    { name: "Ana Costa", points: 3200, position: 1 },
                    { name: "João Silva", points: 2450, position: 2 },
                    { name: "Pedro Santos", points: 2100, position: 3 }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.position === 1 ? 'bg-yellow-500 text-black' :
                        user.position === 2 ? 'bg-gray-400 text-black' :
                        'bg-orange-600 text-white'
                      }`}>
                        {user.position}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.points} pontos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grupos Ativos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">👥 Grupos Ativos</h3>
                <div className="space-y-3">
                  {[
                    { name: "Corredores Iniciantes", members: 234, sport: "corrida" },
                    { name: "Futebol Técnico", members: 156, sport: "futebol" },
                    { name: "Vôlei Feminino", members: 89, sport: "volei" }
                  ].map((group, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                      <span className="text-2xl">{sportsCategories.find(s => s.id === group.sport)?.icon}</span>
                      <div>
                        <p className="text-white font-medium">{group.name}</p>
                        <p className="text-gray-400 text-sm">{group.members} membros</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Planos de Treino
  if (showWorkoutPlans) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowWorkoutPlans(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Planos de Treino Automáticos</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsCategories.map((sport) => (
              <div key={sport.id} className={`bg-gradient-to-br ${sport.color} rounded-2xl p-6 text-white`}>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">{sport.icon}</span>
                  <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                  <p className="text-white/80">Plano personalizado</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📅 Frequência Recomendada</h4>
                    <p className="text-sm">3x por semana, 45min cada</p>
                  </div>
                  
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🎯 Foco Principal</h4>
                    <p className="text-sm">
                      {sport.id === 'futebol' && 'Técnica, resistência e precisão'}
                      {sport.id === 'corrida' && 'Resistência cardiovascular e velocidade'}
                      {sport.id === 'basquete' && 'Arremesso, drible e coordenação'}
                      {sport.id === 'volei' && 'Saque, manchete e ataque'}
                      {sport.id === 'tenis' && 'Saque, forehand e estratégia'}
                      {sport.id === 'natacao' && 'Técnica de nado e respiração'}
                      {sport.id === 'ciclismo' && 'Resistência e técnica de pedalada'}
                    </p>
                  </div>

                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">⚡ Progressão</h4>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <p className="text-sm">Nível Intermediário - 60% completo</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-white/20 hover:bg-white/30 py-3 rounded-xl font-semibold transition-all">
                  Iniciar Plano
                </button>
              </div>
            ))}
          </div>

          {/* Dicas Personalizadas */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">💡 Dicas Personalizadas para Você</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">🏃 Para Melhorar na Corrida</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Aumente gradualmente a distância (10% por semana)</li>
                  <li>• Mantenha ritmo constante nos treinos longos</li>
                  <li>• Inclua treinos intervalados 1x por semana</li>
                  <li>• Não esqueça do aquecimento e alongamento</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">⚽ Para Melhorar no Futebol</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pratique dribles com ambos os pés</li>
                  <li>• Treine chutes de diferentes ângulos</li>
                  <li>• Trabalhe passes curtos e longos</li>
                  <li>• Desenvolva visão de jogo assistindo partidas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Desafios
  if (showChallenges) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowChallenges(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Desafios e Rankings</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Desafios Ativos */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">🏆 Desafios Ativos</h2>
              
              {challenges.map((challenge) => (
                <div key={challenge.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-300 mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>👥 {challenge.participants} participantes</span>
                        <span>⏰ {challenge.timeLeft} restantes</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">
                        {challenge.progress}/{challenge.target}
                      </div>
                      <div className="text-sm text-gray-400">progresso</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Progresso</span>
                      <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all"
                        style={{width: `${(challenge.progress / challenge.target) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-yellow-400 font-semibold">
                      🏅 {challenge.reward}
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-2 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
                      Participar
                    </button>
                  </div>
                </div>
              ))}

              {/* Conquistas */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏅 Suas Conquistas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "🥇", title: "Primeira Vitória", desc: "Complete seu primeiro treino" },
                    { icon: "🔥", title: "Sequência de 7", desc: "7 dias consecutivos" },
                    { icon: "⚽", title: "Mestre do Futebol", desc: "50 treinos de futebol" },
                    { icon: "🏃", title: "Corredor", desc: "100km percorridos" }
                  ].map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <h4 className="font-semibold text-white text-sm mb-1">{achievement.title}</h4>
                      <p className="text-gray-300 text-xs">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ranking Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏆 Ranking Geral</h3>
                <div className="space-y-3">
                  {[
                    { name: "Ana Costa", points: 3200, position: 1, trend: "up" },
                    { name: "João Silva", points: 2450, position: 2, trend: "same" },
                    { name: "Pedro Santos", points: 2100, position: 3, trend: "down" },
                    { name: "Maria Oliveira", points: 1950, position: 4, trend: "up" },
                    { name: "Carlos Lima", points: 1800, position: 5, trend: "up" }
                  ].map((user, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-xl ${user.name === 'João Silva' ? 'bg-purple-600/30 border border-purple-500' : 'bg-white/5'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.position === 1 ? 'bg-yellow-500 text-black' :
                        user.position === 2 ? 'bg-gray-400 text-black' :
                        user.position === 3 ? 'bg-orange-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {user.position}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.points} pontos</p>
                      </div>
                      <div className={`text-sm ${
                        user.trend === 'up' ? 'text-green-400' :
                        user.trend === 'down' ? 'text-red-400' :
                        'text-gray-400'
                      }`}>
                        {user.trend === 'up' && '↗️'}
                        {user.trend === 'down' && '↘️'}
                        {user.trend === 'same' && '➡️'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Próximos Desafios */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📅 Próximos Desafios</h3>
                <div className="space-y-3">
                  {[
                    { title: "Fevereiro Fitness", date: "1 Feb", participants: 2340 },
                    { title: "Desafio de Velocidade", date: "15 Feb", participants: 890 },
                    { title: "Maratona de Março", date: "1 Mar", participants: 1560 }
                  ].map((upcoming, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-3">
                      <h4 className="font-semibold text-white text-sm">{upcoming.title}</h4>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Inicia: {upcoming.date}</span>
                        <span>{upcoming.participants} inscritos</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Performance
  if (showPerformance) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowPerformance(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Sistema de Desempenho</h1>
          </div>

          {/* Estatísticas Gerais */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{userProfile.completedWorkouts}</div>
              <div className="text-gray-300">Treinos Completos</div>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{userProfile.totalTime}</div>
              <div className="text-gray-300">Tempo Total</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">{userProfile.points}</div>
              <div className="text-gray-300">Pontos</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{userProfile.streak}</div>
              <div className="text-gray-300">Dias Seguidos</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gráfico de Progresso */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">📈 Progresso Semanal</h3>
              <div className="space-y-4">
                {performanceData.map((data, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 text-gray-400 text-sm">
                      {new Date(data.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{sportsCategories.find(s => s.id === data.sport)?.icon}</span>
                        <span className="text-white font-medium">{sportsCategories.find(s => s.id === data.sport)?.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span>⏱️ {data.duration}min</span>
                        <span>🔥 {data.intensity}/10</span>
                        <span>⚡ {data.calories} cal</span>
                      </div>
                    </div>
                    <div className="w-20">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                          style={{width: `${data.intensity * 10}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metas Atuais */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">🎯 Metas Atuais</h3>
              <div className="space-y-6">
                {userProfile.currentGoals.map((goal) => (
                  <div key={goal.id} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sportsCategories.find(s => s.id === goal.sport)?.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{goal.goal}</h4>
                        <p className="text-gray-400 text-sm">Meta: {goal.target}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-400">{goal.progress}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all"
                        style={{width: `${goal.progress}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
                <Target className="w-5 h-5 inline mr-2" />
                Definir Nova Meta
              </button>
            </div>
          </div>

          {/* Análise Detalhada */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">🔍 Análise Detalhada</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-semibold text-white mb-2">Força</h4>
                <div className="text-2xl font-bold text-green-400 mb-1">85%</div>
                <p className="text-gray-400 text-sm">Melhorou 12% este mês</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏃</div>
                <h4 className="font-semibold text-white mb-2">Velocidade</h4>
                <div className="text-2xl font-bold text-blue-400 mb-1">78%</div>
                <p className="text-gray-400 text-sm">Melhorou 8% este mês</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">❤️</div>
                <h4 className="font-semibold text-white mb-2">Resistência</h4>
                <div className="text-2xl font-bold text-red-400 mb-1">92%</div>
                <p className="text-gray-400 text-sm">Melhorou 15% este mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Perfil
  if (showProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowProfile(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Perfil Esportivo</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Perfil Principal */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{userProfile.name}</h2>
                <p className="text-purple-300 mb-4">Nível {userProfile.level}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-purple-400">{userProfile.points}</div>
                    <div className="text-gray-300 text-sm">Pontos</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-orange-400">{userProfile.streak}</div>
                    <div className="text-gray-300 text-sm">Dias Seguidos</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all mb-4">
                  <Settings className="w-5 h-5 inline mr-2" />
                  Editar Perfil
                </button>
              </div>

              {/* Esportes Favoritos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">⭐ Esportes Favoritos</h3>
                <div className="space-y-3">
                  {userProfile.favoritesSports.map((sportId) => {
                    const sport = sportsCategories.find(s => s.id === sportId)
                    return (
                      <div key={sportId} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                        <span className="text-2xl">{sport?.icon}</span>
                        <span className="text-white font-medium">{sport?.name}</span>
                      </div>
                    )
                  })}
                </div>
                <button className="w-full mt-4 border-2 border-white/30 py-2 rounded-xl text-white hover:bg-white/10 transition-all">
                  <Plus className="w-4 h-4 inline mr-2" />
                  Adicionar Esporte
                </button>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Seleção de Esporte */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏆 Escolha seu Esporte Principal</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sportsCategories.map((sport) => (
                    <button
                      key={sport.id}
                      className={`p-4 rounded-xl transition-all text-center ${
                        userProfile.favoritesSports.includes(sport.id)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <div className="text-3xl mb-2">{sport.icon}</div>
                      <div className="font-medium">{sport.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Definir Metas */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Definir Novas Metas</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Esporte</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Selecione um esporte</option>
                      {sportsCategories.map((sport) => (
                        <option key={sport.id} value={sport.id} className="bg-gray-800">
                          {sport.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Objetivo</label>
                    <input
                      type="text"
                      placeholder="Ex: Correr 5km sem parar"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Meta Específica</label>
                    <input
                      type="text"
                      placeholder="Ex: 5km em 25 minutos"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-xl text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all">
                    <Target className="w-5 h-5 inline mr-2" />
                    Criar Meta
                  </button>
                </div>
              </div>

              {/* Metas Atuais */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📊 Suas Metas Atuais</h3>
                <div className="space-y-4">
                  {userProfile.currentGoals.map((goal) => (
                    <div key={goal.id} className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{sportsCategories.find(s => s.id === goal.sport)?.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{goal.goal}</h4>
                          <p className="text-gray-400 text-sm">Meta: {goal.target}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-400">{goal.progress}%</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all"
                          style={{width: `${goal.progress}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Suporte
  if (showSupport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSupport(false)}
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Voltar
              </button>
              <h1 className="text-4xl font-bold text-white">Suporte 24h</h1>
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🟢 Online 24/7
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FAQ Automático */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {supportMessages.map((msg) => (
                  <div key={msg.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <h3 className="font-semibold text-purple-300 mb-2">{msg.question}</h3>
                    <p className="text-gray-300 text-sm">{msg.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat ao Vivo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Chat ao Vivo</h2>
              
              {/* Mensagens */}
              <div className="bg-white/5 rounded-xl p-4 h-80 overflow-y-auto mb-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 rounded-full p-2">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-purple-600 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Olá! Como posso ajudar você hoje? 😊</p>
                  </div>
                </div>
                
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex items-start gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`rounded-full p-2 ${msg.type === 'user' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                      {msg.type === 'user' ? '👤' : '🤖'}
                    </div>
                    <div className={`rounded-lg p-3 max-w-xs ${msg.type === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                      <p className="text-white text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input de Mensagem */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={supportQuery}
                  onChange={(e) => setSupportQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSupportQuery()}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSupportQuery}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <p className="text-gray-400 text-xs mt-2 text-center">
                Tempo médio de resposta: 2-5 minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Planos
  if (showPlans) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowPlans(false)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white">Planos de Assinatura</h1>
          </div>

          {/* Planos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-white/20'
                } ${selectedPlan === plan.id ? 'ring-4 ring-purple-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{plan.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    R$ {plan.price}
                    <span className="text-lg text-gray-300">/mês</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanPurchase(plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                  }`}
                >
                  💳 Assinar Agora
                </button>
              </div>
            ))}
          </div>

          {/* Garantias */}
          <div className="text-center bg-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🛡️ Garantia Total</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-white mb-1">Pagamento Seguro</h4>
                <p className="text-sm">Processado pelo Mercado Pago</p>
              </div>
              <div>
                <div className="text-3xl mb-2">❌</div>
                <h4 className="font-semibold text-white mb-1">Cancele Quando Quiser</h4>
                <p className="text-sm">Sem taxas ou multas</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🆘</div>
                <h4 className="font-semibold text-white mb-1">Suporte 24h</h4>
                <p className="text-sm">Sempre disponível para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header do Player */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setSelectedVideo(null)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <div className="flex items-center gap-2 text-purple-300">
              <span className="text-2xl">{selectedSportData?.icon}</span>
              <span>{selectedSportData?.name}</span>
            </div>
          </div>

          {/* Player de Vídeo */}
          <div className="bg-black rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-20 h-20 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300">Duração: {selectedVideo.duration}</p>
                <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
                  ▶ Reproduzir Aula
                </button>
              </div>
            </div>
          </div>

          {/* Informações do Vídeo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedVideo.difficulty)}`}>
                {selectedVideo.difficulty}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{selectedVideo.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{selectedVideo.views} visualizações</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">{selectedVideo.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              Nesta aula completa, você aprenderá todas as técnicas fundamentais passo a passo. 
              Nossos instrutores especializados demonstram cada movimento com explicações detalhadas 
              para que você possa praticar em casa com segurança e eficiência.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (selectedSport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setSelectedSport(null)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedSportData?.icon}</span>
              <h1 className="text-4xl font-bold text-white">{selectedSportData?.name}</h1>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar aulas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
              >
                <option value="Todos">Todos os níveis</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          </div>

          {/* Lista de Vídeos */}
          <div className="grid gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer transform hover:scale-[1.02] group"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Thumbnail */}
                  <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(video.difficulty)}`}>
                        {video.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-white">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{video.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <Users className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300">
                      Aprenda as técnicas fundamentais com explicações detalhadas e demonstrações práticas.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Nenhuma aula encontrada</h3>
              <p className="text-gray-300">Tente ajustar os filtros ou termo de busca.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MetaSport
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Supere seus limites em qualquer esporte!
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crie seu perfil esportivo, defina metas, acompanhe seu desempenho e evolua em qualquer esporte. 
            Sua jornada atlética começa aqui!
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setShowProfile(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            👤 Meu Perfil
          </button>
          <button
            onClick={() => setShowPerformance(true)}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-3 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105"
          >
            📊 Desempenho
          </button>
          <button
            onClick={() => setShowChallenges(true)}
            className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full text-white font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
          >
            🏆 Desafios
          </button>
          <button
            onClick={() => setShowWorkoutPlans(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105"
          >
            📋 Planos de Treino
          </button>
          <button
            onClick={() => setShowCommunity(true)}
            className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-3 rounded-full text-white font-semibold hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105"
          >
            👥 Comunidade
          </button>
          <button
            onClick={() => setShowAbout(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            ℹ️ Sobre o App
          </button>
          <button
            onClick={() => setShowExtras(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 px-6 py-3 rounded-full text-white font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105"
          >
            ⭐ Extras
          </button>
        </div>

        {/* Stats do Usuário */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl font-bold text-purple-400 mb-1">{userProfile.points}</div>
            <div className="text-gray-300 text-sm">Pontos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl font-bold text-orange-400 mb-1">{userProfile.streak}</div>
            <div className="text-gray-300 text-sm">Dias Seguidos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl font-bold text-green-400 mb-1">{userProfile.completedWorkouts}</div>
            <div className="text-gray-300 text-sm">Treinos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl font-bold text-blue-400 mb-1">{userProfile.level}</div>
            <div className="text-gray-300 text-sm">Nível</div>
          </div>
        </div>
      </div>

      {/* Seção de Planos em Destaque */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Planos de Assinatura
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Escolha o plano ideal para acelerar sua evolução esportiva
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all hover:scale-105 cursor-pointer ${
                plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-white/20'
              }`}
              onClick={() => setShowPlans(true)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{plan.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white">
                  R$ {plan.price}
                  <span className="text-sm text-gray-300">/mês</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.features.length > 4 && (
                  <li className="text-purple-300 text-center">
                    +{plan.features.length - 4} recursos extras
                  </li>
                )}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowPlans(true)}
            className="text-purple-300 hover:text-white transition-colors font-semibold"
          >
            Ver todos os recursos detalhados →
          </button>
        </div>
      </div>

      {/* Categorias de Esportes */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Escolha seu Esporte
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sportsCategories.map((sport) => (
            <div
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`bg-gradient-to-br ${sport.color} rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {sport.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {sport.name}
                </h3>
                <p className="text-white/80 mb-4">
                  {sport.videos.length} aulas disponíveis
                </p>
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <span>Ver aulas</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Suporte */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-12 h-12 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Suporte 24 Horas</h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está sempre disponível para ajudar você. 
            Chat ao vivo, respostas automáticas e suporte prioritário para assinantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowSupport(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              💬 Abrir Chat
            </button>
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              Online agora
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comece sua Jornada Esportiva!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crie seu perfil, defina suas metas e acompanhe sua evolução. 
            Milhares de atletas já estão transformando seus sonhos em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowProfile(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              🚀 Criar Perfil
            </button>
            <button
              onClick={() => setShowPlans(true)}
              className="border-2 border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              💎 Ver Planos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}