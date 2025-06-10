import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Register } from 'types/formSchemaType';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
};

type NFTCreateFormControlBlockchainProps = Props & Register;

function NFTCreateFormControlBlockchain({
  theme,
  control,
}: NFTCreateFormControlBlockchainProps) {
  const options = [
    { value: 'polygon', label: 'Polygon', isDisabled: false },
    { value: 'ethereum', label: 'Ethereum', isDisabled: true },
    { value: 'solana', label: 'Solana', isDisabled: true },
    { value: 'tezos', label: 'Tezos', isDisabled: true },
  ];

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      position: 'relative',
      background: state.isSelected
        ? 'linear-gradient(274.54deg, rgba(179, 100, 226, 0.2) 0%, rgba(87, 165, 248, 0.2) 100%), #FFFFFF'
        : undefined,
      paddingLeft: 38,
      cursor: state.isDisabled ? '' : 'pointer',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 8,
      opacity: state.isDisabled ? 0.5 : 1,
      ':before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 14,
        marginTop: -10,
        width: 20,
        height: 20,
        backgroundImage:
          'url("/images/icons/icon-' + state.data.value + '.svg")',
      },
      ':after': {
        content: state.isDisabled ? '"Soon"' : '""',
        position: 'absolute',
        top: '50%',
        right: 14,
        marginTop: -12,
        width: state.isDisabled ? '' : 20,
        fontWeight: 500,
        fontSize: 12,
        lineHeight: '130%',
        color: 'white',
        height: 24,
        borderRadius: 4,
        padding: state.isDisabled ? '4px 12px' : 0,
        background: state.isDisabled
          ? 'linear-gradient(274.54deg, #B364E2 0%, #57A5F8 100%);'
          : state.isSelected
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
    valueContainer: (provided: any) => ({
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
          'url("/images/icons/icon-' + state.data.value + '.svg")',
      },
    }),
  };

  return (
    <Form.Group controlId="category" className={styles.formGroup}>
      <Form.Label className={styles.label}>Blockchain</Form.Label>
      <Controller
        defaultValue={options[0].value}
        name={'blockchain'}
        control={control}
        render={({ field: { onChange, onBlur, ref } }) => (
          <Select
            styles={customStyles}
            defaultValue={options[0]}
            className={styles.select}
            options={options}
            ref={ref}
            isClearable={true}
            onBlur={onBlur}
            onChange={(value) => {
              onChange(value?.value);
            }}
          />
        )}
      />
    </Form.Group>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormControlBlockchain);
