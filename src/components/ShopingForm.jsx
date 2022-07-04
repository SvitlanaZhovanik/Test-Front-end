import { Formik } from 'formik';
import * as yup from 'yup';
import { Col, Form, Row, Stack } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import FormTextField from './FormTextField';

const schema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phone: yup.string().required('Required'),
  address: yup.string().required('Required'),
});

export default function ShopingForm({ handleSubmit }) {
  const AnimatedStack = animated(Stack);

  const animation = {
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
  };
  const props = useSpring(animation);
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
    >
      {({ submit, errors, touched }) => (
        <Form noValidate onSubmit={submit}>
          <AnimatedStack gap={3} style={props}>
            <Row>
              <FormTextField
                as={Col}
                md={8}
                xl={10}
                controlId="Name"
                label="Name"
                type="text"
                name="name"
                placeholder="Mark"
              />
              {touched.name && errors.name && (
                <Form.Text>{errors.name}</Form.Text>
              )}
            </Row>
            <Row>
              <FormTextField
                as={Col}
                md={8}
                xl={10}
                controlId="email"
                label="Email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              {touched.email && errors.email && (
                <Form.Text>{errors.email}</Form.Text>
              )}
            </Row>
            <Row>
              <FormTextField
                as={Col}
                md={8}
                xl={10}
                controlId="Phone"
                label="Phone"
                type="phone"
                name="phone"
                placeholder="(096)234-45-46"
              />
              {touched.phone && errors.phone && (
                <Form.Text>{errors.phone}</Form.Text>
              )}
            </Row>
            <Row>
              <FormTextField
                as={Col}
                md={8}
                xl={10}
                controlId="Address"
                label="Address"
                type="text"
                name="address"
                placeholder="Kyiv, st. Obolonsky 45"
              />
              {touched.address && errors.address && (
                <Form.Text>{errors.address}</Form.Text>
              )}
            </Row>
          </AnimatedStack>
        </Form>
      )}
    </Formik>
  );
}
