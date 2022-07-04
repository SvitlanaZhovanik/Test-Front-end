import { Form } from 'react-bootstrap';
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
            <Form.Control
              {...field}
              type={type}
              isValid={form.touched[field.name] && isValid}
              isInvalid={isInvalid}
              placeholder={placeholder}
            />
          </Form.Group>
        );
      }}
    </Field>
  );
};

FormTextField.defaultProps = {
  type: 'text',
};

export default FormTextField;
