import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: "Poppins", sans-serif;
  padding: 10px;
`;
export const BoxContact = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const Img = styled.img`
  width: 2rem;

  :hover {
    width: 2.1rem;
    transition: all 0.5s;
  }
`;
