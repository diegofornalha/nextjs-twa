export const APP_CONFIG = {
  name: 'Minha Aplicação',
  description: 'Uma aplicação Next.js com TypeScript',
  version: '1.0.0',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 5000,
  },
  theme: {
    defaultMode: 'light' as const,
    storageKey: 'theme-preference',
  },
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },
  dateFormat: {
    default: 'dd/MM/yyyy',
    withTime: 'dd/MM/yyyy HH:mm',
  },
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  dashboard: '/dashboard',
} as const

export const STORAGE_KEYS = {
  authToken: 'auth-token',
  userPreferences: 'user-preferences',
  theme: 'theme-mode',
} as const 