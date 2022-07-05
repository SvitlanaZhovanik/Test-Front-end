import { useState } from 'react';
import {
  Card,
  Stack,
  FormControl,
  Spinner,
  Placeholder,
  Container,
} from 'react-bootstrap';

export default function ShopingItem({
  id,
  name,
  description,
  image,
  price,
  amount,
  idx,
  handleAmountChange,
  isLoading,
}) {
  const [value, setValue] = useState(amount);

  const handleChange = e => {
    setValue(e.target.value);
    handleAmountChange(e.target.value, idx);
  };
  return (
    <>
      {isLoading ? (
        <Stack
          direction="horizontal"
          key={id}
          className="w-100 h-40 mb-3 ms-3 border border-secondary"
        >
          <Container
            bg="secondary"
            style={{
              width: '200px',
              height: '200px',
              position: 'relative',
            }}
          >
            <Spinner
              animation="border"
              variant="primary"
              role="status"
              style={{ position: 'absolute', top: '45%', left: '45%' }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder as={FormControl} animation="glow" xs={4} />
          </Card.Body>
        </Stack>
      ) : (
        <Stack
          direction="horizontal"
          key={id}
          className="w-100 h-40 mb-3 ms-3 border border-secondary"
        >
          <Card.Img
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'containe',
            }}
            src={image}
            alt={`Foto ${name}`}
          />

          <Card.Body
            style={{
              width: '20rem',
            }}
          >
            <Card.Title>{name}</Card.Title>

            <Card.Text>{description}</Card.Text>
            <Card.Text>Price: {price} ₴</Card.Text>
            <FormControl
              type="number"
              min={1}
              value={value}
              onChange={handleChange}
              style={{ width: '5rem' }}
            />
          </Card.Body>
        </Stack>
      )}
    </>
  );
}
