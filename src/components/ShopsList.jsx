import { ListGroup } from 'react-bootstrap';
import ShopsItem from './ShopsItem';

export default function ShopsList({ data, handleClick, loading, disabled }) {
  return (
    <ListGroup as="ul">
      {data.map(({ _id, name, description }) => {
        return (
          <ShopsItem
            key={_id}
            name={name}
            description={description}
            id={_id}
            handleClick={handleClick}
            loading={loading}
            disabled={disabled}
          />
        );
      })}
    </ListGroup>
  );
}
