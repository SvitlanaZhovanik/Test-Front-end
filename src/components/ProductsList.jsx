import PropTypes from 'prop-types';
import { CardGroup, Row } from 'react-bootstrap';
import ProductsItem from './ProductsItem';

export default function ProductsList({ data, loading, handleClick }) {
  return (
    <CardGroup>
      <Row xs={1} lg={2} xl={3} className="g-4">
        {data.map(
          ({
            _id,
            name,
            description,
            country,
            isVegan,
            ingredients,
            calorieCount,
            price,
            image,
          }) => {
            return (
              <ProductsItem
                key={_id}
                id={_id}
                name={name}
                description={description}
                country={country}
                isVegan={isVegan}
                calorieCount={calorieCount}
                price={price}
                image={image}
                ingredients={ingredients}
                loading={loading}
                handleClick={handleClick}
              />
            );
          },
        )}
      </Row>
    </CardGroup>
  );
}

ProductsList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};
