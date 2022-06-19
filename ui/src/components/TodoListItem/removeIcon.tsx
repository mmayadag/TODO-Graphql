import { FC } from "react";
import RemoveSVG from "@/assets/remove.svg";

import styled from "styled-components";


const RemoveIconContainer = styled.img`
    position: absolute;
    right: 0;
    width: 11px;
    height: 11px;
`;

type RemoveIconProps = {
    onClick: () => void;
}
const RemoveIcon: FC<RemoveIconProps> = ({ onClick }) => <RemoveIconContainer className="remove" src={RemoveSVG} alt="remove" onClick={onClick} />

export default RemoveIcon;

