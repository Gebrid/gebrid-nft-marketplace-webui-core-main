import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container, Form, FormControl, Nav, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from '../styles/Footer.module.scss';

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
};

type SocialMediaIconProps = {
  theme: string;
  link: string;
  iconType: IconDefinition;
};

type NavigationLinkProps = {
  link: string;
  content: string;
  hidden?: boolean;
  theme: string;
};

export const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { theme, link, iconType } = props;
  return (
    <Col xxl={2} xl={3} lg={3} md={3} sm={3} xs={3}>
      <Link href={`${link}`}>
        <span
          className={classNames(styles.socialIcon, {
            [styles.socialIconDark]: theme === 'theme-dark',
          })}
        >
          <FontAwesomeIcon icon={iconType} width={22} height={22} />
        </span>
      </Link>
    </Col>
  );
};

const NavigationLink = (props: NavigationLinkProps) => {
  const { windowSize } = useWindowSize();
  const router = useRouter();

  const { link, content, hidden, theme } = props;

  return (
    <Link href={`${link}`} passHref className={styles.navLinkWrapper}>
      <div
        style={{
          display: windowSize.innerWidth <= 320 && hidden ? 'none' : 'block',
        }}
        className={classNames(styles.navLink, {
          [styles.navLinkDark]: theme === 'theme-dark',
          [styles.navLinkLight]: theme === 'theme-light',
          [styles.navLinkActive]: router.pathname === link,
        })}
      >
        {content}
      </div>
    </Link>
  );
};

function Footer({ theme }: Props) {
  const { windowSize } = useWindowSize();
  const logo =
    theme == 'theme-dark' ? '/images/logo-white.svg' : '/images/logo-black.svg';
    const [email, setEmail] = useState('');

    const handleSubscriptionSumbit = async (e: any) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ to: email }),
        });
  
        if (response.ok) {
          console.log('Email sent successfully');
          setEmail('');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }

  return (
    <div
      className={classNames(styles.footer, {
        [styles.footerDark]: theme === 'theme-dark',
        [styles.footerLight]: theme === 'theme-light',
      })}
    >
      <Container className={styles.footerContainer}>
        <Row className={styles.footerRow}>
          <Col lg={4} className="g-0">
            <Row>
              <Col lg={12} className="g-0">
                <div className={styles.logo}>
                  <Image src={logo} width={110} height={32} alt="Gebrid Logo" />
                </div>
                <p
                  className={classNames(styles.joinCommunity, {
                    [styles.whiteTextForDarkMode]: theme === 'theme-dark',
                  })}
                >
                  Join <span className={styles.blue}>GEBRID</span> community
                </p>
              </Col>
            </Row>
            <Row lg={12}>
              <SocialMediaIcon
                theme={theme}
                link={'/'}
                iconType={faInstagram}
              />
              <SocialMediaIcon
                theme={theme}
                link={'/'}
                iconType={faTelegramPlane}
              />
              <SocialMediaIcon
                theme={theme}
                link={'/'}
                iconType={faFacebookF}
              />
              <SocialMediaIcon theme={theme} link={'/'} iconType={faTwitter} />
            </Row>
          </Col>
          <Col lg={6} className="g-0">
            <p
              className={classNames(styles.subscribe, {
                [styles.whiteTextForDarkMode]: theme === 'theme-dark',
              })}
            >
              Get the latest <span className={styles.blue}>GEBRID</span> updates
            </p>
            <Form
              className={classNames(styles.subscribeFormWrapper, {
                [styles.subscribeFormWrapperDark]: theme === 'theme-dark',
                [styles.subscribeFormWrapperLight]: theme === 'theme-light',
              })}
              onSubmit={handleSubscriptionSumbit}
            >
              <FormControl
                type="input"
                className={classNames({
                  [styles.subscribeEmailDark]: theme === 'theme-dark',
                  [styles.subscribeEmailLight]: theme === 'theme-light',
                })}
                placeholder={
                  windowSize.innerWidth <= 320
                    ? 'Your email here...'
                    : 'Enter your email here...'
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classNames(styles.button, styles.buttonPrimary)}>
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Col>
          <Col lg={2} className="g-0">
            <Nav
              variant="pills"
              className={classNames(styles.navigation, {
                [styles.navigationDark]: theme === 'theme-dark',
              })}
            >
              <NavigationLink link={'/'} content={'Home'} theme={theme} />
              <NavigationLink link={'/about'} content={'About'} theme={theme} />
              <NavigationLink
                link={'/artists'}
                content={'Artists'}
                theme={theme}
              />
              <NavigationLink
                link={'/explore'}
                content={'NFT Catalogue'}
                hidden={true}
                theme={theme}
              />
              <NavigationLink
                link={'/explore'}
                content={'Explore'}
                theme={theme}
              />
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="g-0">
            <div
              className={classNames(styles.copyright, {
                [styles.whiteTextForDarkMode]: theme === 'theme-dark',
              })}
            >
              © GEBRID, Inc. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Footer);
