import { FC } from "react";
import GroupSVG from "@/assets/group.svg";

import styled from "styled-components";


const LogoContainer = styled.div`
    width: 40px;
    height: 32px;
    margin: 0 290px 25px 0;
    display: flex;
`;

const TodoLogo: FC = () => <LogoContainer><img src={GroupSVG} alt="logo" /></LogoContainer>

export default TodoLogo;

