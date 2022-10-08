import styled from "styled-components";

export const ContainerTechs = styled.ul`
  font-family: "IBM Plex Sans", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Nunito", sans-serif;
  font-family: "Poppins", sans-serif;
  display: flex;
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
`;
export const ItemList = styled.li`
  list-style: none;
`;
