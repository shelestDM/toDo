import { useDispatch } from "react-redux";
import { switchFilterParam } from "../../slices/filterSlice";
import CustomButton from "../ui/CustomButton";


const FilterBar = () => {

  const dispatch = useDispatch();

  const onClickHandler = (e) =>{
    dispatch(switchFilterParam(e.target.id))
  }

  const buttonsArr = [
    {id: "all", onClickHandler, buttonTitle:"All", isDisabled: false },
    {id: "in_progress", onClickHandler, buttonTitle:"In progress", isDisabled: false },
    {id: "completed", onClickHandler, buttonTitle:"Completed", isDisabled: false },
  ]

  return (
    <>
    <h2 className="mt-8 mb-5 font-medium text-xl text-center">You can filter note by next parameters</h2>
    <ul className="text-sm mx-auto rounded-md text-white flex items-center justify-between ">
      {buttonsArr.map(button=>
        <li key={button.id}>
          <CustomButton id={button.id} buttonTitle={button.buttonTitle} onClickHandler={button.onClickHandler} isDisabled={button.isDisabled}/>
        </li>
        )}
    </ul>
    </>
  );
};

export default FilterBar;
