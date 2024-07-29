import styled from "styled-components";

export const TextArea = styled.textarea`
  min-height: 140px;
  width: 250px;
  padding: 10px 14px;
  margin-bottom: 12px;
  border: 1px solid rgb(28, 100, 242);
  outline: none;
  border-radius: 8px;
  background: rgb(245, 246, 247);
  color: rgb(14, 12, 21);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  &::placeholder {
    color: rgb(173, 184, 192);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colorModal};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;
