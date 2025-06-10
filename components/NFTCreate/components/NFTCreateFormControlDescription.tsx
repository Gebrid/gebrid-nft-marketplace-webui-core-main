import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
};

type NFTCreateFormControlDescriptionProps = Props & Register;

function NFTCreateFormControlDescription({
  theme,
  register,
}: NFTCreateFormControlDescriptionProps) {
  return (
    <Form.Group controlId="description" className={styles.formGroup}>
      <Form.Label className={styles.label}>Description</Form.Label>
      <Form.Text className={styles.labelUnder}>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
      </Form.Text>
      <Form.Control
        as="textarea"
        placeholder="Description"
        className={styles.textarea}
        rows={5}
        {...register?.('description')}
      />
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlDescription);
