import { styled } from "styled-components";
import { useSelector } from "react-redux";
import BusketItem from "./BusketItem";

const CustomBusket = styled.div`
    min-width: 300px;
    padding: 20px;
    border-radius: 10px;
    background: #0000aa;
    margin: 60px auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

    p{
        font-size:20px
    }
`

const Busket = () => {

    const items = useSelector(state=>state.item.items);

    return ( 
        <CustomBusket>
           {items.length 
            ?  items.map((item)=>
                <BusketItem key={item.title} item={{
                    price: item.price,
                    count: item.count,
                    totalPrice: item.totalPrice,
                    title: item.title,
                    id: item.id
                }}/>     
                )
            : <p>There arent any items :(</p>
            }
        </CustomBusket>
     );
}
 
export default Busket;