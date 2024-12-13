'use client'

import { FC } from 'react'

const Home: FC = () => {
  return (
    <main 
      className="container mx-auto min-h-screen py-8 px-4"
      role="main"
      aria-label="Conteúdo principal"
    >
      <div className="max-w-[600px] mx-auto">
        <h1 
          className="text-2xl font-bold mb-4"
          aria-level={1}
        >
          Bem-vindo
        </h1>
        <section className="prose">
          <p className="text-gray-600">
            Este é o conteúdo principal da página.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Home 