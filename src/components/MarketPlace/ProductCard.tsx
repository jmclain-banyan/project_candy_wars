import React, { MouseEvent } from "react";
import { ProductType } from "../../utils/generateMarket";
import {
  CardsContainer,
  ProductLabel,
  DetailsTextWrapper,
  DetailsText,
  ButtonsContainer,
  CardButton,
} from "./style";

type CardPropTypes = {
  product: ProductType;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ProductCard: React.FC<CardPropTypes> = ({ product, onClick }) => (
  <CardsContainer>
      <ProductLabel>{product.name}</ProductLabel>
      <DetailsTextWrapper>
          <DetailsText>price </DetailsText>
          <DetailsText>${product.price}</DetailsText>
      </DetailsTextWrapper>
      <DetailsTextWrapper>
          <DetailsText>available </DetailsText>
          <DetailsText>{product.quantity}</DetailsText>
      </DetailsTextWrapper>
      <ButtonsContainer>
          <CardButton name="buy" id={product.productId} onClick={onClick}>Buy</CardButton>
          <CardButton name="sell" id={product.productId} onClick={onClick}>Sell</CardButton>
      </ButtonsContainer>
  </CardsContainer>
);

export default ProductCard;
