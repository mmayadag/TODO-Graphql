import { FC } from "react";
import CheckmarkSVG from "@/assets/checkmark.svg";

import styled from "styled-components";


const CheckmarkIconContainer = styled.span<{ isChecked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 5px 3px 4px;
    border-radius: 4px;
    background-color: ${props => props.isChecked ? '#4a77e5' : '#fff'};
    box-sizing: border-box;
    margin-right: 14px;
    img {
        width: 12px;
        height: 9px;
    }
    ${props => !props.isChecked &&
        `
        border-radius: 4px;
        border: solid 1px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        `
    }
`;

type CheckmarkIconProps = {
    isChecked: boolean;
}

const CheckmarkIcon: FC<CheckmarkIconProps> = ({ isChecked = false }) => <CheckmarkIconContainer isChecked={isChecked}>
    {isChecked && <img src={CheckmarkSVG} alt="checkmark" />}
</CheckmarkIconContainer>

export default CheckmarkIcon;

