import styled from "styled-components";
import { Card } from "../Components/Card";
import { movies } from "../api";
import { Modal } from "../Components/Modal";
import { useMatch } from "react-router-dom";

const CardsContainer = styled.div`
  margin-top: 20px;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export function Movies() {
  const isMatch = useMatch("movies/:id");
  const theId =
    isMatch?.params.id &&
    movies.results.find((movie) => movie.id + "" === isMatch.params.id);
  return (
    <>
      {isMatch ? (
        <Modal
          backdrop={theId.poster_path}
          title={theId.title}
          overview={theId.overview}
          average={theId.vote_average}
        />
      ) : null}
      <CardsContainer>
        {movies.results.map((movie) => (
          <Card
            id={movie.id}
            overview={movie.overview}
            title={movie.title}
            average={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </CardsContainer>
    </>
  );
}
