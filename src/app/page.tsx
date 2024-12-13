'use client'

import { FC } from 'react'
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Input, 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Avatar 
} from "@nextui-org/react"
import { Button } from '@/components/ui/Button'
import { UserCard } from '@/components/features/UserCard'
import type { MenuItem } from '@/types'

const Home: FC = () => {
  const menuItems: MenuItem[] = [
    { key: 'novo', label: 'Novo arquivo' },
    { key: 'copiar', label: 'Copiar link' },
    { key: 'editar', label: 'Editar arquivo' },
    { key: 'deletar', label: 'Deletar arquivo', color: 'danger' }
  ]

  return (
    <main className="container mx-auto min-h-screen py-8 px-4">
      <div className="max-w-[600px] mx-auto space-y-8">
        <UserCard 
          name="NextUI Exemplo"
          role="nextui.org"
          avatarUrl="https://i.pravatar.cc/150"
        />

        <Card className="w-full">
          <CardBody className="space-y-6">
            <p className="text-base">
              Componentes modernos e bonitos para seu projeto Next.js
            </p>
            
            <div className="space-y-2">
              <Input
                type="email"
                label="Email"
                placeholder="Digite seu email"
                variant="bordered"
                radius="sm"
                className="max-w-xs"
              />
            </div>

            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="bordered"
                  className="w-full max-w-xs"
                  label="Abrir Menu"
                />
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Menu de exemplo"
                className="w-full max-w-xs"
              >
                {menuItems.map(({ key, label, color }) => (
                  <DropdownItem 
                    key={key}
                    className={color === 'danger' ? 'text-danger' : ''}
                    color={color}
                  >
                    {label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </CardBody>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            color="primary"
            size="lg"
            radius="sm"
            label="Botão Primário"
          />
          <Button 
            color="secondary"
            size="lg"
            radius="sm"
            label="Botão Secundário"
          />
        </div>
      </div>
    </main>
  )
}

export default Home 