import { useState } from "react";
import { Header } from "./header";
import { ModalWindow } from "./modal-window";
import { Button } from "./ui/button";
import todos from "./../store/todos";
import { TodoList } from "./todo-list";
import { TodoDetails } from "./todo-details";
import * as S from "./styled";
import { ThemeProvider } from "styled-components";
import themeStore from "../store/theme-store";
import { observer } from "mobx-react-lite";
import { darkTheme, lightTheme } from "../styles/theme";

const App = observer(() => {
  const [isOpen, setIsOpen] = useState(false);

  const modalWindowToggler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  return (
    <ThemeProvider
      theme={themeStore.theme === "light" ? lightTheme : darkTheme}
    >
      <S.Main>
        <S.LeftWrapper>
          <Header modalToggler={modalWindowToggler} $isOpenModal={isOpen} />

          {isOpen && (
            <ModalWindow modalTogger={modalWindowToggler}>
              <Button onClick={() => todos.addTask()}>Добавить</Button>
            </ModalWindow>
          )}

          <TodoList />
        </S.LeftWrapper>

        <TodoDetails />
      </S.Main>
    </ThemeProvider>
  );
});

export default App;
