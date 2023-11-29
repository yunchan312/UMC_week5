import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavContainer = styled.div`
  background-color: #38598b;
  display: grid;
  grid-template-columns: 1fr 5fr;
  position: fixed;
  width: 100vw;
  top: -7px;
  z-index: 85;
  padding-left: 5%;
`;

const Name = styled.div`
  font-size: 2em;
  height: 2em;
  font-weight: 900;
  color: #e7eaf6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 8fr;
`;

const Item = styled.div`
  font-size: 1em;
  text-align: center;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
  margin-left: 2em;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
const LoginButton = styled.button`
  background-color: white;
  min-width: 5em;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
`;
const LoginMessage = styled.div`
  color: white;
  font-weight: 700;
`;

export function Nav({ loginStatus, isLogin, userName }) {
  const navigate = useNavigate();
  const handleClick = (param) => {
    navigate(`/${param}`);
  };
  const toLoginClick = () => {
    navigate("/login");
  };
  const toLogoutClick = () => {
    navigate("/");
    loginStatus(false);
  };
  return (
    <>
      <NavContainer>
        <Name onClick={() => handleClick("")}>MOVIES</Name>
        <Items>
          <Item onClick={() => handleClick("movies")}>영화 </Item>
          <Item onClick={() => handleClick("TV")}>TV프로그램 </Item>
          <Item onClick={() => handleClick("celebrity")}>인물 </Item>
          <LoginWrapper>
            {isLogin ? (
              <>
                <LoginButton onClick={toLogoutClick}>로그아웃</LoginButton>
                <LoginMessage>{`${userName}`}님, 환영합니다!</LoginMessage>
              </>
            ) : (
              <>
                <LoginButton onClick={toLoginClick}>로그인</LoginButton>
                <LoginMessage>로그인 해주세요!</LoginMessage>
              </>
            )}
          </LoginWrapper>
        </Items>
      </NavContainer>
    </>
  );
}
