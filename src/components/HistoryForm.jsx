import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function HistoryForm({ changeEmail, changePhone }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const normaliseEmail = email.toLowerCase();
    email && changeEmail(normaliseEmail);
    phone && changePhone(phone);
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow-lg p-3">
      <Row>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </Form.Group>
        </Col>
        <Col lg={5}>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(097)123-45-67"
            />
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit">Search</Button>
    </Form>
  );
}
HistoryForm.propTypes = {
  changeEmail: PropTypes.func,
  changePhone: PropTypes.func,
};
