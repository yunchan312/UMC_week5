import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.span`
  color: white;
  margin-top: 20px;
  padding: 1%;
  margin-left: 0.2em;
  margin-right: 0.2em;
  height: 25em;
`;
const Items = styled.div`
  height: 5em;
  position: relative;
  top: -3px;
  background-color: #38598b;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MovieTitle = styled.div`
  width: 200px;
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 200px;
  height: 300px;
  padding: 3px;
  overflow-y: scroll;
  z-index: 0;
`;

export function Card(props) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/${props.where}/${props.id}`);
  };
  const whileHover = () => {
    setIsVisible(true);
  };
  const whileLeave = () => {
    setIsVisible(false);
  };
  return (
    <CardContainer
      onClick={onCardClick}
      onMouseLeave={whileLeave}
      onMouseOver={whileHover}
    >
      {isVisible ? <Overlay>{props.overview}</Overlay> : null}
      <img
        alt="poster"
        src={`https://image.tmdb.org/t/p/w200/${props.poster}`}
      />
      <Items>
        <MovieTitle>{props.title}</MovieTitle>
        <div>⭐{props.average}</div>
      </Items>
    </CardContainer>
  );
}
