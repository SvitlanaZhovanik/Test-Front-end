import { useState } from 'react';
import { CardGroup, Row, Card, Stack, FormControl } from 'react-bootstrap';

export default function ShopingList() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || [],
  );
  console.log(products);
  return (
    <CardGroup>
      <Row>
        {products.map(
          ({ id, name, description, image, price, amount }, idx) => {
            return (
              <Stack
                direction="horizontal"
                key={id}
                style={{ width: '35rem', height: '12rem' }}
              >
                <Card.Img
                  style={{
                    width: '150px',
                    height: '100px',
                    objectFit: 'containe',
                  }}
                  variant="top"
                  src={image}
                  alt={`Foto ${name}`}
                />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>

                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Price: {price} ₴</Card.Text>
                  <FormControl
                    type="number"
                    value={amount}
                    onChange={e => {
                      amount = e.target.value;
                      setProducts([
                        ...products,
                        (products[idx].amount = amount),
                      ]);
                    }}
                  />
                </Card.Body>
              </Stack>
            );
          },
        )}
      </Row>
    </CardGroup>
  );
}
