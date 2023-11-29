import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { genres } from "../api";

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

const BackdropImg = styled.img`
  margin: 2em;
`;

const MovieTitle = styled.div`
  font-weight: 700;
  font-size: 3em;
`;

const Overview = styled.div`
  width: 70%;
  overflow-y: scroll;
`;

const Average = styled.div`
  width: 0.5em;
`;

const Genres = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Genre = styled.li`
  width: 70%;
`;
const Category = styled.div`
  border-bottom: 1px solid white;
  width: 70%;
`;

export function Modal(props) {
  const navigate = useNavigate();
  const onClick = (where) => {
    navigate(`/${where}`);
  };
  const theGenre = props.genresId.map(
    (g) => g && genres.find((ggg) => ggg.id === g)
  );
  return (
    <>
      <ModalWrapper onClick={() => onClick(props.where)}>
        <BackdropImg
          src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
        />
        <Items>
          <MovieTitle>
            {props.title}
            <br />
            <Average>⭐{props.average}</Average>
          </MovieTitle>
          <Genres>
            <Category>Genre</Category>
            {theGenre.map((name) => (
              <Genre>{name.name}</Genre>
            ))}
          </Genres>
          <Overview>
            Overview
            <br />
            <hr />
            {props.overview}
          </Overview>
        </Items>
      </ModalWrapper>
    </>
  );
}
