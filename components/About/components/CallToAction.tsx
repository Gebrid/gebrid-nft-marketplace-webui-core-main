import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/CallToAction.module.scss';

type CallToActionProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

const CallToAction = (props: CallToActionProps) => {
  const router = useRouter();

  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.ctaBg}></div>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8} className={styles.ctaCol}>
            <h4 className={styles.ctaTitle}>Interested in joining us?</h4>
            <p className={styles.ctaDescription}>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum.
            </p>
            <p className={styles.ctaActionWrapper}>
              <GradientButton
                onClick={() => router.push('/signin')}
                content={'Subscribe'}
                padding={'12px 19px'}
                colorDirection={ColorDirection.Reverse}
                width={'177px'}
              />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(CallToAction);
