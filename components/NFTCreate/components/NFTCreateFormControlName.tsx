import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
};

type NFTCreateFormControlNameProps = Props & Register;

function NFTCreateFormControlName({
  theme,
  errors,
  register,
}: NFTCreateFormControlNameProps) {
  return (
    <Form.Group controlId="name" className={styles.formGroup}>
      <Form.Label className={styles.label}>Name*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Item name"
        className={styles.input}
        {...register?.('name', { required: true })}
      />
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlName);
