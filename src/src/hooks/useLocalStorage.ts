import { useState } from 'react'

type SetValue<T> = (value: T | ((val: T) => T)) => void

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Erro ao ler ${key} do localStorage:`, error)
      return initialValue
    }
  })

  // Retorna uma versão memorizada da função setter
  const setValue: SetValue<T> = (value) => {
    try {
      // Permite que o value seja uma função para ter a mesma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Erro ao salvar ${key} no localStorage:`, error)
    }
  }

  return [storedValue, setValue]
} 