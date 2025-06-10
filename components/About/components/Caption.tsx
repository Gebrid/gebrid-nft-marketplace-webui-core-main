import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import styles from '../styles/Caption.module.scss';

type AboutCaptionProps = {
  direction: string | 'left' | 'right';
};

const Caption = (props: AboutCaptionProps) => {
  const router = useRouter();

  return (
    <section className={styles.caption}>
      <Container>
        <Row className={styles.captionRow}>
          <Col lg={6} className={styles.captionImage}>
            <Image
              src="/images/hand.png"
              layout="fill"
              objectFit={'fill'}
              objectPosition={'center'}
              alt="Caption Image"
            />
          </Col>
          <Col lg={6} className={styles.captionTextWrapper}>
            <p className={styles.captionTitle}>
              Marketplace for{' '}
              <span className={styles.gradientText}>
                rich media content in the NFT format
              </span>
            </p>
            <div className={styles.captionText}>
              <div>
                A unique platform for tokenized rich
                <ul>
                  <li>
                    media content placement and consumption, providing an
                    opportunity of a wide experience with media
                  </li>
                  <li>
                    product and tokenization of intellectual property rights.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.captionActionWrapper}>
              <GradientButton
                onClick={() => router.push('/signin')}
                content={'Connect Wallet'}
                padding={'12px 19px'}
                colorDirection={ColorDirection.Reverse}
                width={'177px'}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(Caption);
