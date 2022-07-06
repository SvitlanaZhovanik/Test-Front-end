import PropTypes from 'prop-types';
import { Col, Row, Carousel, Card, Badge } from 'react-bootstrap';

export default function HistoryOrder({ products, totalPrice }) {
  return (
    <Row className="mt-4 p-0 border border-primary">
      <Col lg={5} className="p-0">
        <Carousel>
          {products.map(({ _id, name, image, description, price, amount }) => {
            return (
              <Carousel.Item
                key={_id}
                style={{
                  height: '250px',
                  width: '100%',
                  backgroundImage: `linear-gradient(rgba(245, 245, 248, 0.507),rgba(4, 4, 5, 0.904)),url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <Carousel.Caption>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>
                    Price: {price} ₴ <Badge bg="secondary">{amount}</Badge>
                  </Card.Text>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Col>
      <Col className="p-5">
        <Card.Title className="text-center mt-5 fs-1">
          Total price: {totalPrice} ₴
        </Card.Title>
      </Col>
    </Row>
  );
}
HistoryOrder.propTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.number,
};
