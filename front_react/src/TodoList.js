import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle })=> {
    return (
        <div className="TodoList">
          {
            todos.result
            ? todos.result.map((todo)=> {
              return (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
              )
            })
            : null
          }  
    
        </div>
      );
    
}

export default TodoList;