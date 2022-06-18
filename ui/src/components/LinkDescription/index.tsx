import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLinkDescription = styled(Link)`
    display:block;
    width:100%;
    height: 18px;
    margin: 21px 135px 52px 0;
    font-family: MarkProBook;
    font-size: 14px;
    color: #1f2a4b;
    text-decoration: underline;
`;


type LinkDescriptionProps = {
    children: ReactNode;
    to: string;
}

const LinkDescription: FC<LinkDescriptionProps> = ({ children, to }) => <StyledLinkDescription to={to}>{children}</StyledLinkDescription>;

export default LinkDescription;
