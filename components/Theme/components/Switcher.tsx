import classNames from 'classnames';
import Image from 'next/image';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import useWindowSize from '../../../hooks/useWindowSize';
import { setThemeDark, setThemeLight, themeToggle } from '../actions';
import styles from '../styles/Switcher.module.scss';

type Props = {
  className?: string | undefined;
  theme: string | 'theme-light' | 'theme-dark';
  themeToggle: Function;
};

function ThemeSwitcher(props: Props) {
  const { windowSize } = useWindowSize();
  const { className, theme, themeToggle } = props;
  const iconSun =
    theme === 'theme-dark'
      ? '/images/icons/icon-sun-dark.svg'
      : '/images/icons/icon-sun-light.svg';
  const iconMoon =
    theme === 'theme-dark'
      ? '/images/icons/icon-moon-dark.svg'
      : '/images/icons/icon-moon-light.svg';

  if (windowSize.innerWidth <= 320) {
    return (
      <div
        className={classNames(styles.switcherWrapperRound, className)}
        onClick={() => themeToggle()}
      >
        <Image
          src={theme === 'theme-dark' ? iconMoon : iconSun}
          width={16}
          height={16}
          alt=""
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.switcherWrapper, className)}>
      <Image src={iconSun} width={16} height={16} alt="" />
      <Form>
        <Form.Check
          type="switch"
          id="theme-switcher"
          className={styles.switcher}
          defaultChecked={theme === 'theme-dark'}
          onClick={() => themeToggle()}
        />
      </Form>
      <Image src={iconMoon} width={16} height={16} alt="" />
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

const _mapDispatchToProps = {
  setThemeLight: setThemeLight,
  setThemeDark: setThemeDark,
  themeToggle: themeToggle,
};

export default connect(mapStateToProps, _mapDispatchToProps)(ThemeSwitcher);
