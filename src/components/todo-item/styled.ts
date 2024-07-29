import styled from "styled-components";

export const TodoItem = styled.div<{
  $isSubTasksShown: boolean;
  $isSub: boolean;
}>`
  background: ${(props) =>
    props.$isSubTasksShown
      ? props.theme.backgroundAccent
      : props.theme.backgroundColor};

  background: ${(props) => (props.$isSub ? props.theme.backgroundAccent : "")};
`;

export const ArrowWrapper = styled.div<{ $isSubTasksShown: boolean }>`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s ease-in;
  transform: ${(props) =>
    props.$isSubTasksShown ? "rotate(-90deg)" : "rotate(0deg)"};
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const TaskTitle = styled.h3`
  margin: 0 15px;
  cursor: pointer;
`;

export const AddIconWrapper = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const DelIconWrapper = styled.div`
  margin-top: 5px;
  margin-right: 15px;
  cursor: pointer;
`;

export const SubTask = styled.div`
  margin-left: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
