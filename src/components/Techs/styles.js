import styled from "styled-components";

export const ContainerTechs = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  padding: 10px;
  margin-top: 100px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    gap: 5px;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 80%;
  }
`;
export const ItemList = styled.li`
  list-style: none;
`;
