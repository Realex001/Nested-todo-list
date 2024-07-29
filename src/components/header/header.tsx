import { HeaderProps } from "./types";
import * as S from "./styled";
import {
  AddIcon,
  DarkThemeIcon,
  DeleteIcon,
  LightThemeIcon,
} from "../ui/icons";
import todos from "./../../store/todos";
import themeStore from "../../store/theme-store";
import { useTheme } from "styled-components";

export function Header({ modalToggler, $isOpenModal }: HeaderProps) {
  const theme = useTheme();
  const iconColor = theme.iconColor;
  const darkIconColor = theme.colorDarkIcon;
  const lightIconColor = theme.colorLightIcon;

  function delCompleteTasks() {
    for (let id of todos.completedID) {
      todos.removeTask(id);
    }
  }

  return (
    <S.Header>
      <S.Action onClick={modalToggler}>
        <S.AddIconWrapper $isOpenModal={$isOpenModal}>
          <AddIcon width={22} height={22} color={iconColor} />
        </S.AddIconWrapper>
        Добавить задачу
      </S.Action>

      <S.Action onClick={delCompleteTasks}>
        <DeleteIcon width={23} height={22} color={iconColor} />
        Удалить выбранные
      </S.Action>

      <S.ThemesSwitсher onClick={themeStore.toggleTheme}>
        <S.LightWrapper $activeTheme={themeStore.theme}>
          <LightThemeIcon color={lightIconColor} />
        </S.LightWrapper>
        <S.DarkWrapper $activeTheme={themeStore.theme}>
          <DarkThemeIcon color={darkIconColor} />
        </S.DarkWrapper>
      </S.ThemesSwitсher>
    </S.Header>
  );
}
