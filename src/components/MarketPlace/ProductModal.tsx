import React from "react";
import { ProductType } from "../../utils/generateMarket";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: string;
  product: ProductType | null;
};

const ProductModal: React.FC<ModalProps> = ({
  product,
  isOpen,
  setIsOpen,
  actionType,
}) => {

  if (isOpen) {
    return (
      <div id="outside" //onClick={() => setIsOpen(false)}
      >
        <div id="inside">
          <div id="content">
              {`${actionType} ${product?.name}`}
              <div>
                  <button>up</button>
                  <input type="num" />
                  <button>down</button>
              </div>
              <button>{actionType}</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductModal;
