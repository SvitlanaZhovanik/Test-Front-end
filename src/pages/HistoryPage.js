import HistoryForm from 'components/HistoryForm';
import HistoryOrder from 'components/HistoryOrder';
import { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { getOrdersByValue } from '../api/api';

export default function HistoryPage() {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    if (email || phone) {
      getOrdersByValue(email, phone).then(data => {
        if (!data) {
          setIsError(true);
          return;
        }
        setIsError(false);
        setOrders(data);
      });
    }
  }, [email, phone]);

  return (
    <Container>
      <h2 className="isHidden">History Page</h2>
      <Row>
        <HistoryForm changeEmail={setEmail} changePhone={setPhone} />
      </Row>
      <Row
        style={{
          height: '40rem',
          padding: '2rem',
          overflowY: 'scroll',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        {isError ? (
          <Card.Text className="mt-4 text-center">
            There are no orders yet
          </Card.Text>
        ) : (
          orders?.map(({ _id, products, totalPrice }) => {
            return (
              <HistoryOrder
                key={_id}
                products={products}
                totalPrice={totalPrice}
              />
            );
          })
        )}
      </Row>
    </Container>
  );
}
