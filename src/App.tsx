import { ChangeEvent, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { CreateNewTodo } from "./components/CreateNewTodo"
import { TodoList } from "./components/TodoList"

export type TodoType = {id: string; name: string}

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([])
  const [newTodoString, setNewTodoString] = useState('')
  
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }

  const onAddingBtnClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString
    }

    setTodoList([newTodoItem, ...todoList])
    setNewTodoString('')
  }
  console.log({newTodoString})

  return (
    <>
      <p> This is Todo App</p>
      <CreateNewTodo
        onAddingBtnClick={onAddingBtnClick} 
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
      />
      <TodoList todoList={todoList} />
    </>
  )
}

export default App
