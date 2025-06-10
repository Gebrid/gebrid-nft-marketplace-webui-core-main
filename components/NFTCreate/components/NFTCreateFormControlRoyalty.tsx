import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
};

type NFTCreateFormControlRoyaltyProps = Props & Register;

function NFTCreateFormControlRoyalty({
  register,
}: NFTCreateFormControlRoyaltyProps) {
  return (
    <Form.Group controlId="royalty" className={styles.formGroup}>
      <Form.Label className={styles.label}>Royalty*</Form.Label>
      <InputGroup className={styles.inputGroup}>
        <Form.Control
          type="number"
          placeholder="Royalty"
          className={styles.input}
          {...register?.('royalty', { valueAsNumber: true })}
        />
        <InputGroup.Text className={styles.inputText}>%</InputGroup.Text>
      </InputGroup>
      <Form.Text className={styles.labelUnder}>
        Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
      </Form.Text>
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlRoyalty);
