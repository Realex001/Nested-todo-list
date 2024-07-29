import styled from "styled-components";
import { HeaderProps } from "./types";

export const Header = styled.header`
  margin: 15px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.div`
  padding: 0 10px;
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

export const ThemesSwitсher = styled.div`
  display: flex;
  gap: 6px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 20px;
  background: ${(props) => props.theme.backgroundSwitcher};
  cursor: pointer;
`;

export const SwitсherIconWrapper = styled.div`
  padding: 6px 8px 2px;
  border-radius: 12px;
`;

export const LightWrapper = styled(SwitсherIconWrapper)<{
  $activeTheme: "light" | "dark";
}>`
  background: ${(props) =>
    props.$activeTheme === "dark"
      ? "none"
      : props.theme.backgroundSwitcherThemes};

  border: ${(props) =>
    props.$activeTheme === "dark" ? "none" : "1px solid rgb(205, 213, 218)"};
`;

export const DarkWrapper = styled(SwitсherIconWrapper)<{
  $activeTheme: "light" | "dark";
}>`
  background: ${(props) =>
    props.$activeTheme === "light"
      ? "none"
      : props.theme.backgroundSwitcherThemes};

  border: ${(props) =>
    props.$activeTheme === "light" ? "none" : "1px solid rgb(49, 62, 98)"};
`;
