import styled from "styled-components";

export const NameTech = styled.span`
  display: none;
  color: #bab8b5;
  font-size: 0.7em;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 1em;
  }
`;
export const BoxTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
`;
export const ImgTech = styled.img`
  width: 50px;
  margin: 10px;
  order: 1;
  margin-top: 10px;

  :hover ~ ${NameTech} {
    display: block;
    z-index: -1;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    width: 80px;
  }
`;
