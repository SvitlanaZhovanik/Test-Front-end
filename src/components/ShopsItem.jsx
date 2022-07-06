import PropTypes from 'prop-types';
import { ListGroup, Card, Placeholder } from 'react-bootstrap';

export default function ShopsItem({
  id,
  name,
  description,
  handleClick,
  loading,
  disabled,
}) {
  const onClick = () => {
    handleClick(id);
  };
  return loading ? (
    <ListGroup.Item
      onClick={onClick}
      variant="secondary"
      action
      as="li"
      id={id}
    >
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} />
      </Placeholder>
    </ListGroup.Item>
  ) : (
    <ListGroup.Item
      onClick={onClick}
      variant="secondary"
      action
      as="li"
      id={id}
      disabled={disabled}
    >
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </ListGroup.Item>
  );
}
ShopsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};
