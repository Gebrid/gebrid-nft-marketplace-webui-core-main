import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faMagnifyingGlass,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import gradient from 'random-gradient';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import useWindowSize from '../../../hooks/useWindowSize';
import ThemeSwitcher from '../../Theme/components/Switcher';
import GradientButton, {
  ColorDirection,
} from '../../UI/Buttons/GradientButton';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import styles from '../styles/Header.module.scss';
import { SocialMediaIcon } from './Footer';

type HeaderProps = {
  theme: string | 'theme-light' | 'theme-dark';
};

type MenuItemProps = {
  content: string;
  link: string;
};

type RoundHeadeButtonProps = {
  iconType: IconDefinition;
  onClick?: Function;
};

function Header({ theme }: HeaderProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const { windowSize } = useWindowSize();

  const bgGradient = { background: gradient(session?.user?.name || 'a') };

  const MenuItem = ({ content, link }: MenuItemProps) => {
    return (
      <Link href={`${link}`} passHref>
        <div
          className={classNames({
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

  const HeaderLogo = () => {
    const logo =
      theme == 'theme-dark'
        ? '/images/logo-white.svg'
        : '/images/logo-black.svg';

    return (
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <a>
              <Image
                objectFit="contain"
                src={logo}
                layout="fill"
                alt="Gebrid Logo"
              />
            </a>
          </Link>
        </div>
      </div>
    );
  };

  const HeaderSearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const handleSearchSubmit = (e: any) => {
      e.preventDefault();
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    };
    return (
      <form className={styles.searchBox} onSubmit={handleSearchSubmit}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" hidden></button>
      </form>
    );
  };

  const HeaderMenu = () => {
    return (
      <div className={styles.headerMenu}>
        <MenuItem content={'Home'} link={'/'} />
        <MenuItem content={'Explore'} link={'/explore'} />
        <MenuItem content={'Artists'} link={'/artists'} />
        <MenuItem content={'About'} link={'/about'} />
      </div>
    );
  };

  const PrimaryHeaderButton = () => {
    return (
      <div className={styles.primaryButton}>
        <GradientButton
          onClick={() => router.push('/signin')}
          content={'Connect Wallet'}
          padding={'12px 19px'}
          colorDirection={ColorDirection.Reverse}
        />
      </div>
    );
  };

  const SecondaryHeaderButton = () => {
    return (
      <div className={styles.secondaryButton}>
        <SecondaryButton
          onClick={() => router.push(session ? '/create' : '/signin')}
          content={'Create NFT'}
          padding={'12px 33.5px'}
          theme={theme}
        />
      </div>
    );
  };

  const RoundHeaderButton = ({
    iconType,
    onClick = () => {},
  }: RoundHeadeButtonProps) => {
    return (
      <div className={styles.roundButton} onClick={() => onClick()}>
        <FontAwesomeIcon
          icon={iconType}
          className={classNames(styles.roundButtonIcon, {
            [styles.roundButtonIconDark]: theme === 'theme-dark',
          })}
        />
      </div>
    );
  };

  const ExtendedHeader = () => {
    return (
      <div className={styles.header}>
        <HeaderLogo />
        <HeaderSearchBox />
        <HeaderMenu />
        <PrimaryHeaderButton />
        <SecondaryHeaderButton />
        <ThemeSwitcher />
        {session ? (
          <Link href="/profile">
            <div className={styles.profileImage} style={bgGradient}></div>
          </Link>
        ) : null}
      </div>
    );
  };

  const CollapsedHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      setIsSearchOpen(false);
    };

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
      setIsOpen(false);
    };

    return (
      <div className={styles.headerCollapsed}>
        <HeaderLogo />
        <div className={styles.headerCollapsedButtonGroup}>
          <RoundHeaderButton
            iconType={isSearchOpen ? faX : faMagnifyingGlass}
            onClick={() => toggleSearch()}
          />
          <div
            hidden={!isSearchOpen}
            className={classNames(styles.searchBoxForCollapsedMenu, {
              [styles.searchBoxForCollapsedMenuDark]: theme === 'theme-dark',
            })}
          >
            <HeaderSearchBox />
          </div>
          <ThemeSwitcher />
          <RoundHeaderButton
            iconType={isOpen ? faX : faBars}
            onClick={() => toggleMenu()}
          />
          <div
            hidden={!isOpen}
            className={classNames(styles.headerCollapsedMenu, {
              [styles.headerCollapsedMenuDark]: theme === 'theme-dark',
            })}
          >
            <HeaderMenu />
            <hr
              className={classNames(styles.dividerLine, {
                [styles.dividerLineDark]: theme === 'theme-dark',
              })}
            />
            <div className={styles.socialMediaButtons}>
              <div className={styles.socialMediaButton}>
                <SocialMediaIcon
                  theme={theme}
                  link={'/'}
                  iconType={faInstagram}
                />
              </div>
              <div className={styles.socialMediaButton}>
                <SocialMediaIcon
                  theme={theme}
                  link={'/'}
                  iconType={faTelegramPlane}
                />
              </div>
              <div className={styles.socialMediaButton}>
                <SocialMediaIcon
                  theme={theme}
                  link={'/'}
                  iconType={faFacebookF}
                />
              </div>
              <div className={styles.socialMediaButton}>
                <SocialMediaIcon
                  theme={theme}
                  link={'/'}
                  iconType={faTwitter}
                />
              </div>
            </div>
            <PrimaryHeaderButton />
            <SecondaryHeaderButton />
          </div>
          {session ? (
            <div className={styles.profileRound}>
              <Link href="/profile">
                <div className={styles.profileImage} style={bgGradient}></div>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <Container
      className={classNames('.m-0', styles.headerContainer, {
        [styles.headerContainerDark]: theme === 'theme-dark',
      })}
    >
      {windowSize.innerWidth > 320 ? <ExtendedHeader /> : <CollapsedHeader />}
    </Container>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Header);
