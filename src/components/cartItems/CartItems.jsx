import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrices } from '../../utils/products_utils/formatPrices';
import { device } from '../../styles/media_queries/mediaQueries';
import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import {
  changeQuantityItem,
  deleteItemAction,
} from '../../redux/cart/cartActions';
import * as hiddenCartActions from '../../redux/hiddenSignUp/hiddenSignUpContactActions';
import * as userActions from '../../redux/user/userActions';
/* import * as ordersActions from '../../redux/orders/ordersActions'; */
import * as cartActions from '../../redux/cart/cartActions';
import { decrementStocktoDatabase } from '../../firebase/firebase_utils';
import { updateUserOrdersToStoreAndDatabase } from '../../firebase/firebase_auth/auth_utils';
// import { decrementStock } from '../../redux/stock/stockActions';

const MyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  align-items: flex-start;
  justify-content: center;
  z-index: 999;
`;

const MyCartContent = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: var(--snow);
  width: 95%;
  max-height: 80%;
  overflow-y: auto;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5vw 2vw;
  row-gap: 3vw;
  font-size: min(max(2vw, 12px), 20px);
  @media ${device.tablet} {
    width: 80%;
  }
`;
const MyCartShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 200%;
  background: #3c1d2fb0;
  cursor: pointer;
`;

const CartLogo = styled.img`
  width: 8%;
`;

const CartItems = styled.div`
  border: var(--opera-mauve) solid 1.5px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 2fr 2fr;
  width: 95%;
`;

const CartItem = styled.div`
  /*   border: 1px var(--opera-mauve) solid;
 */
  padding: 5px 10px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const DeleteLogo = styled.img`
  width: 20px;
  cursor: pointer;
`;

const ChangeQtyButton = styled.div`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) =>
    disabled ? 'transparent' : 'var(--lavender-blush)'};
  padding: 5px;
  border-radius: 5px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ disabled }) => disabled && 'opacity: 0.2'}
`;

/* const ButtonSpinner = () => {
  return <CircularProgress isIndeterminate size="15px" />;
}; */

const MyCartItems = ({ hidden }) => {
  const cartItems = useSelector((store) => store.cart);
  const stock = useSelector((store) => store.stock);
  const user = useSelector((store) => store.user);

  const [isLoading, setisLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.setUserCart(cartItems));

    return () => {
      setisLoading(false);
    };
  }, [cartItems, dispatch]);

  const changeQuantity = (string, cartItem) => {
    dispatch(changeQuantityItem(string, cartItem));
  };

  const deleteItem = (cartItem) => {
    dispatch(deleteItemAction(cartItem));
  };

  const goToPayment = () => {
    setisLoading(true);

    decrementStocktoDatabase(cartItems, stock);
    /* dispatch(hiddenCartActions.toggleCart());
    dispatch(cartActions.cartReset());
    dispatch(userActions.setUserCart([])); */

    updateUserOrdersToStoreAndDatabase(
      user,
      cartItems,
      dispatch,
      {
        createOrder: userActions.createOrderSuccess,
        toggleCart: hiddenCartActions.toggleCart,
        cartReset: cartActions.cartReset,
        setUserCart: userActions.setUserCart,
      },
      setIsSubmitted,
      navigate
    );
  };

  return (
    <>
      <MyCartContainer hidden={hidden}>
        <MyCartShadow
          onClick={() => dispatch(hiddenCartActions.toggleCart())}
        />
        <MyCartContent>
          <CartLogo
            src={process.env.PUBLIC_URL + '/assets/shopping-cart-icon.png'}
          />
          {cartItems.length > 0 ? (
            <CartItems style={{ borderBottom: '1px solid var(--opera-mauve)' }}>
              <CartItem>Producto</CartItem>
              <CartItem>$</CartItem>
              <CartItem>Cant.</CartItem>
              <CartItem>Sub-total</CartItem>
              <CartItem>Change ?</CartItem>
            </CartItems>
          ) : (
            <CartItem>No items</CartItem>
          )}
          {cartItems.length > 0 && (
            <>
              <CartItems>
                {cartItems.map((cartItem) => (
                  <>
                    <CartItem key={cartItem.name + cartItem.size}>
                      {cartItem.type === 'vela'
                        ? cartItem.name + ' - ' + cartItem.size
                        : cartItem.name}
                    </CartItem>
                    <CartItem key={cartItem.price}>
                      {formatPrices(cartItem.price)}
                    </CartItem>
                    <CartItem key={cartItem.quantity}>
                      {cartItem.quantity}
                    </CartItem>
                    <CartItem key={cartItem.price + cartItem.quantity}>
                      {formatPrices(cartItem.price * cartItem.quantity)}
                    </CartItem>
                    <CartItem key={cartItem.name + cartItem.quantity}>
                      <ChangeQtyButton
                        onClick={() => changeQuantity('INCREMENT', cartItem)}>
                        +
                      </ChangeQtyButton>
                      <div>{cartItem.quantity}</div>
                      <ChangeQtyButton
                        onClick={() =>
                          cartItem.quantity > 1 &&
                          changeQuantity('DECREMENT', cartItem)
                        }
                        disabled={cartItem.quantity <= 1}>
                        -
                      </ChangeQtyButton>

                      <DeleteLogo
                        src={process.env.PUBLIC_URL + '/assets/delete-full.svg'}
                        onClick={() => deleteItem(cartItem)}
                      />
                    </CartItem>
                  </>
                ))}
              </CartItems>
              <CartItems>
                <CartItem>SubTotal: </CartItem>
                <CartItem>
                  {formatPrices(
                    cartItems.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        currentValue.price * currentValue.quantity,
                      0
                    )
                  )}
                </CartItem>
              </CartItems>
              <Button
                variant="santaJuanita"
                onClick={goToPayment}
                isLoading={isLoading && !isSubmitted}
                loadingText="Wait..."
                rightIcon={isSubmitted ? <CheckIcon /> : null}>
                {isSubmitted ? '' : 'Pagar'}
              </Button>
              {!(isSubmitted === null) && (
                <Alert status={isSubmitted ? 'success' : 'error'}>
                  <AlertIcon />
                  <AlertTitle>
                    {isSubmitted ? 'Gracias por su pedido' : 'Error'}
                  </AlertTitle>
                  <AlertDescription>
                    {isSubmitted ? 'Enviado con sucesso!' : 'Pedido no enviado'}
                  </AlertDescription>
                </Alert>
              )}
              {isSubmitted && (
                <CircularProgress
                  isIndeterminate
                  thickness="6px"
                  size="70px"
                  color="pink">
                  <CircularProgressLabel>
                    Redireccionando a Ordenes
                  </CircularProgressLabel>
                </CircularProgress>
              )}
            </>
          )}
        </MyCartContent>
      </MyCartContainer>
    </>
  );
};

export default MyCartItems;
