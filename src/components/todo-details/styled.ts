import styled from "styled-components";

export const Details = styled.div`
  width: 100%;
  border-left: 2px solid rgb(255, 255, 255);
  background: ${(props) => props.theme.backgroundAccent};
  padding-left: 20px;
`;

export const DetailsTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  margin: 10px 0 25px;
`;

export const DetailsText = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
`;
