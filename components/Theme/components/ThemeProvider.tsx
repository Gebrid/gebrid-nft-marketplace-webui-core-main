import React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'react-bootstrap';
import { connect } from 'react-redux';

type Props = {
  children: React.ReactNode;

  theme: string | 'theme-light' | 'theme-dark';
};

class ThemeProvider extends React.Component<Props, any> {
  render() {
    return (
      <main id="main" className={this.props.theme}>
        <BaseThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
          {this.props.children}
        </BaseThemeProvider>
      </main>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(ThemeProvider);
