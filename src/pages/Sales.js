import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import ProductArticle from '../components/Productos/ProductArticle.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';
import { useDisclosure } from '@chakra-ui/react';

const Sales = () => {
  let productosType = useSelector((store) => store.productos?.sales);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();

    return () => {
      onClose();
    };
  }, []);
  return (
    <>
      <StyledMain>
        <ProductArticle
          articleContent={productosType.article}
          isOpen={isOpen}
          onClose={onClose}
        />
        <ProductosMain productos={productosType.productos} />
      </StyledMain>
    </>
  );
};

export default Sales;
