import { createContext, useCallback, useContext, useState } from 'react'

export interface Todo {
  id: string
  title: string
  description: string
  done: boolean
  createdAt: Date
}

interface TodoContextData {
  todos: Todo[]
  addTodo: (todo: Pick<Todo, 'title' | 'description'>) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, todo: Pick<Todo, 'title' | 'description'>) => void
  toggleTodoChecked: (id: string) => void
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData)

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Todo[]>([])

  const addTodo = useCallback(
    ({ title, description }: Pick<Todo, 'title' | 'description'>) => {
      const todo: Todo = {
        id: crypto.randomUUID(),
        title,
        description,
        done: false,
        createdAt: new Date()
      }

      setData((state) => [...state, todo])
    },
    []
  )

  const deleteTodo = useCallback((id: string) => {
    const newData = data.filter((todo) => todo.id !== id)

    setData(newData)
  }, [])

  const updateTodo = (
    id: string,
    { title, description }: Pick<Todo, 'description' | 'title'>
  ) => {
    const newData = data.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
          description
        }
      }

      return todo
    })

    setData(newData)
  }

  const toggleTodoChecked = (id: string) => {
    const newData = data.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }

      return todo
    })

    setData(newData)
  }

  return (
    <TodoContext.Provider
      value={{
        todos: data,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleTodoChecked
      }}
    >
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
