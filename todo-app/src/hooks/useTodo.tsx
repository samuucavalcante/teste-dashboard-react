import { createContext, useCallback, useContext, useState } from 'react'

interface Todo {
  id: string
  text: string
  description: string
  done: boolean
  createdAt: Date
}

interface TodoContextData {
  todos: Todo[]
  addTodo: (todo: Pick<Todo, 'text' | 'description'>) => void
  deleteTodo: (id: string) => void
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData)

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Todo[]>([])

  const addTodo = useCallback(
    ({ text, description }: Pick<Todo, 'text' | 'description'>) => {
      const todo: Todo = {
        id: crypto.randomUUID(),
        text,
        description,
        done: false,
        createdAt: new Date()
      }
      console.log({
        todo,
        data
      })

      setData((state) => [...state, todo])
    },
    []
  )

  const deleteTodo = useCallback((id: string) => {}, [])

  return (
    <TodoContext.Provider value={{ todos: data, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

function useTodo(): TodoContextData {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}

export { TodoProvider, useTodo }
