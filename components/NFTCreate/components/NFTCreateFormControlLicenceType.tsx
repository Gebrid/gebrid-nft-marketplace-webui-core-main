import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { FormValues, Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
  name: FormValues;
};

type NFTCreateFormControlLicenceTypeProps = Props & Register;

function NFTCreateFormControlLicenceType({
  theme,
  name,
  control,
}: NFTCreateFormControlLicenceTypeProps) {
  return (
    <Form.Group controlId="licenceType" className={styles.formGroup}>
      <Form.Label className={styles.label}>Choose Type</Form.Label>
      <div className={styles.radioWrapper}>
        <Controller
          control={control}
          //@ts-ignore
          name={name}
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <Form.Check
                type="radio"
                name="itemType"
                id="itemTypeSingle"
                label="Single License"
                defaultChecked={true}
                className={styles.radioItemType}
                value="single"
                onChange={onChange}
              ></Form.Check>
              <Form.Check
                type="radio"
                name="itemType"
                id="itemTypeMultiple"
                label="Multiple License"
                onChange={onChange}
                value="multiple"
                className={styles.radioItemType}
              ></Form.Check>
            </>
          )}
        />
      </div>
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlLicenceType);
