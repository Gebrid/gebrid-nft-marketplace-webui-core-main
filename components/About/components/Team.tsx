import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from '../styles/Team.module.scss';

type TeamProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

type TeamMemberProps = {
  src: string;
  name: string;
  title: string;
};

const TeamMember = (props: TeamMemberProps) => {
  const { src, name, title } = props;

  return (
    <Col lg={3} className={styles.teamMemberHolder}>
      <div className={styles.imageWrapper}>
        {/*<Image src={src} width={162} height={178} alt={`${title} Photo`} />*/}
        <Image
          src={src}
          layout="fill"
          objectFit={'cover'}
          objectPosition={'center'}
          alt={`${title} Photo`}
        />
      </div>
      <p className={styles.teamMemberName}>{name}</p>
      <p className={styles.teamMemberTitle}>{title}</p>
    </Col>
  );
};

const Team = (props: TeamProps) => {
  return (
    <Container className={styles.teamWrapper}>
      <Row>
        <Col lg={12}>
          <h4 className={styles.teamTitle}>Our Super Team</h4>
          <p className={styles.teamDescription}>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum.
          </p>
        </Col>
      </Row>
      <Row className={styles.teamMembersWrapper}>
        <TeamMember
          src={'/images/dummy/teammate.png'}
          name={'Jenny Wilson'}
          title={'CEO & Co-founder of Gebrid'}
        />
        <TeamMember
          src={'/images/dummy/teammate.png'}
          name={'Jenny Wilson'}
          title={'CEO & Co-founder of Gebrid'}
        />
        <TeamMember
          src={'/images/dummy/teammate.png'}
          name={'Jenny Wilson'}
          title={'CEO & Co-founder of Gebrid'}
        />
        <TeamMember
          src={'/images/dummy/teammate.png'}
          name={'Jenny Wilson'}
          title={'CEO & Co-founder of Gebrid'}
        />
      </Row>
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Team);
