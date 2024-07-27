import styled from "styled-components";

export const TodoItem = styled.div<{ $isSubTasksShown: boolean }>`
  background: ${(props) =>
    props.$isSubTasksShown ? "rgb(28, 100, 242)" : "rgb(14, 12, 21)"};
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

export const Task = styled.div<{ $isSub: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: ${(props) =>
    props.$isSub ? "rgb(28, 100, 242)" : "rgb(14, 12, 21)"};
`;

export const TaskTitle = styled.h3`
  margin: 0 15px;
  cursor: pointer;
`;

export const AddIconWrapper = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

export const DelIconWrapper = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

export const SubTask = styled.div`
  margin-left: 20px;
`;
