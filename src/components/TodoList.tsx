import { TodoType } from '../App'
import { Todo } from './Todo'

export const TodoList = ({ todoList }: { todoList: TodoType[] }) => {
  return (
    <div>
        {todoList.map((todo) => {
            return <Todo name={todo.name} />
        })}
      </div>
  )
}
