import { FC } from "react";
import styled from "styled-components";


const StyledTextInput = styled.input`
    width: 100%;
    margin: 29px 0 0 0;
    border: 0;
    border-bottom: solid 1px #e1e1e1;
    font-family: MarkProBook;
    font-size: 16px;
    color: #a1a4ad;
    padding-bottom: 10px;
    box-sizing: border-box;
    ::-webkit-input-placeholder {
        color: #a1a4ad;
    }
    :focus::-webkit-input-placeholder {
        color: #1f2a4b;
    }
    :focus{
        border-bottom: solid 1px #4a77e5;
        outline: 0;
        color: #1f2a4b;
    }
`;


type TextInputProps = {
    placeholder: string;
    type: "text" | "email" | "password";
}

const TextInput: FC<TextInputProps> = ({ placeholder, type = "text" }) => <StyledTextInput type={type} placeholder={placeholder} />;

export default TextInput;
