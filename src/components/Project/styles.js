import styled from "styled-components";

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #001242;

  // @media screen and (min-width: 700px) and (max-width: 1240px) {
  //   font-size: 30px;
  // }
`;
export const Img = styled.img`
  border: 1px solid rgb(214, 214, 214);
  width: 80%;
  height: 80%;
  border-radius: 10px;
  filter: grayscale(1);

  :hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
export const ImgGh = styled.img`
  width: 20px;
  margin-right: 5px;
`;
export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.9em;
`;
export const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #001242;
  cursor: pointer;
  /* transform: translate(100px, 50%); */
  display: flex;
  align-items: center;
  font-weight: bold;

  :hover {
    color: #000;
  }

  @media only screen and (max-width: 600px) {
    border: 1px solid #0003;
    border-radius: 10px;
    padding: 5px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 20px;
  }
`;
