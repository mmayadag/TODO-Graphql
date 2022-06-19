import { FC, ReactNode } from "react";
import styled from "styled-components";


const StyledTitle = styled.div`
    width: 100%;
    height: 28px;
    margin: 25px 224px 6px 0;
    font-family: MarkPro; // FIXME: Fonts
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #1f2a4b;
    user-select: none;
`;

type TitleProps = {
    children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
