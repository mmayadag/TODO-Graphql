import { FC, ReactNode } from "react";
import styled from "styled-components";
import { TodoLogo } from '../index'

const StyledContainer = styled.div`
    width:  ${props => props.width ?? 390}px;
    min-height: ${props => props.minHeight ?? 'auto'};
    border-radius: 8px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 35px 30px;
    box-sizing: border-box;
`;

type MainContainerProps = {
    width?: number;
    minHeight?: number;
    children: ReactNode;
}
const MainContainer: FC<MainContainerProps> = ({ children, width, minHeight }) => <StyledContainer width={width} minHeight={minHeight}>
    <TodoLogo />
    {children}
</StyledContainer>;

export default MainContainer;