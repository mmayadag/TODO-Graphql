import { FC, ReactNode } from "react";
import styled from "styled-components";


const StyledDescription = styled.div`
    width: 100%;
    height: 20px;
    margin: 6px 30px 14px 0;
    font-family: MarkProBook;
    font-size: 16px;
    color: #a1a4ad;
`;


type DescriptionProps = {
    children: ReactNode;
}

const Description: FC<DescriptionProps> = ({ children }) => <StyledDescription>{children}</StyledDescription>;

export default Description;
