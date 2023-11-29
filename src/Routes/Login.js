import { useEffect, useState } from "react";
import styled from "styled-components";
import { getToken } from "../loginApi";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  width: 60%;
  height: 80%;
  padding: 4em;
`;
const EmailInput = styled.input`
  height: 3em;
  width: 100%;
  margin-bottom: 1em;
`;
const PassWordInput = styled.input`
  margin-bottom: 1em;
  height: 3em;
  width: 100%;
`;
const Label = styled.label`
  color: white;
  width: 70%;
  font-size: 1.2em;
`;
const Button = styled.button`
  height: 3em;
  width: 70%;
`;
const Explanation = styled.div`
  color: white;
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 2em;
`;

export function Login({ loginStatus, getUserName }) {
  const [json, setJson] = useState({});

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    getToken(setJson, e.target[0].value, e.target[1].value);
  };

  if (json?.isSuccess) {
    console.log(json);
    loginStatus(json?.isSuccess);
    getUserName(json?.result.username);
    navigate("/");
  }

  return (
    <Wrapper>
      <FormContainer onSubmit={(e) => onSubmit(e)}>
        <Explanation>아이디와 비밀번호를 입력해주세요.</Explanation>
        <Label>
          아이디
          <EmailInput type="text" required />
        </Label>
        <Label>
          비밀번호
          <PassWordInput type="password" required />
        </Label>
        <Button>SUBMIT!</Button>
      </FormContainer>
    </Wrapper>
  );
}
