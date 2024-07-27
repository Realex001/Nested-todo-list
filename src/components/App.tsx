import { useState } from "react";
import { Header } from "./header";
import { ModalWindow } from "./modal-window";
import { Button } from "./ui/button";
import todos from "./../store/todos";
import { TodoList } from "./todo-list";
import { TodoDetails } from "./todo-details";
import * as S from "./styled";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalWindowToggler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  return (
    <S.Main>
      <S.LeftWrapper>
        <Header modalToggler={modalWindowToggler} $isOpenModal={isOpen} />
        {isOpen && (
          <ModalWindow modalTogger={modalWindowToggler}>
            <Button onClick={() => todos.addTask()}>Добавить задачу</Button>
          </ModalWindow>
        )}
        <TodoList />
      </S.LeftWrapper>

      <TodoDetails />
    </S.Main>
  );
}

export default App;
