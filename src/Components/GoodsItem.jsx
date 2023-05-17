function GoodsItem (props){
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket  = Function.prototype
    } = props

    return   (<div className="card ">
      <div className="card-image">
        <img src={full_background} alt={name}/>
        
      </div>
      <span className="card-title">{name}</span>
      <div className="card-content">
        <p>{description}</p>
        <div className="card-action">
          <button className="btn" onClick={() => addToBasket({
            id,
            name,
            price
          })}>Купить</button>
          <span className="right">{price} руб</span>
        </div>
      </div>
  </div>)
}

export {GoodsItem}