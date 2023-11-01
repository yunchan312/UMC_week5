import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 10em;
  margin-top: 2%;
  font-weight: 700;
  color: white;
`;

export function NotFound() {
  return (
    <Container>
      <Text>NotFound</Text>
    </Container>
  );
}
