import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import FormTextField from './FormTextField';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phone: yup
    .string()
    .matches(
      /^[(]?[0]{1}[0-9]{2}[)]?[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Format (0xx)xxx-xx-xx',
    )
    .required('Required'),
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
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = 'Name is required';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        }
        if (!values.phone) {
          errors.phone = 'Phone is required';
        }
        if (!values.address) {
          errors.address = 'Address is required';
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        const normaliseEmail = values.email.toLowerCase();
        handleSubmit({ ...values, email: normaliseEmail });
        resetForm();
        toast.success(
          'Your details have been successfully added to the order ',
        );
      }}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
            </Row>
            <Row>
              <FormTextField
                as={Col}
                md={8}
                xl={10}
                controlId="Phone"
                label="Phone"
                type="text"
                name="phone"
                placeholder="(096)234-45-46"
              />
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
            </Row>
            <Col>
              <Button type="submit">Add your data to order</Button>
            </Col>
          </AnimatedStack>
        </Form>
      )}
    </Formik>
  );
}
ShopingForm.propTypes = {
  handleSubmit: PropTypes.func,
};
