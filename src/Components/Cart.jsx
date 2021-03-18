export default function Cart(props) {
    let sumCart = Object.keys(props.cart).map(i => props.goodObj[i]['cost'] * props.cart[i]);
    let sum = sumCart.reduce((acc, item) => {
        return acc + item;
    }, 0);

    return (
        <table>
            <tbody>
            <tr>
                <td><b>Product name</b>&ensp;</td>
                <td><b>Price for 1 kg</b>&ensp;</td>
                <td><b>Quantity</b>&ensp;</td>
                <td><b>Cost</b>&ensp;</td>
                <td><b>Reduce </b>&ensp;</td>
                <td><b>Delete </b>&ensp;</td>
                <td><b>Product photo</b>&ensp;</td>
            </tr>
            {Object.keys(props.cart).map(i =>
                <tr key={i + props.goodObj[i]['title']}>
                    <td>{props.goodObj[i]['title']}</td>
                    <td>{props.goodObj[i]['cost']}</td>
                    <td>{props.cart[i]}</td>
                    <td>{props.goodObj[i]['cost'] * props.cart[i]}</td>
                    <td>
                        <button className="minus-good" data-key={props.goodObj[i]['articul']}>-</button>
                    </td>
                    <td>
                        <button className="del-good" data-key={props.goodObj[i]['articul']}> Delete</button>
                    </td>
                    <td>
                        <img src={props.goodObj[i]['image']} className="small-image" alt="images"/>
                    </td>
                </tr>)}
            <tr>
                <td>
                    <hr/>
                    Оформить заказ на: {sum}грн.
                </td>
            </tr>
            </tbody>
        </table>
    )
}