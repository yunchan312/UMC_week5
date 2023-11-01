import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  background-color: black;
  position: fixed;
  height: 100vh;
  z-index: 60;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 100%;
`;

const Items = styled.div`
  margin-left: 2%;
  color: white;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const BackdropImg = styled.img``;

const MovieTitle = styled.div`
  font-weight: 700;
  font-size: 3em;
`;

const Overview = styled.div`
  width: 70%;
`;

const Average = styled.div`
  width: 0.5em;
`;

export function Modal(props) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/movies");
  };
  return (
    <>
      <ModalWrapper onClick={onClick}>
        <BackdropImg
          src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
        />
        <Items>
          <MovieTitle>
            {props.title}
            <br />
            <Average>⭐{props.average}</Average>
          </MovieTitle>

          <Overview>
            <br />
            {props.overview}
          </Overview>
        </Items>
      </ModalWrapper>
    </>
  );
}
