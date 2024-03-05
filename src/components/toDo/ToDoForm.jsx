import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../slices/toDoSlice";
import CustomButton from "../ui/CustomButton";

const NoteForm = () => {
  const dispatch = useDispatch();

  let [todo, setToDo] = useState("");
  let [isInputTouched, setIsInputTouched] = useState(false);

  let requiredLength = 3;
  let isValidationSuccessful = todo.length >= requiredLength;

  const onChangeHandler = (e) => {
    setToDo(e.target.value);
    setIsInputTouched(false);
  };

  const addNewToDo = (e) => {
    e.preventDefault();
    if (isValidationSuccessful) {
      let newToDo = {
        todo_title: todo,
        id: new Date().getTime(),
        is_completed: false,
      };
      dispatch(addToDo(newToDo));
      setToDo("");
      setIsInputTouched(false);
    }
  };

  const onBlurHandler = () => {
    setIsInputTouched(true);
  };

  let inputHasError = !isValidationSuccessful && isInputTouched;

  let errorMessage = inputHasError
    ? "The length of the todo must be greater than 3 characters"
    : "";

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={todo}
        placeholder="Enter the note"
        className="border border-gray-200 rounded-xl px-4 py-3 focus:border-gray-400 focus:shadow-lg"
        type="text"
      />
      <div className="text-[10px] text-red-500 text-center h-[15px]">
        {inputHasError && <p className="animate-slow_appear">{errorMessage}</p>}
      </div>
      <CustomButton
        id={"add_new_todo"}
        buttonTitle={"Add Note"}
        onClickHandler={addNewToDo}
        isDisabled={!isValidationSuccessful}
      />
    </form>
  );
};

export default NoteForm;
