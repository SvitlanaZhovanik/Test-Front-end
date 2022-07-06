import PropTypes from 'prop-types';
import {
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Badge,
  Col,
  Placeholder,
  Spinner,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { ImLeaf } from 'react-icons/im';

export default function ProductsItem({
  id,
  name,
  description,
  contry,
  isVegan,
  calorieCount,
  ingredients,
  price,
  image,
  loading,
  handleClick,
}) {
  const amount = 1;
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      <Card.Title>Price: {price} ₴</Card.Title>
      <Card.Text>{contry}</Card.Text>
      <Card.Text>Ingredients: {ingredients}</Card.Text>
      <Card.Text>Calories: {calorieCount}</Card.Text>
    </Tooltip>
  );
  const onClick = () => {
    const product = { id, name, description, price, image, amount };
    handleClick(product);
  };
  return (
    <Col>
      {loading ? (
        <Card style={{ width: '18rem' }}>
          <Card
            bg="secondary"
            style={{ width: '18rem', height: '286px', objectFit: 'cover' }}
          >
            <Spinner
              animation="border"
              variant="primary"
              role="status"
              style={{ position: 'absolute', top: '45%', left: '45%' }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: '18rem', height: '480px' }}>
          <Card.Img
            style={{ width: '18rem', height: '286px', objectFit: 'cover' }}
            variant="top"
            src={image}
            alt={`Foto ${name}`}
          />

          <Card.Body>
            <Card.Title>
              {name}
              <Badge bg="light">
                {isVegan && (
                  <IconContext.Provider value={{ color: 'green' }}>
                    <ImLeaf />
                  </IconContext.Provider>
                )}
              </Badge>
            </Card.Title>

            <Card.Text style={{ height: '72px' }}>{description}</Card.Text>
            <OverlayTrigger
              placement="top-start"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button variant="primary" onClick={onClick}>
                add to Cart
              </Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
}
ProductsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  contry: PropTypes.string,
  isVegan: PropTypes.bool,
  calorieCount: PropTypes.number,
  ingredients: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};
