import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearNFTCreateCharity, setNFTCreateCharity } from '../actions';
import styles from '../styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';

  charity: boolean;

  setNFTCreateCharity: Function;
  clearNFTCreateCharity: Function;
};

class NFTCreateFormControlCharity extends React.Component<Props, any> {
  render() {
    return (
      <Form.Group controlId="name" className={styles.formGroup}>
        <Form.Label className={styles.labelSwitch}>Charity</Form.Label>
        <Form.Check
          type="switch"
          id="charity-switcher"
          className={styles.switch}
          onClick={(e) => {
            this._setCharity(e);
          }}
          checked={this.props.charity}
        />
      </Form.Group>
    );
  }

  _setCharity = (e: any) => {
    if (e.target.value == 'on') {
      this.props.clearNFTCreateCharity();
    } else {
      this.props.setNFTCreateCharity(true);
    }
  };
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
    charity: state['feature/create-nft'].charity,
  };
}

const _mapDispatchToProps = {
  setNFTCreateCharity: setNFTCreateCharity,
  clearNFTCreateCharity: clearNFTCreateCharity,
};

export default connect(
  mapStateToProps,
  _mapDispatchToProps
)(NFTCreateFormControlCharity);
