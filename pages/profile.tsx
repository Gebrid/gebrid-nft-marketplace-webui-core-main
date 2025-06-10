import { getUserTokens } from 'api/getUserTokens';
import { getBothProfilePictures } from 'api/profile';
import NFTsSlider from 'components/NFTs/components/NFTsSlider';
import { ProfileInfo } from 'components/Profile';
import { AddCover } from 'components/Profile/components/AddCover';
import { ProfileTabs } from 'components/Profile/components/ProfileTabs';
import { useProfileTabs } from 'hooks/useProfileTabs';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { IUserSession } from 'types/types';
import styles from '../components/Profile/styles/ProfileWrapper.module.scss';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  user: IUserSession;
  avatar: string;
  cover: string;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  // if (session) {
  //   const data = await getUserTokens(session.user?.name)
  // }

  let data: {avatar: null | string, cover: null | string} = {avatar: null, cover: null};
  if (session.user?.address) {
    data = await getBothProfilePictures(session.user.address)
  }

  return {
    props: { user: session.user,
             avatar: data.avatar,
             cover: data.cover,
           },
  };
}

function ProfilePage({ theme, user, avatar, cover }: Props) {
  const { tabs, handleSetActiveTab, activeTab } = useProfileTabs();

  const { data: NFTs, status } = useQuery(
    [activeTab.id],
    () => getUserTokens(user.address),
    {
      enabled: user.address ? true : false,
    }
  );

  return (
    <>
      {/* {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}

      <div>
        <h4>User session:</h4>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div> */}

      <Container className={styles.profile}>
        <Row>
          <Col lg={12}>
            <AddCover theme={theme} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <ProfileInfo user={user} theme={theme} avatar={avatar} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className={styles.profileTabsWrapper}>
            <ProfileTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={handleSetActiveTab}
            />
          </Col>
        </Row>

        {status === 'success' ? <NFTsSlider NFTs={NFTs} /> : null}
      </Container>
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(ProfilePage);
