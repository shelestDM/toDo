import check_icon from "../../assets/check.svg";
import { useDispatch } from "react-redux";
import { toggleToDoCompleteState } from "../../slices/toDoSlice";

const ToDoItem = ({todo_title, id, is_completed}) => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(toggleToDoCompleteState(id));
    }

    let crossedOutStyle =  is_completed ? "line-through" : "";
    let bageVisibilityStyles = is_completed ? "1" : 0;

    return ( 
        <li 
        id={id}
        style={{textDecoration: crossedOutStyle}}
        onClick={onClickHandler}
        className="animate-slow_appear border w-full border-gray-500 rounded-lg p-5 flex relative">
            {todo_title}
            <img style={{opacity: bageVisibilityStyles}} src={check_icon} alt="check_icon" className="w-[24px] p-0.5 absolute -right-2.5 -top-2.5  bg-green-500 rounded-[50%]" />
        </li>
     );
}
 
export default ToDoItem;