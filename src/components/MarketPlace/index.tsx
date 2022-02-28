import React, { useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/generateMarket";
import ProductModal from "./ProductModal";

const MarketPlace: React.FC = () => {
  const products: undefined | Array<ProductType> = useSelector(
    ({ location: { current } }: RootState) => current.availableProduct
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [action, setAction] = useState<string>('');
  const [selected, setSelected] = useState<ProductType | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
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
        <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} actionType={action} product={selected} />
    </div>
  );
};

export default MarketPlace;
