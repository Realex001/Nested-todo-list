import styled from "styled-components";

export const Modal = styled.div`
  width: 280px;
  padding: 15px;
  background: ${(props) => props.theme.backgroundModal};
  border-radius: 8px;
  margin-left: 10px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
