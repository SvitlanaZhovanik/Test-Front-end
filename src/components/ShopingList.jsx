import { CardGroup, Row } from 'react-bootstrap';
import ShopingItem from './ShopingItem';

export default function ShopingList({ data, handleAmountChange, isLoading }) {
  return (
    <CardGroup className="w-100">
      <Row className="w-100">
        {data.map(({ id, name, description, image, price, amount }, idx) => {
          return (
            <ShopingItem
              key={id}
              name={name}
              description={description}
              image={image}
              price={price}
              amount={amount}
              handleAmountChange={handleAmountChange}
              idx={idx}
              isLoading={isLoading}
            />
          );
        })}
      </Row>
    </CardGroup>
  );
}
