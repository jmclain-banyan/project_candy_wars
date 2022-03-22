import React, { useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";
import { MarketContainer } from "./style";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/generateMarket";

const MarketPlace: React.FC = () => {
  const products: undefined | Array<ProductType> = useSelector(
    ({ location: { current } }: RootState) => current.availableProduct
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [action, setAction] = useState<string>('');
  const [selected, setSelected] = useState<ProductType | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const targetValue: string = event.currentTarget.id;
    const actionType: string = event.currentTarget.name;
    if (products) {
      const targetProduct: ProductType = products.filter(
        (product: ProductType) => product.productId === targetValue
      )[0];
      setIsOpen(true);
      setAction(actionType);
      setSelected(targetProduct);
    }
  };

  return (
    <MarketContainer>
      {products &&
        products.map((product: ProductType, index: number) => (
          <ProductCard key={index} product={product} onClick={handleClick} />
        ))}
        <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} actionType={action} product={selected} />
    </MarketContainer>
  );
};

export default MarketPlace;
