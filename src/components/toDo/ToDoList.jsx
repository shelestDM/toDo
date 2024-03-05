import { useSelector } from "react-redux";
import TodoItem from "./ToDoItem";
import {selectToDosByFilter} from "../../selector/filteredToDoSelector";

const ToDoList = () => {
    const toDos = useSelector(selectToDosByFilter);
console.log(!!toDos.length);

    if(!toDos.length){
        return (
        <div className="animate-slow_appear font-medium text-lg text-center">
            No ToDos was found :(    
        </div>
        )
    }

    return ( 
        <>
            <h3 className="text-center text-xl font-medium my-5">List of My toDos</h3>
            <ul className="flex flex-col gap-5">
                {toDos.map(todo=>
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id}
                        todo_title={todo.todo_title}
                        is_completed={todo.is_completed}
                    />
                )}
            </ul>
        </>
     );
}
 
export default ToDoList;