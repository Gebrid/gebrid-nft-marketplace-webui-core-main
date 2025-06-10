import { withRouter } from 'next/router';
import { Component } from 'react';
import { connect } from 'react-redux';
// import Explore from "../../components/NFTs/Explore";

class ExploreCategory extends Component<any, any> {
  render() {
    return <>{/*<Explore />*/}</>;
  }
}

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(withRouter(ExploreCategory));
