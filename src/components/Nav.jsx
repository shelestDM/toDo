import styled from 'styled-components'
import Button from './Button';
import { mainActions } from '../store/main-slice';
import { useDispatch, useSelector } from 'react-redux';

const CustomNav = styled.nav`
    width:100%;
    height:60px;
    position: fixed;
    top:0;
    left:0;
    z-index:100;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    color:#BF4F74;
    background: teal;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;

    div{
        font-size:16px;
        border: 1px solid #BF4F74;
        padding: 5px;
        font-weight: bold;
        color:white;
        display: flex;
        align-items: center;
    }
`;

const Nav = () => {

    const dispathcFunc = useDispatch();
    const itemsCount = useSelector(state=>state.item.itemsCount);

    const busketVisibilityHandler = () => {
        dispathcFunc(mainActions.toggleBusket());
    };

    return ( 
    <CustomNav>
        Redux
        <div>
            Count of items {itemsCount}
            <Button onClickHandler={busketVisibilityHandler} title="Show busket"/>
        </div>
    </CustomNav>
    );
}
 
export default Nav;