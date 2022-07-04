import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAllShops, getProductsById } from 'api/api';
import ShopsList from 'components/ShopsList';
import ProductsList from 'components/ProductsList';
import { toast } from 'react-toastify';

export default function ShopsPage() {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(localStorage.getItem('id') || null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem('products')) || [],
  );

  useEffect(() => {
    getAllShops().then(shops => {
      setShops(shops);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (order.length !== 0) {
      setDisabled(true);
    }
    if (id) {
      setIsLoading(true);
      localStorage.setItem('id', id);
      getProductsById(id).then(products => {
        setProducts(products);
        setIsLoading(false);
      });
    }
  }, [id, order]);
  useEffect(() => {
    if (order) {
      localStorage.setItem('products', JSON.stringify(order));
    }
  }, [order]);

  const handleClick = id => {
    setId(id);
  };
  const handleProductClick = product => {
    order.forEach(element => {
      if (product.id === element.id) {
        element.amount = element.amount + 1;
        setOrder([...order]);
      }
    });
    if (!order.find(item => item.id === product.id)) {
      setOrder([...order, product]);
    }
    setDisabled(true);
    toast.success('Product in Shoping Card');
  };

  return (
    <Container>
      <h1 className="isHidden">Section Shops</h1>
      <Row>
        <Col md={5} lg={3}>
          <ShopsList
            data={shops}
            handleClick={handleClick}
            loading={isLoading}
            disabled={isDisabled}
          />
        </Col>
        <Col>
          <ProductsList
            data={products}
            loading={isLoading}
            handleClick={handleProductClick}
          />
        </Col>
      </Row>
    </Container>
  );
}
