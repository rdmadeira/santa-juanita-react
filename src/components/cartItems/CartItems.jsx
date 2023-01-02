import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrices } from '../../utils/products_utils/formatPrices';
import { device } from '../../styles/media_queries/mediaQueries';
import {
  changeQuantityItem,
  deleteItemAction,
} from '../../redux/cart/cartActions';

const MyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  align-items: flex-start;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
`;

const MyCartContent = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: var(--snow);
  width: 95%;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5vw 2vw;
  row-gap: 10px;
  font-size: min(max(2vw, 12px), 20px);
  @media ${device.tablet} {
    width: 80%;
  }
`;
const MyCartShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #3c1d2fb0;
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

const MyCart = ({ hidden, setHidden }) => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_USER_CART', payload: cartItems });
  }, [cartItems]);

  const changeQuantity = (string, cartItem) => {
    dispatch(changeQuantityItem(string, cartItem));
  };

  const deleteItem = (cartItem) => {
    dispatch(deleteItemAction(cartItem));
  };

  /* dispatch({ type: 'RESET' }); */
  return (
    <>
      <MyCartContainer hidden={hidden}>
        <MyCartShadow onClick={() => setHidden(!hidden)} />
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
              <CartItem> ? </CartItem>
            </CartItems>
          ) : (
            <CartItem>No items</CartItem>
          )}
          {cartItems.length > 0 && (
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
          )}
        </MyCartContent>
      </MyCartContainer>
    </>
  );
};

export default MyCart;
