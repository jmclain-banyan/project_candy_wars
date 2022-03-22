import React from "react";
import { ProductType } from "../../utils/generateMarket";
import { ModalOutside, ModalInside, ModalContent } from "./style";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: string;
  product: ProductType | null;
};

const ProductModal: React.FC<ModalProps> = ({
  product,
  isOpen,
  // setIsOpen,
  actionType,
}) => {
  return isOpen && product ? (
    <ModalOutside>
      <ModalInside>
        <ModalContent>
          {`${actionType} ${product?.name}`}
          <div>
            <button>up</button>
            <input type="num" />
            <button>down</button>
          </div>
          <button>{actionType}</button>
        </ModalContent>
      </ModalInside>
    </ModalOutside>
  ) : null;
};

export default ProductModal;
