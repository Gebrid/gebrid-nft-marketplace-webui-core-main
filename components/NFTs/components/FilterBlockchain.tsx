import React from "react";
import {connect} from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


type Props = {
  theme: string | "theme-tight" | "theme-dark"
}


class FilterBlockchain extends React.Component<Props, any> {
  render() {
    const options = [
      'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    );
  }

  _onSelect = (selectedOption: any) => {
    console.log(selectedOption);
  }
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme
  };
}

export default connect(mapStateToProps)(FilterBlockchain);
