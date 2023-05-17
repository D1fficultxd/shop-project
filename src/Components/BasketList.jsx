import {BasketItem} from './BasketItem'

function BasketList (props) {
    const {order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype} = props

    return   (
    <ul className="collection basket-list">
    <li  className="collection-item active">Корзина</li>
    {
        order.length ? order.map(item =>(
            <BasketItem key={item.id} removeFromBasket={removeFromBasket}{...item}
            incQuantity={incQuantity} decQuantity={decQuantity}/>
        )) : <li  className="collection-item">Корзина пуста</li>
    }
    <li  className="collection-item active">Общая стоимость:</li>
    <button className='btn-small'>Оформить заказ</button>
    <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
  </ul>
  )
        
}

export {BasketList}