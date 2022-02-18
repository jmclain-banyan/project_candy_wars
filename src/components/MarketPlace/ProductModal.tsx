import React, { useState, useEffect } from 'react';

type ModalProps = {
    children?: JSX.Element | JSX.Element[];
    isOpen: boolean;
}

const ProductModal: React.FC<ModalProps> = ({ children, isOpen }) => {
    const [show, setShow] = useState<boolean>(isOpen);

    const closeModal = (): void => {
        setShow(false);
    };
    
    useEffect(() => {
        const handleKeydown = (event: any) => {
            if (event.target.keyCode === 27) closeModal();
        }
        if (show) document.addEventListener('keydown', handleKeydown, false)
        return () => document.removeEventListener('keydown', handleKeydown, false)
    }, [show]);

    if (show) {
        return (
            <div id="outside" onClick={closeModal}>
            <div id="inside">
                <div id='content'>
                    {children}
                </div>
            </div>
        </div>
    )
} else {
    return null;
}
}

export default ProductModal;
