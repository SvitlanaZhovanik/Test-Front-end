import { useEffect, useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import ShopingForm from 'components/ShopingForm';
import ShopingList from 'components/ShopingList';
import { addOrder } from 'api/api';

export default function ShopingCartPage({ isClear }) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || [],
  );
  const [userdata, setUserData] = useState({});
  const [totalPrice, setTotalPrice] = useState('0');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const countTotalPrice = () => {
      return products.reduce((acc, currentValue) => {
        return currentValue.price * currentValue.amount + acc;
      }, 0);
    };
    setTotalPrice(countTotalPrice());
  }, [products]);

  const handleUserDataSubmit = value => {
    setUserData(value);
  };

  const handleAmountChange = (value, idx) => {
    products[idx].amount = Number(value);
    setProducts([...products]);
    localStorage.setItem('products', JSON.stringify(products));
  };
  const handleClick = () => {
    setIsLoading(true);
    const order = { ...userdata, products, totalPrice };
    addOrder(order).then(order => {
      if (order) {
        setUserData({});
        setProducts([]);
        localStorage.clear();
        isClear();
      }
    });
    setIsLoading(true);
  };
  return (
    <Container>
      <h2 className="isHidden">Section Shoping Cart</h2>
      <Row>
        <Col className="mb-2 w-auto p-3 shadow-lg">
          <ShopingForm handleSubmit={handleUserDataSubmit} />
        </Col>
        <Col lg="8">
          <Card
            style={{
              padding: '1rem',
              height: '30rem',
              overflowY: 'scroll',
              scrollBehavior: 'smooth',
            }}
            border="primary"
          >
            <ShopingList
              data={products}
              handleAmountChange={handleAmountChange}
              isLoading={isLoading}
            />
          </Card>
        </Col>
      </Row>
      <div className="mt-3 mb-3 d-flex justify-content-center justify-content-md-evenly justify-content-xl-end">
        <Card.Title className="me-3 pb-2 pt-2 mb-0 border-bottom border-primary">
          Total price : {totalPrice} ₴
        </Card.Title>
        {products.length && Object.keys(userdata).length ? (
          <Button onClick={handleClick} type="submit">
            Submit
          </Button>
        ) : (
          <Button disabled type="submit">
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
}
