import { FC } from 'react'
import { Button as NextUIButton } from '@nextui-org/react'
import type { ButtonProps } from '@nextui-org/react'

interface CustomButtonProps extends ButtonProps {
  label: string
}

export const Button: FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <NextUIButton {...props}>
      {label}
    </NextUIButton>
  )
} 