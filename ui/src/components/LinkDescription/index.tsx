import { FC, ReactNode } from "react";
import styled from "styled-components";


const StyledLinkDescription = styled.a`
    display:block ;
    height: 18px;
    margin: 21px 135px 52px 0;
    font-family: MarkPro;
    font-size: 14px;
    color: #1f2a4b;
    text-decoration: underline;
`;


type LinkDescriptionProps = {
    children: ReactNode;
}

const LinkDescription: FC<LinkDescriptionProps> = ({ children }) => <StyledLinkDescription>{children}</StyledLinkDescription>;

export default LinkDescription;
