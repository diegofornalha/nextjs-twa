'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type PlanType = 'personal' | 'business'

export default function PlanoPage() {
  const router = useRouter()
  const [planType, setPlanType] = useState<PlanType>('personal')

  const handleClose = () => {
    router.push('/')
  }

  const personalPlans = [
    {
      name: 'Grátis',
      price: '0',
      description: 'Descubra como a IA pode ajudar em tarefas do dia a dia',
      buttonText: 'Seu plano atual',
      buttonClass: 'bg-gray-100',
      features: [
        'Acesso ao GPT-4o mini',
        'Modo voz padrão',
        'Acesso limitado ao GPT-4o'
      ]
    },
    {
      name: 'Plus',
      price: '20',
      description: 'Aumente a produtividade e a criatividade com o acesso expandido',
      buttonText: 'Obter Plus',
      buttonClass: 'bg-emerald-500 text-white hover:bg-emerald-600',
      isPopular: true,
      features: [
        'Tudo do Grátis',
        'Modo voz padrão e avançada',
        'Acesso limitado ao o1 e o1-mini'
      ]
    },
    {
      name: 'Pro',
      price: '200',
      description: 'Obtenha o melhor da OpenAI com o nível mais elevado de acesso',
      buttonText: 'Obter o Pro',
      buttonClass: 'bg-black text-white hover:bg-gray-800',
      features: [
        'Tudo do Plus',
        'Acesso ilimitado ao o1, o1-mini e GPT-4o',
        'Acesso ilimitado à voz avançada'
      ]
    }
  ]

  const businessPlans = [
    {
      name: 'Team',
      price: '25',
      description: 'Turbine o desempenho da sua equipe com um ambiente de trabalho seguro e colaborativo',
      buttonText: 'Obter Team',
      buttonClass: 'bg-black text-white hover:bg-gray-800',
      features: [
        'Maior limite de mensagens que o Plus no GPT-4, GPT-4o, ferramentas como DALL-E, navegação na Web, análise de dados e muito mais',
        'Acesso limitado ao o1 e o1-mini',
        'Modo voz padrão e avançada',
        'Crie e compartilhe GPTs com seu espaço de trabalho',
        'Console de administrador para gerenciar seu espaço de trabalho',
        'Os dados do Team são excluídos do treinamento por padrão'
      ],
      footer: 'Para 2 usuários ou mais, cobrado anualmente'
    }
  ]

  const plans = planType === 'personal' ? personalPlans : businessPlans

  return (
    <div className="min-h-screen p-8 relative">
      {/* Botão X para fechar */}
      <Button
        isIconOnly
        variant="light"
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={handleClose}
        aria-label="Fechar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </Button>

      {/* Conteúdo da página */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Faça upgrade do seu plano</h1>

        {/* Seletor Personal/Business */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                planType === 'personal' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setPlanType('personal')}
            >
              Personal
            </button>
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                planType === 'business' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setPlanType('business')}
            >
              Business
            </button>
          </div>
        </div>

        {/* Grid de planos */}
        <div className={`grid gap-6 ${
          planType === 'personal' 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 max-w-xl mx-auto'
        }`}>
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`p-8 rounded-xl border ${
                plan.isPopular ? 'border-emerald-500 bg-emerald-50/30 relative' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 right-8 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                  POPULAR
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">USD/mês</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <button className={`w-full py-3 rounded-lg font-medium mb-6 ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className={`w-5 h-5 mr-2 mt-1 ${
                        plan.isPopular ? 'text-emerald-500' : 'text-gray-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.footer && (
                <p className="text-gray-500 text-sm mt-6">{plan.footer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 