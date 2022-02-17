import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/generateMarket";

const MarketPlace: React.FC = () => {
  const products: undefined | Array<ProductType> = useSelector(
    ({ location: { current } }: RootState) => current.availableProduct
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const targetValue: string = event.currentTarget.id;
    const actionType: string = event.currentTarget.name;
    if (products) {
      const targetProduct: ProductType = products.filter(
        (product: ProductType) => product.productId === targetValue
      )[0];
      console.log(actionType, targetProduct);
    }
  };

  return (
    <div>
      {products &&
        products.map((product: ProductType, index: number) => (
          <div
            key={index}
            style={{ textAlign: "center", marginBottom: "25px" }}
          >
            <span>{`${product.name} = ${product.quantity}`}</span>
            <div>
              <span>price </span>
              <span>$ {product.price}</span>
            </div>
            <div>
              <span>available </span>
              <span>{product.quantity}</span>
            </div>
            <div>
              <button name="buy" id={product.productId} onClick={handleClick}>
                buy
              </button>
              <button name="sell" id={product.productId} onClick={handleClick}>
                sell
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MarketPlace;
