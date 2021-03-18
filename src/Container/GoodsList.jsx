import React from 'react';
import {useSelector} from "react-redux";
import {selectGoods} from "../store/goodsSlice";
import Goods from "../Components/Goods";

export default function GoodsList(){
    const goods = useSelector(selectGoods);


    return(
        <div className="goods-field">
            {goods.map(item=> <Goods obj={item} key={item.articul}/>)}
        </div>
    )

}