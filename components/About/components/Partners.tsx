import classNames from 'classnames';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/Partners.module.scss';

type PartnersProps = {
  theme: string | 'theme-light' | 'theme-dark';
};
type PartnerProps = {
  theme: string;
  name: string;
};

const Partners = (props: PartnersProps) => {
  const { theme } = props;

  const partners = [
    'partner-1.png',
    'partner-2.png',
    'partner-3.png',
    'partner-4.png',
    'partner-5.png',
    'partner-6.png',
    'partner-7.png',
    'partner-8.png',
    'partner-9.png',
    'partner-10.png',
  ];

  const Partner = (props: PartnerProps) => {
    const { theme, name } = props;
    const imageTheme = theme === 'theme-light' ? `light` : 'dark';

    return (
      <Col lg={2} className={styles.partnerWrapper}>
        <Image
          src={`/images/partners/${imageTheme}/${name}`}
          layout="fill"
          objectFit={'contain'}
          objectPosition={'center'}
          alt="Partner Image"
        />
      </Col>
    );
  };

  return (
    <section
      className={classNames(styles.partners, {
        [styles.partnersLight]: theme === 'theme-light',
        [styles.partnersDark]: theme === 'theme-dark',
      })}
    >
      <Container>
        <Row className={styles.partnersRow}>
          {partners.map((partner) => {
            return <Partner theme={theme} name={partner} />;
          })}
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

export default connect(mapStateToProps)(Partners);
