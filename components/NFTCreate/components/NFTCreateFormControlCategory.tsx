import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
  name: any;
};

type NFTCreateFormControlCategoryProps = Props & Register;

function NFTCreateFormControlCategory({
  control,
  name,
}: NFTCreateFormControlCategoryProps) {
  const options = [
    { value: 'exclusive', label: 'Exclusive' },
    { value: 'music', label: 'Music' },
    { value: 'art', label: 'Art' },
    { value: 'metaverse', label: 'Metaverse' },
    { value: 'defi', label: 'DeFi' },
    { value: 'gamefi', label: 'GameFi' },
  ];

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      position: 'relative',
      background: state.isSelected
        ? 'linear-gradient(274.54deg, rgba(179, 100, 226, 0.2) 0%, rgba(87, 165, 248, 0.2) 100%), #FFFFFF'
        : undefined,
      paddingLeft: 38,
      cursor: 'pointer',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 8,
      ':before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 14,
        marginTop: -10,
        width: 20,
        height: 20,
        backgroundImage:
          'url("/images/dummy/categories/' + state.data.value + '.png")',
      },
      ':after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        right: 14,
        marginTop: -10,
        width: 20,
        height: 20,
        background: state.isSelected
          ? 'url("/images/icons/icon-dropdown-selected.svg") center center no-repeat'
          : '',
      },
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: '8px 16px',
      borderRadius: 16,
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: 16,
      boxShadow:
        '0px 8px 12px rgba(0, 0, 0, 0.2), 0px -4px 12px rgba(0, 0, 0, 0.03), 0px 4px 12px rgba(0, 0, 0, 0.05)',
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: 50,
      background: '#F5F5F5',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      height: 50,
      display: 'flex',
      background: '#F5F5F5',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      height: 50,
      padding: 0,
      margin: 0,
      background: '#F5F5F5',
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      height: 50,
      padding: 0,
      margin: 0,
      background: '#F5F5F5',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      position: 'relative',
      paddingLeft: 32,
      ':before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 4,
        marginTop: -10,
        width: 20,
        height: 20,
        backgroundImage:
          'url("/images/dummy/categories/' + state.data.value + '.png")',
      },
    }),
  };

  return (
    <Form.Group controlId="category" className={styles.formGroup}>
      <Form.Label className={styles.label}>Choose categories</Form.Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, ref } }) => (
          <Select
            styles={customStyles}
            className={styles.select}
            options={options}
            isClearable={true}
            ref={ref}
            onBlur={onBlur}
            onChange={(value) => onChange(value?.value)}
          />
        )}
      />
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
    category: state['feature/create-nft'].category,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlCategory);
