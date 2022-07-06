import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import { Field } from 'formik';

const FormTextField = ({
  as,
  controlId,
  md,
  xl,
  label,
  name,
  type,
  placeholder,
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const isValid = !form.errors[field.name];
        const isInvalid = form.touched[field.name] && !isValid;
        return (
          <Form.Group as={as} md={md} xl={xl} controlId={controlId}>
            <Form.Label>{label}</Form.Label>

            <InputGroup>
              <Form.Control
                {...field}
                type={type}
                isValid={form.touched[field.name] && isValid}
                isInvalid={isInvalid}
                placeholder={placeholder}
              />
              {form.touched[field.name] && form.errors[field.name] && (
                <InputGroup.Text>{form.errors[field.name]}</InputGroup.Text>
              )}
            </InputGroup>
          </Form.Group>
        );
      }}
    </Field>
  );
};

FormTextField.defaultProps = {
  type: 'text',
};

FormTextField.propTypes = {
  as: PropTypes.object,
  controlId: PropTypes.string,
  md: PropTypes.number,
  xl: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormTextField;
