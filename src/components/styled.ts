import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  padding: 10px 20px;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;

export const LeftWrapper = styled.div`
  min-width: 50vw;
`;
