export default function Goods(props) {

    return(
        <div className="goods-block">
            <img src={props.obj['image']} alt=""/>
            <p>{props.obj['title']}</p>
            <p>{props.obj['cost']}</p>
            <button className="add-to-cart" data-key={props.obj['articul']}>Add to cart</button>
        </div>
    )
}