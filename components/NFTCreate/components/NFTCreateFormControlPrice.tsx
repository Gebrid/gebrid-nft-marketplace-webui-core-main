import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import { useNetwork } from 'wagmi';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
  price: number;
};

type NFTCreateFormControlPriceProps = Props & Register;

function NFTCreateFormControlPrice({
  price,
  register,
}: NFTCreateFormControlPriceProps) {
  const { chain } = useNetwork();

  const nativeCurrency = chain?.nativeCurrency?.symbol;

  return (
    <Form.Group controlId="price" className={styles.formGroup}>
      <Form.Label className={styles.label}>Price*</Form.Label>
      <Form.Control
        type="number"
        placeholder="Price"
        className={styles.input}
        {...register?.('price', { required: true, valueAsNumber: true })}
      />
      <Form.Text className={styles.labelUnder}>
        Service Fee <span className={styles.black}>1,5%</span>
      </Form.Text>
      <Form.Text className={styles.labelUnder}>
        You will receive{' '}
        <span className={styles.black}>
          {price ? price * 0.985 : '0.0'} MATIC
        </span>
      </Form.Text>
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlPrice);
