import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 80;
`;
const AdContainer = styled.div`
  background-color: black;
  color: white;
  display: grid;
  grid-template-rows: 3fr 1fr;
  padding: 5%;
  text-align: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubTitles = styled.div`
  font-size: 2em;
`;
const Titles = styled.div`
  font-weight: 900;
  font-size: 6em;
`;

const AdButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid white;
  border-radius: 50%;
  font-weight: 700;
  height: 5em;
  min-width: 70px;
  cursor: pointer;
  position: fixed;
  left: 95%;
  top: 85%;
`;

export function Advertise() {
  const [isAd, setIsAd] = useState(true);
  const handleOnClick = () => {
    setIsAd((prev) => !prev);
  };
  return (
    <Wrapper>
      {isAd ? (
        <>
          <AdContainer>
            <TitleWrapper>
              <SubTitles>Break The Rules!</SubTitles>
              <Titles>5th UMC</Titles>
            </TitleWrapper>
          </AdContainer>
          <AdButton onClick={handleOnClick}>가리기</AdButton>
        </>
      ) : (
        <AdButton onClick={handleOnClick}>광고보기</AdButton>
      )}
    </Wrapper>
  );
}
