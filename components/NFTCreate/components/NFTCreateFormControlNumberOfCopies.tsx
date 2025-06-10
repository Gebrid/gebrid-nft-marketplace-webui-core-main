import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
};

type NFTCreateFormControlNumberOfCopiesProps = Props & Register;

function NFTCreateFormControlNumberOfCopies({
  theme,
  register,
}: NFTCreateFormControlNumberOfCopiesProps) {
  return (
    <Form.Group controlId="copies" className={styles.formGroup}>
      <Form.Label className={styles.label}>Number of copies*</Form.Label>
      <Form.Control
        placeholder="Number of copies"
        className={styles.input}
        type="number"
        {...register?.('numberOfCopies', { valueAsNumber: true })}
      />
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlNumberOfCopies);
