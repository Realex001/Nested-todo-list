import styled from "styled-components";
import { HeaderProps } from "./types";

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 46px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const AddTaskWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

export const AddIconWrapper = styled.div<HeaderProps>`
  width: 22px;
  height: 22px;
  transition: all 0.1s ease-in;
  transform: ${(props) =>
    props.$isOpenModal ? "rotate(45deg)" : "rotate(0deg)"};
  margin-left: ${(props) => (props.$isOpenModal ? "-3px" : "0")};
`;
