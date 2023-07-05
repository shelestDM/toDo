import styled from 'styled-components'
import Button from './Button';

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
`;

const Nav = () => {
    return ( 
    <CustomNav>
        Redux
        <Button title="Show busket"/>
    </CustomNav>
    );
}
 
export default Nav;