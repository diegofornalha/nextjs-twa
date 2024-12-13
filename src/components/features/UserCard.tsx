import { FC } from 'react'
import { Card, CardHeader, CardBody, Avatar } from '@nextui-org/react'

interface UserCardProps {
  name: string
  role: string
  avatarUrl: string
}

export const UserCard: FC<UserCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <Avatar 
          src={avatarUrl}
          size="md"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-small text-default-500">{role}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-base">
          Componente de usuário reutilizável
        </p>
      </CardBody>
    </Card>
  )
} 