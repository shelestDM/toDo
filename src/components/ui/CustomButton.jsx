const CustomButton = ({isDisabled, onClickHandler, buttonTitle, id}) => {
    
    return ( 
        <button
        id={id}
        onClick={onClickHandler}
        disabled={isDisabled}
        className="rounded-xl px-4 py-3 bg-black text-white disabled:opacity-20"
        type="submit"
      >
        {buttonTitle}
      </button>
     );
}
 
export default CustomButton;