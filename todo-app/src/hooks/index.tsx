import React from 'react'
import { TodoProvider } from './useTodo'

export default function AppProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <TodoProvider>{children}</TodoProvider>
}
