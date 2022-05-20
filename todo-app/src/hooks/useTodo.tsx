import { createContext, useContext, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
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
const COOKIES_KEY_TODOS = '@todo-app:todos'

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Todo[]>(() => {
    const cookies = parseCookies()
    const data = cookies[COOKIES_KEY_TODOS]

    if (data) {
      return JSON.parse(data)
    }
    return [] as Todo[]
  })

  const addTodo = ({
    title,
    description
  }: Pick<Todo, 'title' | 'description'>) => {
    const todo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      done: false,
      createdAt: new Date()
    }
    const cookies = parseCookies()
    const todos = cookies[COOKIES_KEY_TODOS]
    const todosToJson = todos ? JSON.parse(todos) : []
    todosToJson.push(todo)

    setCookie(null, COOKIES_KEY_TODOS, JSON.stringify(todosToJson), {
      maxAge: 1e15,
      path: '/'
    })

    setData((state) => [...state, todo])
  }

  const deleteTodo = (id: string) => {
    const cookies = parseCookies()
    const todos = cookies[COOKIES_KEY_TODOS]
    const todosToJson = (todos ? JSON.parse(todos) : []) as Todo[]
    const todosFiltered = todosToJson.filter((todo) => todo.id !== id)

    setCookie(null, COOKIES_KEY_TODOS, JSON.stringify(todosFiltered), {
      maxAge: 1e15,
      path: '/'
    })
    setData(todosFiltered)
  }

  const updateTodo = (
    id: string,
    { title, description }: Pick<Todo, 'description' | 'title'>
  ) => {
    const cookies = parseCookies()
    const todos = cookies[COOKIES_KEY_TODOS]
    const todosToJson = (todos ? JSON.parse(todos) : []) as Todo[]
    const todoEdited = todosToJson.map((todo) =>
      todo.id === id ? { ...todo, title, description } : todo
    )

    setCookie(null, COOKIES_KEY_TODOS, JSON.stringify(todoEdited), {
      maxAge: 1e15,
      path: '/'
    })

    setData(todoEdited)
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
