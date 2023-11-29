import styled from "styled-components";
import { Tvs } from "../api";
import { useMatch } from "react-router-dom";
import { Card } from "../Components/Card";
import { Modal } from "../Components/Modal";

const CardsContainer = styled.div`
  margin-top: 20px;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export function TV() {
  const isMatch = useMatch("TV/:id");
  const theId =
    isMatch?.params.id &&
    Tvs.results.find((t) => t.id + "" === isMatch.params.id);
  console.log(theId);
  return (
    <>
      {isMatch ? (
        <Modal
          backdrop={theId.poster_path}
          title={theId.title}
          overview={theId.overview}
          average={theId.vote_average}
          genresId={theId.genre_ids}
          where={"TV"}
        />
      ) : null}
      <CardsContainer>
        {Tvs.results.map((t, key) => (
          <Card
            key={key}
            id={t.id}
            overview={t.overview}
            title={t.name}
            average={t.vote_average}
            poster={t.poster_path}
            where={"TV"}
          />
        ))}
      </CardsContainer>
    </>
  );
}
