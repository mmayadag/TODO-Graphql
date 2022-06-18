import { FC } from "react";
import RemoveSVG from "@/assets/remove.svg";

import styled from "styled-components";


const RemoveIconContainer = styled.img`
    position: absolute;
    right: 0;
    width: 11px;
    height: 11px;
`;
const RemoveIcon: FC = () => <RemoveIconContainer src={RemoveSVG} alt="remove" />

export default RemoveIcon;

