import { styled } from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/item-slice";

const CustomBusketItem = styled.div`
    width: 90%;
    margin: 10px auto;
    padding: 20px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;

`

const BusketItem = (props) => {
    const { title, totalPrice, count, id, price } = props.item;

    const dispatchFunc = useDispatch();

    const addItemHandler = () => {
        dispatchFunc(itemsAction.addItem({
            id, price, title
        }))
    };

    const removeItemHandler = () => {
        dispatchFunc(itemsAction.removeItem(id))    
    }

    return (
        <CustomBusketItem>
            <p>{title}</p>
            <p>{totalPrice}$</p>
            <p>x: {count}</p>
            <Button onClickHandler={removeItemHandler} title="-" />
            <Button onClickHandler={addItemHandler} title="+" />
        </CustomBusketItem>
    );
}

export default BusketItem;