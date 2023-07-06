import { styled } from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/item-slice";

const CustomItem = styled.div`
    border-radius: 10px;
    width: 75%;
    margin: 15px auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:20px;
    background: #f583a9;
    color: white;
`

const Item = (props) => {

    const { title, price, id } = props.item;

    const dispatchFunc = useDispatch();

    const addItemHandler = () => {
        dispatchFunc(itemsAction.addItem({
            id, title, price
        }))
    };


    return (
        <CustomItem>
            <p>{title}</p>
            <p>{price}$</p>
            <Button onClickHandler={addItemHandler} title="Buy!" />
        </CustomItem>
    );
}

export default Item;

    // const dispatchFunc = useDispatch();

    // const addItemHandler = () =>{
    //     dispatchFunc(itemActions.addItem({
    //         id,
    //         title,
    //         price
    //     }));
    // };