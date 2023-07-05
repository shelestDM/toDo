import styled from 'styled-components';

const CustomButton = styled.button`
    border-radius: 3px;
    border: 2px solid #BF4F74;
    background: #BF4F74;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    transition: 0.2s;
    &:active{
        transform:scale(0.9)
    }

`

const Button = ({title}) => {
    return ( 
        <CustomButton>
            {title}
        </CustomButton>
     );
}
 
export default Button;