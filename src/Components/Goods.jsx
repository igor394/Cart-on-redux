import {Card, Button} from 'react-bootstrap';

export default function Goods(props) {

    return(
        <Card className="text-center" border="primary" bg="light" style={{ width: '12rem'}}>
            <Card.Header><Card.Title>{props.obj['title']}</Card.Title></Card.Header>
            <Card.Body>
                <Card.Img variant="top" style={{ maxWidth: '100px'}}  src={props.obj['image']}/>
                <Card.Title style={{ paddingTop: '20px'}} >Price</Card.Title>
                <Card.Text>{props.obj['cost']} UAH</Card.Text>
                <Button className="add-to-cart" variant="primary" data-key={props.obj['articul']}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}