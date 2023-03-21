import React, { useEffect } from 'react';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import ProductArticle from '../components/Productos/ProductArticle.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';
import { useDisclosure, Progress } from '@chakra-ui/react';
import {
  getProductsFromDataBase,
  getStockFromDataBase,
} from '../firebase/firebase_utils';
import { useQuery } from 'react-query';

const Bombas = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    data: productos,
    isLoading: isLoadingProductos,
    isSuccess,
    /* error: errorProductos,
    isError: isErrorProductos, */
  } = useQuery('productos', () => getProductsFromDataBase());

  const {
    data: stock,
    /*isLoading: isLoadingStock,
     error: errorStock,
    isError: isErrorStock, */
  } = useQuery('stock', () => getStockFromDataBase());

  useEffect(() => {
    onOpen();

    return () => {
      onClose();
    };
  }, []);

  return (
    <>
      <StyledMain>
        {isLoadingProductos && (
          <Progress
            size="lg"
            isIndeterminate
            position="absolute"
            zIndex="50"
            width="100%"
            hasStripe
          />
        )}
        {isSuccess && (
          <>
            <ProductArticle
              articleContent={productos?.bombas.article}
              isOpen={isOpen}
              onClose={onClose}
            />
            <ProductosMain
              productos={productos?.bombas.productos}
              prestock={stock}
            />
          </>
        )}
      </StyledMain>
    </>
  );
};

export default Bombas;
