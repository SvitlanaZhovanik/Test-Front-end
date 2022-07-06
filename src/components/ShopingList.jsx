import PropTypes from 'prop-types';
import { CardGroup, Row } from 'react-bootstrap';
import ShopingItem from './ShopingItem';

export default function ShopingList({
  data,
  handleAmountChange,
  isLoading,
  handleDelete,
}) {
  return (
    <CardGroup className="w-100">
      <Row className="w-100">
        {data.map(({ id, name, description, image, price, amount }, idx) => {
          return (
            <ShopingItem
              key={id}
              id={id}
              name={name}
              description={description}
              image={image}
              price={price}
              amount={amount}
              handleAmountChange={handleAmountChange}
              idx={idx}
              isLoading={isLoading}
              handleDelete={handleDelete}
            />
          );
        })}
      </Row>
    </CardGroup>
  );
}
ShopingList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  handleAmountChange: PropTypes.func,
  handleDelete: PropTypes.func,
};
