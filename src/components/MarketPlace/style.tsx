import styled from "styled-components";

export const MarketContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardsContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 16px;
  text-align: center;
  background: #ddd;
`;

export const ProductLabel = styled.h1`
    margin: 10px 0 5px;
    font-size: 20px;
`;

export const DetailsTextWrapper = styled.div``;

export const DetailsText = styled.span``;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`;

export const CardButton = styled.button`
    width: 40%;
`;

export const ModalOutside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`;

export const ModalInside = styled.div`
    background: #bbb;
    padding: 32px;
`;

export const ModalContent = styled.div``;
