import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/generateMarket";

const MarketPlace: React.FC = () => {
  const products: undefined | Array<ProductType> = useSelector(
    ({ location: { current } }: RootState) => current.availableProduct
  );
  
  return (
    <div>
      {products &&
        products.map((product: ProductType, index: number) => (
          <div key={index} style={{ textAlign: "center" }}>
            <span>{`${product.name} = ${product.quantity}`}</span>
          </div>
        ))}
    </div>
  );
};

export default MarketPlace;
