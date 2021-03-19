import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice'
import Goods from '../Components/Goods';
import {increment} from '../store/cartSlice';

export default function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();
    let clickHendler = (event) => {
        event.preventDefault();
        let targ = event.target;
        if (!targ.classList.contains('add-to-cart')) return true;
        dispatch(increment(targ.getAttribute('data-key')))

    }

    return (
        <div className="d-flex justify-content-around" onClick={clickHendler}>
            {goods.map(item => <Goods obj={item} key={item.articul}/>)}
        </div>
    )

}