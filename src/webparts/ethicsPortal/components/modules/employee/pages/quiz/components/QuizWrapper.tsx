import * as React from "react";
import styled from "styled-components";
import { QuizTime } from "./QuizTime";

type Props = {};

export const QuizWrapper = ({ children }) => {
  return (
    <QuizWrapperContainer>
      <QuizTime />
      {children}
    </QuizWrapperContainer>
  );
};

const QuizWrapperContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 5px solid #ffcc00;
  padding: 3rem;
  margin-top: 20px;
  box-sizing: border-box;
  position: relative;
`;
