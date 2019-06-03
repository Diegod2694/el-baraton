import React, { Component } from "react";
import CustomNavbar from './components/custom-navbar';
import Products from './components/products'
import Cart from './components/cart'

import './App.scss';
import categories from './mock-data/categories'
import products from './mock-data/products'

class App extends Component {
  state = {
    selectedId: null,
    cartItems: {},
    cartCleaned: false,
  }

  selectId = ( id ) => {
    this.setState( {
      selectedId: id,
    } )
  }

  filterProductById = ( data ) => {
    const { selectedId } = this.state
    if ( !selectedId ) return []
    return data.filter( e => e.sublevel_id === selectedId )
  }

  addToCart = ( cartItem ) => {
    const cartItemsArr = Object.values(this.state.cartItems)
    const savedCartItem = cartItemsArr.filter( e => e.id === cartItem.id )
    const cartItems = {
      ...this.state.cartItems,
        [cartItem.id]: {
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
        quantity: savedCartItem[0] ? savedCartItem[0].quantity + 1 : 1
      },
    }
    this.setState({
      cartItems,
    })
  }

  removeCartItem = (id) => {
    console.log( 'App.js > removeCartItem > id', id )
  }

  cleanCart = () => {
    console.log('cleanCart')
    this.setState({
      cartItems: {},
      cartCleaned: true,
    })
  }

  onChangeText = id => event => {
    const cartItems = {
      ...this.state.cartItems,
      [id]: {
        ...this.state.cartItems[id],
        quantity: event.target.value,
      }
    }
    this.setState({
      cartItems
    })
  }

  render() {
    const { cartItems, cartCleaned } = this.state;
    const { categories: categoriesData } = categories
    const { products: productsData } = products
    console.log( 'App.js > render > cartItems', cartItems );
    
    return(
      <div className="App debug-box">
        <CustomNavbar selectId={this.selectId} categories={categoriesData} />
        <Products addToCart={this.addToCart} data={this.filterProductById(productsData)}/>
        {
          Object.values(cartItems).length > 0
            && (
              <Cart
                data={Object.values(cartItems)}
                removeCartItem={this.removeCartItem}
                onChangeText={this.onChangeText}
                cleanCart={this.cleanCart}
                cartCleaned={cartCleaned}
              />
            )
        }
      </div>
    )
  }
}

export default App;