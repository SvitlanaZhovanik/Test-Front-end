import { Col, Row, Container, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ShopingForm from 'components/ShopingForm';
import ShopingList from 'components/ShopingList';

export default function ShopingCartPage() {
  return (
    <Container>
      <h2 className="isHidden">Section Shoping Cart</h2>
      <Row>
        <Card
          style={{
            width: '40rem',
            height: '30rem',
            padding: '8px',
          }}
          border="primary"
        >
          <Col>
            <ShopingForm />
          </Col>
        </Card>
        <Card style={{ width: '40rem', height: '30rem' }} border="primary">
          <ShopingList />
        </Card>
      </Row>
    </Container>
  );
}
