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

    let clickHandler = (event) => {
        event.preventDefault();
        let targ = event.target;
        switch (targ.classList.value) {
            case 'minus-good btn btn-primary':
                dispatch(minus(targ.getAttribute('data-key')));
                break;
            case 'del-good btn btn-primary':
                dispatch(delet(targ.getAttribute('data-key')));
                break;
            default:
                return true;
        }
    };

    let showCart;
    if (Object.keys(cart).length !== 0) {
        showCart = <Cart cart={cart} goodObj={goodObj}/>
    } else showCart = <h3>Cart is empty</h3>;

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <div onClick={clickHandler}>
                    {showCart}
                </div>
            </div>
        </div>
    )
}