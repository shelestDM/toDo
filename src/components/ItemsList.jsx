import { styled } from "styled-components";
import Item from "./Item";

const items = [
    {title: 'One', price: 10, id:1},
    {title: 'Two', price: 11,id:2},
    {title: 'Three', price: 20,id:3},
    {title: 'Four', price: 4,id:4},

]
const CustomList = styled.ul`
    list-style: none;
    margin-top: 60px;
`

const ItemsList = () => {
    return ( 
        <CustomList>
            {
                items.map((item)=>
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                )
            }
        </CustomList>
     );
}
 
export default ItemsList;