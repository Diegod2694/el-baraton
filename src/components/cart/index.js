import React from 'react';
import CartItem from './CartItem';
import CartButton from './CartButton';
import './styles.scss';

const Cart = ( {
  data,
  onChangeText,
  removeCartItem,
  cleanCart
} ) => (
  <div className="Cart">
    <div className="Cart-title">
      <h2>Carrito de Compras:</h2>
    </div>
    {
      data.map( cartItem =>
        <CartItem
          key={cartItem.id}
          data={cartItem}
          onChangeText={onChangeText}
          removeCartItem={removeCartItem}
        />
      )
    }
    <br/>
    <div className="Cart-title">
      <CartButton onClick={cleanCart} />
    </div>
  </div>
)

export default Cart