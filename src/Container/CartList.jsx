import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {minus, delet, selectCart} from '../store/cartSlice';
import Cart from '../Components/Cart'

export default function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const goodObj = goods.reduce((acc, item) => {
        acc[item['articul']] = item;
        return acc;
    }, {});

    let clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        switch (t.classList.value) {
            case 'minus-good':
                dispatch(minus(t.getAttribute('data-key')));
                break;
            case 'del-good':
                dispatch(delet(t.getAttribute('data-key')));
                break;
            default:
                return true;
        }
    };

    let showCart;
    if (Object.keys(cart).length !== 0) {
        showCart = <Cart cart={cart} goodObj={goodObj}/>
    } else showCart = <h3> Корзина пуста</h3>;

    return (
        <>
            <div onClick={clickHandler}>
                {showCart}
            </div>
        </>
    )
}