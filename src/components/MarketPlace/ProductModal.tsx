import React, { useState } from "react";
import { ProductType } from "../../utils/generateMarket";
import { ModalOutside, ModalInside, ModalContent, CloseButton } from "./style";

type ModalProps = {
  // isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: string;
  product: ProductType | null;
};

const ProductModal: React.FC<ModalProps> = ({
  product,
  // isOpen,
  setIsOpen,
  actionType,
}) => {
  let [transactionAmount, setTransactionAmount] = useState<number>(0);

  const increment = (): false | void =>
    transactionAmount >= 0 && setTransactionAmount((transactionAmount += 1));

  const decrement = (): false | void =>
    transactionAmount > 0 && setTransactionAmount((transactionAmount -= 1));

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setTransactionAmount(+event.currentTarget.value);

  const submitTransaction = (type: string): void => {
    switch (type) {
      case "buy":
      case "sale":
      default:
        break;
    }
  };

  return product ? (
    <ModalOutside>
      <ModalInside>
        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
        <ModalContent>
          {`${actionType} ${product?.name} availiable = ${product?.quantity}`}
          <div>
            <button onClick={increment}>up</button>
            <input
              type="num"
              value={transactionAmount}
              onChange={onChangeHandler}
            />
            <button onClick={decrement}>down</button>
          </div>
          <button onClick={() => submitTransaction(actionType)}>
            {actionType}
          </button>
        </ModalContent>
      </ModalInside>
    </ModalOutside>
  ) : null;
};

export default ProductModal;
