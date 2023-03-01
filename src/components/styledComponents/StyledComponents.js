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
  padding: 8px;
  border-radius: 16px;
  max-width: 100%;
  margin-top: 60px;
`;
export const AddTodo = styled.div`
  -webkit-box-shadow: 0px 0px 68px 0px rgb(57, 44, 57);
  padding: 20px;
  border-radius: 10px;
  width: 26%;
  position: absolute;
  margin-bottom: 430px;
`;
export const InInput = styled.input`
  border-radius: 20px
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
  text-align: center;

`;
export const InTodoButton = styled.button`
  border-radius: 8px
  padding: 18px;
  border-radius: 10px;
  width: 12%;
  position: absolute;
  font-size: 2px
  
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
  margin-bottom: 8px;
  border-bottom: 1px solid #566573;
`;
export const Todo = styled.div`
  position: absolute;
  border: none;
  color: white;
  font-size: 50px;
  background: transparent;
  padding: 0;
  align-items: flex-start;
  font-family: Josefin Sans;
  margin: 24px;
  user-select: none;
`;

export const ThemeButton = styled.button`
  color: white;
  position: absolute;
  margin-left: 96%;
  margin-top: 38px;
  background: transparent;
  border: none;
`;
