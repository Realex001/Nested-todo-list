import { observer } from "mobx-react-lite";
import { TodoItemProps } from "./types";
import { useState } from "react";
import { ModalWindow } from "../modal-window";
import { Button } from "../ui/button";
import todos from "./../../store/todos";
import { AddIcon, ArrowIcon, DeleteIcon } from "../ui/icons";
import { Checkbox } from "../ui/checkbox";
import * as S from "./styled";
import { useTheme } from "styled-components";

export const TodoItem = observer(
  ({ todoItem, checkboxHeightAndWidth, isSubTask }: TodoItemProps) => {
    const { id, title, isCompleted, subTasks } = todoItem;
    const [isModalShown, setIsModalShown] = useState(false);
    const [isSubTasksShown, setIsSubTasksShown] = useState(false);
    const theme = useTheme();
    const iconColor = theme.iconColor;

    function modalWindowToggler() {
      setIsModalShown((prevModalState) => !prevModalState);
    }

    function subTasksToggler() {
      setIsSubTasksShown((prevSubTasks) => !prevSubTasks);
    }

    return (
      <S.TodoItem $isSubTasksShown={isSubTasksShown} $isSub={isSubTask}>
        {isModalShown && (
          <ModalWindow modalTogger={modalWindowToggler}>
            <Button onClick={() => todos.addSubtask(id)}>Добавить</Button>
          </ModalWindow>
        )}

        <S.Task>
          <S.FlexWrapper>
            <S.ArrowWrapper
              $isSubTasksShown={isSubTasksShown}
              onClick={subTasksToggler}
            >
              <ArrowIcon color={iconColor} />
            </S.ArrowWrapper>

            <Checkbox
              $widthAndHeight={checkboxHeightAndWidth ?? 20}
              id={id}
              checked={isCompleted}
              onChange={() => todos.completeToggler(id)}
            />

            <S.TaskTitle onClick={() => todos.chooseTask(id)}>
              {title}
            </S.TaskTitle>
          </S.FlexWrapper>

          <S.FlexWrapper>
            <S.AddIconWrapper onClick={modalWindowToggler}>
              <AddIcon color={iconColor} />
            </S.AddIconWrapper>

            <S.DelIconWrapper onClick={() => todos.removeTask(id)}>
              <DeleteIcon color={iconColor} />
            </S.DelIconWrapper>
          </S.FlexWrapper>
        </S.Task>

        {isSubTasksShown && subTasks && subTasks.length > 0 && (
          <S.SubTask>
            {subTasks.map((subTask) => (
              <TodoItem
                isSubTask={true}
                key={subTask.id}
                todoItem={subTask}
                checkboxHeightAndWidth={16}
              />
            ))}
          </S.SubTask>
        )}
      </S.TodoItem>
    );
  }
);
