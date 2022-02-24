import React, { Component } from 'react'
import "./Product.css"

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];


class Product extends Component {

    state = {
        cart: [],
        total: 0
    }

    addItem = (product) => {
        this.setState({
            cart: [...this.state.cart, product.name],
            total: this.state.total + product.price
        })
    }
    // add = (product) => {
    //     this.setState(state => ({
    //       cart: [...state.cart, product.name],
    //       total: state.total + product.price
    //     }))
    //   }

    remove = (product) => {
        // let filteredCart = this.state.cart.filter(item=>item !== product.name);

        let newCart = this.state.cart;
        let where = newCart.indexOf(product.name);
        // console.log(where)
        if(where < 0) {
            return;
        }
        newCart.splice(where , 1);
        this.setState({
            cart: newCart,
            total: this.state.total - product.price
        })
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }


    render() {
        console.log(this.state)
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                {/* <div>Total: {this.state.total.toLocaleString(undefined, this.currencyOptions)}</div> */}
                <div>Total: {this.getTotal()}</div>
                <div>
                    {products.map((item, index) => (
                        <div key={index}>
                            <div className="product">
                                <span role="img" aria-label={item.name}>{item.emoji}</span>
                            </div>
                            <button onClick={()=>this.addItem(item)} >Add</button>
                            <button onClick={()=>this.remove(item)} >Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Product