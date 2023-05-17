function Cart (props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props
    return (<div className="cart red lighten-3" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart </i>{quantity ? (<span className="cart-quantity"></span>): null} 
       
    </div>)
}

export {Cart}