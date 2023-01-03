import styled from "styled-components";

export const ContainerProjects = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  padding: 10px;
  margin-top: 10em;

  @media only screen and (max-width: 600px) {
    margin-top: 2em;
    gap: 10px;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    gap: 20px;
    justify-content: center;
    margin-top: 5em;
  }
`;
export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 60px;
  }
`;
export const List = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const Li = styled.li`
    @media only screen and (max-width: 600px) {
        margin-bottom: 20px;
    }
`
