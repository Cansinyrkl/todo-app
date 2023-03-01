import styled from "styled-components";

export const GeneralButton = styled.button`
  background: #0099ff;
  background-image: -webkit-linear-gradient(top, #0099ff, #1b3545);
  background-image: -moz-linear-gradient(top, #0099ff, #1b3545);
  background-image: -ms-linear-gradient(top, #0099ff, #1b3545);
  background-image: -o-linear-gradient(top, #0099ff, #1b3545);
  background-image: linear-gradient(to bottom, #0099ff, #1b3545);
  -webkit-border-radius: 12;
  -moz-border-radius: 12;
  border-radius: 12px;
  -webkit-box-shadow: 3px 3px 3px #000000;
  -moz-box-shadow: 3px 3px 3px #000000;
  box-shadow: 3px 3px 3px #000000;
  font-family: cursive;
  color: #000000;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
  border: solid #0f0f0f 1px;
  text-decoration: none;
  margin-top: 12px;

  &:hover {
    color: red;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
`;
export const FormContainer = styled.div`
  -webkit-box-shadow: 0px 0px 68px 0px rgb(57, 44, 57);
  padding: 20px;
  border-radius: 20px;
`;

export const TdInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 750px;
`;

export const TodoTd = styled.div`
  font-size: 20px;
  font-family: cursive;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;

  width: 500px;
  border-radius: 10px;
  margin-top: 6px;
  border: 1px solid rgb(249, 214, 251);
`;
