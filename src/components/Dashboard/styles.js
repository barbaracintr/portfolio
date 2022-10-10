import styled from "styled-components"

export const ContainerDashboard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 20px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px){
        flex-direction: column;
    }
`
export const BoxResume = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 90%;
        text-align: center;
    }
`
export const Name = styled.span`
    letter-spacing: .3rem;
    color: grey;
    text-transform: uppercase;
    font-size: 15px;

    @media only screen and (max-width: 600px) {
        font-size: 10px;
        text-align: center;
    }
`
export const Description = styled.p`
    color: rgb(169, 169, 169);
    font-weight: 600;
    letter-spacing: .1rem;
    text-align: justify;
    line-height: 1.3;

    @media only screen and (max-width: 600px) {
        font-size: 12px;
        text-align: center;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        text-align: center;
        font-size: 22px;
    }
`
export const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        text-align: center
    }
`
export const BoxLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;

    @media only screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }
`
export const Link = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: rgb(211, 0, 95);

    :hover {
        color: #000;
        font-weight: bold;
        transform: rotate(0.5turn);
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        font-size: 30px;
    }
`
export const Photo = styled.img`
    filter: grayscale(100%);
    width: 500px;
    height: 500px;
    border-radius: 100% 200% 100% 100%;
    box-shadow: 5px 5px 23px 5px rgba(0,0,0,0.49);

    :hover {
        filter: grayscale(0);
    }

    @media only screen and (max-width: 600px) {
        width: 280px;
        height: 280px;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 700px;
        height: 700px;
    }
`