import { FC } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 8px 134px 8px 135px;
    border-radius: 4px;
    border: solid 1px #4a77e5;
    background-color: #4a77e5;
    font-size: 16px;
    color: #fff;
    font-family: MarkProBook;
`;


type ButtonProps = {
    title: string;
}

const Button: FC<ButtonProps> = ({ title }) => <StyledButton>{title}</StyledButton>;

export default Button;
