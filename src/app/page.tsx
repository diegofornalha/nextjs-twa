'use client'

import type { ChangeEvent, KeyboardEvent } from 'react'
import { useState, useCallback } from 'react'
import { Button, Input, Card } from '@nextui-org/react'
import { IconMicrophone, IconAttachment, IconSend } from './icons'
import { useRouter } from 'next/navigation'

interface SuggestionCard {
  id: string
  text: string
}

const SUGGESTION_CARDS: SuggestionCard[] = [
  { id: 'hooks', text: 'Explique o conceito de React Hooks' },
  { id: 'nextjs', text: 'Como usar o Next.js com TypeScript?' },
  { id: 'rest', text: 'Melhores práticas em API REST' }
]

export default function Home() {
  const router = useRouter()
  const [message, setMessage] = useState<string>('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSend = useCallback(() => {
    const trimmedMessage = message.trim()
    if (trimmedMessage) {
      console.log('Enviando mensagem:', trimmedMessage)
      setMessage('')
    }
  }, [message])

  const handleKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }, [handleSend])

  const handleMessageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev)
  }, [])

  const handleUpgradeClick = useCallback(() => {
    router.push('/plano')
  }, [router])

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-[260px]' : 'w-0'} sidebar p-2 transition-all duration-300 overflow-hidden`}>
        <div className="flex flex-col h-full w-[260px]">
          {/* Top Icons */}
          <div className="flex justify-between items-center mb-4 px-2">
            <Button 
              isIconOnly
              variant="light"
              className="min-w-8 w-8 h-8"
              aria-label="Menu"
              onClick={toggleSidebar}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
              </svg>
            </Button>
            <div className="flex gap-2">
              <Button 
                isIconOnly
                variant="light"
                className="min-w-8 w-8 h-8"
                aria-label="Buscar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </Button>
              <Button 
                isIconOnly
                variant="light"
                className="min-w-8 w-8 h-8"
                aria-label="Novo chat"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </Button>
            </div>
          </div>

          <Button 
            className="mb-2 justify-start text-sm h-11 hover:bg-gray-100"
            variant="light" 
            color="default"
            startContent={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-5H6l12-7-5 7h5l-7 5z"/>
              </svg>
            }
          >
            ChatGPT
          </Button>
          <Button 
            className="mb-2 justify-start text-sm h-11 hover:bg-gray-100"
            variant="light" 
            color="default"
            startContent={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            }
          >
            Explorar GPTs
          </Button>

          {/* Bottom Section */}
          <div className="mt-auto">
            <Button 
              className="w-full justify-start text-sm h-11 hover:bg-gray-100"
              variant="light"
              color="default"
              startContent={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              }
              onClick={handleUpgradeClick}
            >
              Faça upgrade do seu plano
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-2 border-b">
          {!isSidebarOpen && (
            <Button 
              isIconOnly
              variant="light"
              className="min-w-8 w-8 h-8"
              aria-label="Abrir menu"
              onClick={toggleSidebar}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
              </svg>
            </Button>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Como posso ajudar?</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
              {SUGGESTION_CARDS.map((card) => (
                <Card 
                  key={card.id}
                  className="p-4 bg-white hover:bg-gray-50 cursor-pointer shadow-sm"
                  onClick={() => setMessage(card.text)}
                >
                  <p className="text-sm text-gray-600">{card.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6">
          <div className="max-w-2xl mx-auto relative">
            <div className="chat-input rounded-lg">
              <div className="flex items-center gap-2 p-2">
                <Button 
                  isIconOnly 
                  variant="light" 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Anexar arquivo"
                >
                  <IconAttachment />
                </Button>
                <Input
                  value={message}
                  onChange={handleMessageChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Envie uma mensagem para o ChatGPT"
                  variant="bordered"
                  classNames={{
                    input: "text-gray-700 placeholder:text-gray-500",
                    inputWrapper: "bg-transparent border-none shadow-none"
                  }}
                  className="flex-1"
                  aria-label="Campo de mensagem"
                  endContent={
                    <Button 
                      isIconOnly 
                      variant="light"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={handleSend}
                      aria-label="Enviar mensagem"
                    >
                      <IconSend />
                    </Button>
                  }
                />
                <Button 
                  isIconOnly 
                  variant="light" 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Usar microfone"
                >
                  <IconMicrophone />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 