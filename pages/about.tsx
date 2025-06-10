import { Component } from 'react';
import { connect } from 'react-redux';
import CallToAction from '../components/About/components/CallToAction';
import Caption from '../components/About/components/Caption';
import Lead from '../components/About/components/Lead';
import Partners from '../components/About/components/Partners';
import Team from '../components/About/components/Team';
import Values from '../components/About/components/Values';
import VideoCaption from '../components/About/components/VideoCaption';
import LatestPosts from '../components/Blog/components/LatestPosts';

class About extends Component<any, any> {
  render() {
    return (
      <>
        <Lead />
        <Caption direction="left" />
        <Values />
        <VideoCaption />
        <Partners />
        <Team />
        <LatestPosts />
        <CallToAction />
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(About);
