import {Table, Button} from "react-bootstrap";

export default function Cart(props) {
    let sumCart = Object.keys(props.cart).map(i => props.goodObj[i]['cost'] * props.cart[i]);
    let sum = sumCart.reduce((acc, item) => {
        return acc + item;
    }, 0);

    return (
        <div>
            <Table striped bordered hover variant="light" className="text-center">
                <thead>
                <tr>
                    <td>Product name</td>
                    <td>Price for 1 kg</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                    <td>Reduce </td>
                    <td>Delete </td>
                    <td>Product photo</td>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.cart).map(i =>
                    <tr key={i + props.goodObj[i]['title']}>
                        <td>{props.goodObj[i]['title']}</td>
                        <td>{props.goodObj[i]['cost']}</td>
                        <td>{props.cart[i]}</td>
                        <td>{props.goodObj[i]['cost'] * props.cart[i]}</td>
                        <td>
                            <Button className="minus-good" variant="primary" data-key={props.goodObj[i]['articul']}> - </Button>
                        </td>
                        <td>
                            <Button className="del-good" variant="primary" data-key={props.goodObj[i]['articul']}> Delete</Button>
                        </td>
                        <td>
                            <img src={props.goodObj[i]['image']} style={{maxWidth: '30px'}} alt="images"/>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            <h6>Place an order for: {sum} UAH</h6>
        </div>

    )
}